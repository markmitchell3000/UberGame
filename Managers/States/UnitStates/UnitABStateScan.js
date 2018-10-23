public class UnitABStateScan extends UnitABState{

    public function UnitABStateScan(){
    	super("scan");
    }

    //Unit is scanning, effectively idle but checking every frame called
    public function UnitABStateScan(t:int){
    	super("scan", t);
    }
}