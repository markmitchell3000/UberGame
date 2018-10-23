public class UnitABStatePursue extends UnitABState{

    public function UnitABStatePursue(){
    	super("pursue");
    }

    //Unit is pursuing for set time, then may rescan or retarget
    public function UnitABStatePursue(t:int){
    	super("pursue", t);
    }
}