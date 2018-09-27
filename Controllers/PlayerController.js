/*	private var runSpeed:float = 25.0;
	private var walkSpeed:float = 20.0;

	private var attacking : boolean = false;
	private var regenTime : int = 10;
	private var attackSpellSpeed: float = 0.75;
		private var locCounter:int=0;//reset on 16
	private var saveCounter:int=0;//reset on 11
	*/
public class PlayerController extends Controller{
	private var moveDirection:Vector3 = Vector3.zero;
	private var controller: CharacterController;//@script RequireComponent(CharacterController)
	private var moveForward : int=0;
	private var moveSide : int = 0;

	public checkForKeycode(){
        if(Input.GetKeyDown(KeyCode.Alpha1))
		{
	   		attackType= ATTACKTYPE.BLAST;
	    	Debug.Log("BLAST");   
		}
		if(Input.GetKeyDown(KeyCode.Alpha2))
		{
	    	attackType= ATTACKTYPE.POWER;
	    	Debug.Log("POWER");
		}
		if(Input.GetKeyDown(KeyCode.Alpha3))
		{
	    	attackType= ATTACKTYPE.AOE;
	    	Debug.Log("AOE");
		}
		if(Input.GetKeyDown(KeyCode.Alpha4))
		{
	    	attackType= ATTACKTYPE.ULTIMATE;
	    	Debug.Log("ULTIMATE");
		}
		if(Input.GetKeyDown(KeyCode.Space))
		{
			if(rangeAttackCooldown == false)
			{
		 		nextState = UNIT_STATE.ATTACK;
	 			attackFire();	
	 			attacking = true;				
	 			rangeAttackCooldown = true;
	 			attackCooldown(); 
			}	
		}
		if(Input.GetKeyDown(KeyCode.Escape))
		{
	    	OverlayAndMenus.stateChanger(VIEWSTATES.SAVEQUIT);
		}
		if(Input.GetKeyDown(KeyCode.I))
		{
			OverlayAndMenus.stateChanger(VIEWSTATES.INVENTORY);
		}
		if(Input.GetKeyDown(KeyCode.P))
		{
			OverlayAndMenus.stateChanger(VIEWSTATES.PLAYERINFO);
		}
		if(Input.GetKeyDown(KeyCode.T))
		{
			OverlayAndMenus.stateChanger(VIEWSTATES.TEAMSTATS);
		}
		if(Input.GetKeyDown(KeyCode.L))
		{
			OverlayAndMenus.stateChanger(VIEWSTATES.LOCALMAP);
		}
		if(Input.GetKeyDown(KeyCode.G))
		{
			OverlayAndMenus.stateChanger(VIEWSTATES.GLOBALMAP);
		}
		//might include dead etc.
		if(super.unitState.getKeyName()!="attack"){
			if(moveDirection != Vector3.zero){
				nextState= UNIT_STATE.WALK;
				if(moveForward==-1){
					nextState = UNIT_STATE.BACKRUN;
				}
				else if(moveSide==-1){
					nextState = UNIT_STATE.LEFTSTRAFE;
				}
				else if(moveSide==1){
					nextState = UNIT_STATE.RIGHTSTRAFE;
				}
			}	
			else{
				nextState = UNIT_STATE.IDLE;
			}
		}	
        var upLift:boolean=(Input.GetKeyUp (KeyCode.W)||Input.GetKeyUp(KeyCode.UpArrow));
        var downLift:boolean=(Input.GetKeyUp (KeyCode.S)||Input.GetKeyUp(KeyCode.DownArrow));
        var leftLift:boolean=(Input.GetKeyUp (KeyCode.A)||Input.GetKeyUp(KeyCode.LeftArrow));
        var rightLift:boolean=(Input.GetKeyUp (KeyCode.D)||Input.GetKeyUp(KeyCode.RightArrow));
		if(upLift||downLift){
			moveForward =0;
		}
		if(leftLift||rightLift){
			moveSide=0;
		}
		if(Input.GetKeyDown(KeyCode.W)||Input.GetKeyDown(KeyCode.UpArrow)){
			moveForward =1;
			transform.GetComponent(Unit_Data).setCoord();
		}
		if(Input.GetKeyDown(KeyCode.S)||Input.GetKeyDown(KeyCode.DownArrow)){
			moveForward = -1;
			transform.GetComponent(Unit_Data).setCoord();
		}
		if(Input.GetKeyDown(KeyCode.A)||Input.GetKeyDown(KeyCode.LeftArrow)){
			moveSide = -1;
			transform.GetComponent(Unit_Data).setCoord();
		}
		if(Input.GetKeyDown(KeyCode.D)||Input.GetKeyDown(KeyCode.RightArrow)){
			moveSide =1;
			transform.GetComponent(Unit_Data).setCoord();
		}
		// Allow turning at anytime. Keep the character facing in the same direction as the Camera if the right mouse button is down.
		if(Input.GetMouseButton(1)) {
			transform.Rotate(0,Input.GetAxis("Mouse X") *40* Time.deltaTime, 0);
	    	if(stateOfUnit!=UNIT_STATE.IDLE) {
			    transform.Rotate(0,Input.GetAxis("HorizontalMove") *40* Time.deltaTime, 0);
			    transform.Rotate(0,Input.GetAxis("VerticalMove") *40* Time.deltaTime, 0);
			}
		}
		moveDirection = new Vector3(moveSide, 0, moveForward);
		//Move controller
		moveDirection = transform.TransformDirection(moveDirection);
		moveDirection *=walkSpeed;
		controller = GetComponent(CharacterController);
		var flags = controller.Move(moveDirection * Time.deltaTime);
	}
}

/*
function Update ()
{   
	locCounter++;
	if(locCounter>15){
		transform.GetComponent(Unit_Data).setCoord();
		locCounter=0;
		saveCounter++;
		if(saveCounter>10){
			dm.saveUpdate();
			saveCounter=0;
		}
	}
}
*/
