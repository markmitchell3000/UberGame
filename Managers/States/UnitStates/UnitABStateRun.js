public class UnitABStateRun extends UnitABState{

    public function UnitABStateRun(){
    	super("run");
    }

    //Unit may be running for set time or is winded and will need to walk
    public function UnitABStateRun(t:int){
    	super("run", t);
    }
}