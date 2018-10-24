//used primarily or exclusively by player
public class UnitABStateBackwalk extends UnitABState{

    public function UnitABStateBackwalk(){
    	super("backwalk");
    }

    //Unit is walking backwards for certain time, side effect of spell perhaps
    public function UnitABStateBackwalk(t:int){
    	super("backwalk", t);
    }
}