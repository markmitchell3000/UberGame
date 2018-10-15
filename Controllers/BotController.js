public class BotController extends Controller{
	private var unitType: UnitType;
    private var hasTurrent: boolean;
    private var turrent: GameObject;//null if not present
   /*
   this should be handled by the unit types
function unitSetup(){
	var tempType = transform.GetComponent(Unit_Data).getType();
	if(tempType==UNIT_TYPE.TOWER||tempType==UNIT_TYPE.BASE||tempType==UNIT_TYPE.BONUS){
		var tempObj = Global_Variables.turret_001;
		var tempPos = transform.transform.position;
		tempPos.y = tempPos.y+90;
		turret = Instantiate(tempObj,tempPos,transform.transform.rotation);
		turret.transform.parent = transform;
	}
	if(gameObject.GetComponentInChildren(Animator)!=null)
	{
		isAnimated = true;
		transform.GetComponent(humanoidAnimation).initAnimation();
	}
}*/
    public function BotController(ut:UnitType){
    	unitType=ut;
    }

	private function attScan(center: Vector3, radius: float, detectingObj: GameObject, isAttack: boolean){
		var hitColliders = Physics.OverlapSphere(center, radius);	
		if(hitColliders != null){
			for (var i = 0; i < hitColliders.Length; i++) {
				if(hitColliders[i].GetComponent(Unit_Data)!=null){
					var t1 = hitColliders[i].GetComponent(Unit_Data).getTeamNum();
					var t2 : int;
					if(isAttack==false){
						t2 = detectingObj.GetComponent(Unit_Data).getTeamNum();
						if(t1!=t2 && detectingObj.GetComponent(Unit_Data).warStatus(t1)){
							var targType = hitColliders[i].GetComponent(Unit_Data).getType();
							detectingObj.GetComponent(AI_Controls_002).setTarget(hitColliders[i].gameObject);
							detectingObj.GetComponent(AI_Controls_002).setUnitState(UNIT_STATE.ATTACK);
							detectingObj.GetComponent(AI_Controls_002).rotateToTarget();
							return;
						}
					}
					else{
						t2 = detectingObj.GetComponent(Attack).getTeamNum();
						if(t1!=t2 && detectingObj.GetComponent(Attack).warStatus(t1)){
							var tmpObj = hitColliders[i];
							var tempAttKind = detectingObj.GetComponent(Attack).kindOfAtt;
							var tempDamKind = detectingObj.GetComponent(Attack).kindOfDam;
							var tempPower = detectingObj.GetComponent(Attack).getPowerLevel();
							if(tmpObj!=null){
	        					tmpObj.GetComponent(Unit_Data).calDamage(tempAttKind,tempDamKind, tempPower);
	        				}
						}
					}
				}
			}
		}
	}

	private function attOrPur(center: Vector3, radius: float, radius2: float, detectingObj: GameObject){
		var hitColliders = Physics.OverlapSphere(center, radius);
		var targObj = detectingObj.GetComponent(AI_Controls_002).getTarget();
		var tempState : UNIT_STATE;
		if(targObj!= null){
			if(targObj.GetComponent(AI_Controls_002)!=null){
				tempState = targObj.GetComponent(AI_Controls_002).getState();		
			}
			else if(targObj.GetComponent(Player_Controls_002)!=null){
				tempState = targObj.GetComponent(Player_Controls_002).getState();
			}
			//var tempType = detectingObj.GetComponent(Unit_Data).getType(); 
			if(hitColliders != null){
				for (var i = 0; i < hitColliders.Length; i++) {
					if(hitColliders[i].GetComponent(Unit_Data)!=null){
						if(targObj == hitColliders[i].gameObject){
							if(tempState == UNIT_STATE.DIE){
								if(unitType.isBuilding()){
									detectingObj.GetComponent(AI_Controls_002).setUnitState(UNIT_STATE.IDLE);	
									return;
								}
								detectingObj.GetComponent(AI_Controls_002).setUnitState(UNIT_STATE.WALK);
								assignTarget(detectingObj);
								return;
							}
							var targType = hitColliders[i].GetComponent(Unit_Data).getType();
							detectingObj.GetComponent(AI_Controls_002).attackTarget(targType);
							detectingObj.GetComponent(AI_Controls_002).setUnitState(UNIT_STATE.ATTACK);					
							return;
						}
					}
				}
			}
			var hitColliders2 = Physics.OverlapSphere(center, radius2);
			if(hitColliders2 != null){
				for (var j = 0; j < hitColliders2.Length; j++) {
					if(hitColliders2[j].GetComponent(Unit_Data)!=null){
						if(targObj == hitColliders2[j].gameObject){
							if(tempState == UNIT_STATE.DIE){
								if(unitType.isBuilding()){
									detectingObj.GetComponent(AI_Controls_002).setUnitState(UNIT_STATE.IDLE);	
									return;
								}
								detectingObj.GetComponent(AI_Controls_002).setUnitState(UNIT_STATE.WALK);
								assignTarget(detectingObj);
								return;
							}
							detectingObj.GetComponent(AI_Controls_002).setUnitState(UNIT_STATE.PURSUE);
							return;
						}
					}
				}
			}
		}
		if(tempType == UNIT_TYPE.BASE || tempType == UNIT_TYPE.TOWER || tempType == UNIT_TYPE.BONUS){
			detectingObj.GetComponent(AI_Controls_002).setUnitState(UNIT_STATE.IDLE);	
			return;
		}
		detectingObj.GetComponent(AI_Controls_002).setUnitState(UNIT_STATE.WALK);
		assignTarget(detectingObj);
		return;
	}

	private function walkToTarget(){
		var tempTrans : Transform;
		tempTrans = targetObj.transform;
		var targetDir = tempTrans.position- transform.position;
		targetDir.y = targetDir.y+10;
		var tmpSpd = rotationSpeed*Time.deltaTime;
		var randomSpeed1: int;
		var randomSpeed2 : int;
		randomSpeed1 = Random.Range(-40,40);   
	    randomSpeed2 = Random.Range(10,30);
	    var newDir = Vector3.RotateTowards(transform.forward, targetDir, tmpSpd, 0.0);
	    transform.rotation = Quaternion.LookRotation(newDir);
		transform.position += transform.forward * randomSpeed2/2 * Time.deltaTime;
	    transform.position += transform.right * randomSpeed1/4 * Time.deltaTime;	
    }

    //called in update.  If unit is in position this should be 
	private function rotateToTarget(){
		var tmpSpd = super.rotationSpeed*Time.deltaTime;
		var tmpType : UNIT_TYPE = transform.GetComponent(Unit_Data).getType();
		var tempTrans : Transform;
		tempTrans = targetObj.transform;
		if(!hasTurrent){
			var targetDir = tempTrans.position- transform.position;
			var newDir = Vector3.RotateTowards(transform.forward, targetDir, tmpSpd, 0.0);
	    	transform.rotation = Quaternion.LookRotation(newDir);
		}
		else{
			//rotate child turret
			var targetDir2 = tempTrans.position- turret.transform.position;
			var newDir2 = Vector3.RotateTowards(turret.transform.forward, targetDir2, tmpSpd*3, 0.0);
	    	turret.transform.rotation = Quaternion.LookRotation(newDir2);
		}
	}
}
