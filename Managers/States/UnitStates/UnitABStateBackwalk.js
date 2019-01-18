//used primarily or exclusively by player
public class UnitABStateBackwalk extends UnitABState{

    public function UnitABStateBackwalk(){
    	super("BackWalk", 0.5);
    }

    public function update(unit:Unit,time:float){
        //not currently support but this will move the unit object back
        super.update(unit, time);
    }
}