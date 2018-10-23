//enum UNIT_STATE {IDLE, WALK, ATTACK, PURSUE, FLEE, DIE, CAPTURE, LEFTSTRAFE, RIGHTSTRAFE, BACKRUN};
//Abstract class for Animation and behavior states
//these are values of a hash manager that uses cooresponding strings as keys
//non animated units will only use behavior
public class UnitABState{
	protected var stateName:String;//should match the key that stores it, used for animation reference
    protected var hasTimer:boolean;//unit may go idle or another state for a time 
    protected var timer:int;//unit has time this is set
    public function UnitABState(sn:String){
    	stateName=sn;
    	hasTimer=false;
    }

    public function UnitABState(sn:String, t: int){
    	stateName=sn;
    	timer=t;
    	hasTimer=true;
    }
    
    /*maybe, some actions are chained together, this returns the key for next 
    state should this be needed. Some states may be on a timer*/
    public function getNextStateString(){

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
    /* Should the class receive transforms to move or call commands inside the 
    controller*/
}