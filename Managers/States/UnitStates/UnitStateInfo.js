/*Used to chain UnitABStates together.  May not be needed yet.*/
public class UnitStateInfo extends Node{
    protected var stateKey:String;//used for animation key and behavior key, which UnitABState from hash

	public function UnitStateInfo(s:String){
        curState=s;
	}

    public function insertNext(next:UnitStateInfo){
        super.insertNext(next);
    }

    public function setLastState(last:UnitStateInfo){
        super.insertLast(last);
    }

    public function getData(){
    	return stateKey;
    } 
}