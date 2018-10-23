public class UnitABStateIdle extends UnitABState{

    public function UnitABStateIdle(){
    	super("idle");
    }

    //Unit is stunned or set to idle for small amount of time
    public function UnitABStateIdle(t:int){
    	super("idle", t);
    }
}