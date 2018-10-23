//opposite of pursue, selected target is used to direct unit further away
public class UnitABStateFlee extends UnitABState{

    //unit may be fleeing till a certain external trigger is met like, health or daytime
    public function UnitABStateFlee(){
    	super("flee");
    }

    //Unit is scarred and will flee for timeframe
    public function UnitABStateFlee(t:int){
    	super("flee", t);
    }
}