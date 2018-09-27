public class UnitAnimationManager{
	private var isAnimated:Boolean;
    private var animationState:String:

	public function UnitAnimationManager(animated:Boolean){
        isAnimated=animated;
	}

    //needs some kind of call to the actual animation state machine
    public function setAnimation(aState:String) {
    	if(isAnimated){
    		if(aState!=animationState){
    			animationState=aState;
    		}
    	}
    }
}

/*
function unitSetup(){
	if(gameObject.GetComponentInChildren(Animator)!=null){
		transform.GetComponent(humanoidAnimation).initAnimation();
		hasAnim = true;
    }
	stateOfUnit = UNIT_STATE.IDLE;
	nextState = UNIT_STATE.IDLE;
	dead = false;
}

function unitReset(){
	if(hasAnim){
		transform.GetComponent(humanoidAnimation).changeAnimation(stateOfUnit);
	}
	dead = false;
}

function Update () {
	if(nextState != stateOfUnit){
		stateOfUnit = nextState;
		if(isAnimated){
			transform.GetComponent(humanoidAnimation).changeAnimation(stateOfUnit);
		}
	}
	if(stateOfUnit==UNIT_STATE.WALK||stateOfUnit==UNIT_STATE.PURSUE){
		walkToTarget();
	}

}
*/