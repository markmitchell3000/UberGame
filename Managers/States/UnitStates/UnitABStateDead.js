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
        // destroy model and respawn relaunches it
        if(unit.unitModel!=null){
            unit.destroyModel();
        }
        var ut:String=unit.unitData.unitType;
        var restorable:boolean=((UnitType)UnitTypeHash.getValue(ut)).willRespawn();
        //do nothing, timer till next state should decrement on its own
        if(restorable){
            super.update(unit, time);
        }
        else{
            UnitCollection.getUC().removeUnit(unit.unitData.hashid);
        }
    }

}