//used primarily or exclusively by player
public class UnitABStateBackrun extends UnitABState{

    public function UnitABStateBackrun(){
    	super("backrun");
    }

    //Unit is running backwards till winded
    public function UnitABStateBackrun(t:int){
    	super("backrun", t);
    }
}