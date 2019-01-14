/*
    Used by player and units that are rushing to a fixed location/point.  Units 
    that are running after a target that is moving are in a pursue state.
*/
public class UnitABStateRun extends UnitABState{

    public function UnitABStateRun(){
    	super("Run", 1.0);
    }

    public function update(unit:Unit,time:float){
        runToTarget(unit,time);
    }

    /*Unit moves walks/runs (handled by speed value provided) the target, first 
      rotation is handled then the target moves.  ---RULE--- Units that walk 
      will have no turret, tanks etc roll to target*/ 
    protected function runToTarget(unit:Unit time:float){
        rotateToTarget(unit, time*1.5);
        moveToTarget(unit, time*1.5);//running acts the same a walking but the speed up is handled as though more time has passed relative to everything else
    }
}