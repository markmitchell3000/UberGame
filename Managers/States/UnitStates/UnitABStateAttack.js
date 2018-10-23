public class UnitABStateAttack extends UnitABState{

    public function UnitABStateAttack(){
    	super("attack");
    }

    //set to attack during a set window
    public function UnitABStateAttack(t:int){
    	super("attack", t);
    }
}