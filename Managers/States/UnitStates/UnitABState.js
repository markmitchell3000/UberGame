//enum UNIT_STATE {IDLE, WALK, ATTACK, PURSUE, FLEE, DIE, CAPTURE, LEFTSTRAFE, RIGHTSTRAFE, BACKRUN};
//Abstract class for Animation and behavior states
//these are values of a hash manager that uses cooresponding strings as keys
//non animated units will only use behavior
public class UnitABState{
	protected var stateName:String;//should match the key that stores it, used for animation reference
    protected var hasTimer:boolean;//unit may go idle or another state for a time 
    protected var timer:int;//state has set time remaining in some cases
    public function UnitABState(sn:String){
    	stateName=sn;
    	hasTimer=false;
    }

    public function UnitABState(sn:String, t: int){
    	stateName=sn;
    	timer=t;
    	hasTimer=true;
    }
    
    /*This returns the key for next state which is often the current state.
      Some states may be on a timer, others are chained together. States such 
      as scan or pursue check for targets and may transition to another state 
      such as attack.  If target it killed unit will go to a scan state to 
      acquire new target*/
    public function getNextStateString(){

    }

    public function update(){
        //perform states actions, may cause new next state.
    }

    //called in update to decrement timer and check if has hit zero
    public function checkTimer(){
    	if(hasTimer){
    		timer--;//may use a timer delta
    		if(timer<=0){return true;}//timer is out
    		else{return false;}//timer is not out.
    	}
    	else{
    		return false;//timer doesn't exist so cannot run out
    	}
    }

    //takes units speed and figures out how much was moved that frame
    private function calMoveDistance(speed:int){
        var randomSpeed2:int = Random.Range(10+(speed/2),30+(speed/2));//unsure if half of speed is good multiplier
        return (randomSpeed2/2 * Time.deltaTime);
    }

    private function calRightMove(){
        var randomSpeed: int = Random.Range(-40,40);
        return (randomSpeed/4 * Time.deltaTime);
    }
    
    private function moveToTarget(unitTf: Transform, speed: int){
        unitTf.position += unitTf.forward * calMoveDistance(speed);//maybe this should be position.x or similar
        unitTf.position += unitTf.right *calRotation();//not sure why this is to right
    }

    /*Can be called directly at current time. RotSpeed could be function of 
      speed.  If unit has a turret, then the transform of the turret is 
      provided rather than the unit transform.*/
    public function rotateToTarget(rotSpd:int, hasTurret:boolean, unitTf: Transform, targTf: Transform){
        var rotSpeed:float;
        if(!hasTurrent){
            rotationSpeed=rotSpd*Time.deltaTime;
        }
        else{
            rotationSpeed=3*rotSpd*Time.deltaTime;
        }
        var targetDir = targTf.position- unitTf.position;
        var newDir = Vector3.RotateTowards(unitTf.forward, targetDir, rotSpeed, 0.0);
        unitTf.rotation = Quaternion.LookRotation(newDir);
    }

    /*Unit moves walks/runs (handled by speed value provided) the target, first 
      rotation is handled then the target moves.  ---RULE--- Units that walk 
      will have no turret, tanks etc roll to target*/ 
    public function walkToTarget(unitTf: Transform, targTf: Transform, speed: int){
        rotateToTarget((int)(speed/4), false, unitTf, targTf);
        moveToTarget(unitTf, speed);
    }

    /*Unit moves rolls the target, first rotation is handled then the target 
      moves.  ---RULE--- Units that walk will have no turret, tanks etc roll to 
      target*/ 
    public function rollToTarget(){
        rotateToTarget((int)(speed/4), true, unitTf, targTf);
        moveToTarget(unitTf, speed);
    }
}