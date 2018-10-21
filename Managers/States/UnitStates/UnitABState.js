//Abstract class for Animation and behavior states
//these are values of a hash manager that uses cooresponding strings as keys
//non animated units will only use behavior
public class UnitABState{
	protected var stateName:String;//should match the key that stores it, used for animation reference

    public function UnitABState(sn:String){
    	stateName=sn;
    }
    
    /*maybe, some actions are chained together, this returns the key for next 
    state should this be needed. Some states may be on a timer*/
    public function getNextStateString(){

    }

    /* Should the class receive transforms to move or call commands inside the 
    controller*/
}