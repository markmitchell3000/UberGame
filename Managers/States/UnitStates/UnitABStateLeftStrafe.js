//used primarily or exclusively by player
public class UnitABStateLeftStrafe extends UnitABState{

    public function UnitABStateLeftStrafe(){
    	super("leftstrafe");
    }

    //Unit should strafe for only a moment then go idle
    public function UnitABStateLeftStrafe(t:int){
    	super("leftstrafe", t);
    }
}