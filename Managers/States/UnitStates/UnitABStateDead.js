/*
    Unit is effectively idle but must wait much longer before any action can 
    occur.
*/
public class UnitABStateDead extends UnitABState{

    //Dead units without time frame are cleaned up and removed
    public function UnitABStateDead(){
    	super("Dead", 30);//regeneration has a minimum of 30 seconds
    }


    public function update(unit:Unit,time:float){
        //do nothing
    }

}