/*
Capture is like pursue, however typically target is item.  Acquisition is 
usually simple contact with no violence.
*/
public class UnitABStateCapture extends UnitABState{

    /*May need some work, unittype may override next state from scan to continue
     pursuit of item or target*/
    public function UnitABStateCapture(){
    	super("Capture",5.0);//
    }

    public function update(unit:Unit,time:float){
        walkToTarget(unit,time);
        super.update(unit, time);
    }

    /*Unit moves walks/runs (handled by speed value provided) the target, first 
      rotation is handled then the target moves.  ---RULE--- Units that walk 
      will have no turret, tanks etc roll to target*/ 
    protected function walkToTarget(unit:Unit time:float){
        rotateToTarget(unit, time);
        moveToTarget(unit, time);
    }

}