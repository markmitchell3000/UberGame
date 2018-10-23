public class UnitABStateWalk extends UnitABState{

    public function UnitABStateWalk(){
    	super("walk");
    }

    //Unit is walking for preset time
    public function UnitABStateWalk(t:int){
    	super("walk", t);
    }
}