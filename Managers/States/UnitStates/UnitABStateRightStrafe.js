//used primarily or exclusively by player
public class UnitABStateRightStrafe extends UnitABState{

    //Unit should strafe for only a moment then go idle
    public function UnitABStateRightStrafe(){
    	super("RightStrafe", 0.5);
    }


    public function update(unit:Unit,time:float){
        //Not yet support but will move object to the left
    }
}