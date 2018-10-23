public class UnitABStateDead extends UnitABState{

    //Dead units without time frame are cleaned up and removed
    public function UnitABStateDead(){
    	super("dead");
    }

    //Unit is dead but will return in t units of time
    public function UnitABStateDead(t:int){
    	super("dead", t);
    }
}