/*
    Similar to run in the sense that the unit moves quickly to a point on the 
    map.  However the unit should move towards its home location (or other such 
    location) and is unable to scan for 2 seconds so therefore cannot attack.
*/
public class UnitABStateFlee extends UnitABState{

    //unit may be fleeing till a certain external trigger is met like, health or daytime
    public function UnitABStateFlee(){
    	super("Flee", 2.0);//panic slows enemy scanning
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