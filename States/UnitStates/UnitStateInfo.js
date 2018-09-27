//enum UNIT_STATE {IDLE, WALK, ATTACK, PURSUE, FLEE, DIE, CAPTURE, LEFTSTRAFE, RIGHTSTRAFE, BACKRUN};
//Used for animation and other behavioral differences
//Still used by nonanimated units in order to determine behavior
public class UnitStateInfo{
    protected var animationKey:String;
	private var nextState:UnitStateInfo;
	private var lastState:UnitStateInfo;

	public function UnitStateInfo(s:String){
        curState=s;
	}

    public function setNextState(next:UnitStateInfo){
        nextState=next;
    }

    public function setLastState(last:UnitStateInfo){
        lastState=last;
    }

    public function getNextState(){
        return nextState;
    }

    public function getLastState(){
        return lastState;
    }

    public function getKeyName(){
    	return animationKey;
    } 
}