public class UnitABStatePursue extends UnitABState{

    public function UnitABStatePursue(){
    	super("pursue");
    }

    //Unit is pursuing for set time, then may rescan or retarget
    public function UnitABStatePursue(t:int){
    	super("pursue", t);
    }

    /*
    Pursue
    0. arguments unit location, target location/state, attack range
    1. check state of target, if null rescan
    2. check distance of target, relative to attack range (next attack in attack
       selection cycle). If distance is greater continue pursuit, else switch 
       state to attack.
    3. if still pursuing rotate to target and walk
    */ 
}