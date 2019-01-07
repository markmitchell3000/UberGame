//enum UNIT_STATE {IDLE, WALK, ATTACK, PURSUE, FLEE, DIE, CAPTURE, LEFTSTRAFE, RIGHTSTRAFE, BACKRUN};
//Abstract class for Animation and behavior states
//these are values of a hash manager that uses cooresponding strings as keys
//non animated units will only use behavior
public class UnitABState{
	protected var stateName:String;//should match the key that stores it, used for animation reference
    /*states change periodically, this can vary based on type, towers and bases 
    switch beteen idle and scan but can go into attack when scan detects 
    something.  Other units may transistion between walk and scan.*/
    protected var timer:float;

    public function UnitABState(sn:String, t: float){
    	stateName=sn;
    	timer=t;//number of seconds
    }
    
    /*This returns the key for next state which is often the current state.
      Some states may be on a timer, others are chained together. States such 
      as scan or pursue check for targets and may transition to another state 
      such as attack.  If target it killed unit will go to a scan state to 
      acquire new target*/
    public function getNextStateString(unitType:String){
        return "Idle";//default but should be overridden 
    }

    /*Takes a unit and the value for deltatime then does stuff to the unit*/
    public function update(unit:Unit,time:float){
        //perform states actions, may cause new next state.
    }

    //Called when initial state is set, this allows the state to be decremented by the unit.
    public function getTimer(){
    	return timer;
    }

    //takes units speed and figures out how much was moved that frame
    private function calMoveDistance(speed:int, time:float){
        var randomSpeed:int = Random.Range(10+(speed/2),30+(speed/2));//unsure if half of speed is good multiplier
        return (randomSpeed/2 * time);
    }

    /*private function calRightMove(time:float){
        var randomSpeed: int = Random.Range(-40,40);
        return (randomSpeed/4 * time);
    }*/
    
    protected function moveToTarget(unit:Unit,time:float){
        var unitTF=unit.unitModel.transform;
        var speed=unit.unitData.unitStats.moveSpeed;
        unitTf.position += unitTf.forward * calMoveDistance(speed,time);//maybe this should be position.x or similar
        unitTf.position += unitTf.right *calRotation(time);//not sure why this is to right
    }

    /*Can be called directly at current time. RotSpeed could be function of 
      speed.  If unit has a turret, then the transform of the turret is 
      provided rather than the unit transform.*/
    protected function rotateToTarget(unit:Unit, time:float){
        var rotSpeed:float=unit.unitData.unitStats.rotationSpeed;
        var hasTurret:boolean=((UnitType)(UnitTypeHash.getValue(unit.unitData.unitType))).isBuilding();
        var unitTF=unit.unitModel.transform;
        var targTF=((Unit)UnitCollection.getUC().getUnit(((BotData)unit.unitData).targetHashId)).unitModel.transform;
        if(!hasTurret){
            rotSpeed=rotSpeed*time;
        }
        else{
            rotSpeed=3*rotSpeed*time;
        }
        var targetDir = targTf.position- unitTf.position;
        var newDir = Vector3.RotateTowards(unitTf.forward, targetDir, rotSpeed, 0.0);
        unitTf.rotation = Quaternion.LookRotation(newDir);
    }



    /*Unit moves rolls the target, first rotation is handled then the target 
      moves.  ---RULE--- Units that walk will have no turret, tanks etc roll to 
      target*/ 
    /*protected function rollToTarget(unitTf: Transform, targTf: Transform, speed: int, time:float){
        rotateToTarget((int)(speed/4), true, unitTf, targTf,time);
        moveToTarget(unitTf, speed,time);
    }*/
}