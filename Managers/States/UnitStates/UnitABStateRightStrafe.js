//used primarily or exclusively by player
public class UnitABStateRightStrafe extends UnitABState{

    public function UnitABStateRightStrafe(){
    	super("rightstrafe");
    }

    //Unit should strafe for only a moment then go idle
    public function UnitABStateRightStrafe(t:int){
    	super("rightstrafe", t);
    }
}