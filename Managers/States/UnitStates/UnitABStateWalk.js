public class UnitABStateWalk extends UnitABState{

    //Unit is walking for preset time
    public function UnitABStateWalk(){
    	super("walk", 1.0);
    }

    public function update(unit:Unit,time:float){
        walkToTarget(unit,time);
    }

    /*Mostly the unittype plays a role after a scan is done*/
    public function getNextStateString(unitType:String){
        return "Scan";//default but should be overridden 
    }

    /*Unit moves walks/runs (handled by speed value provided) the target, first 
      rotation is handled then the target moves.  ---RULE--- Units that walk 
      will have no turret, tanks etc roll to target*/ 
    protected function walkToTarget(unit:Unit time:float){
        rotateToTarget(unit, time);
        moveToTarget(unit, time);
    }
}