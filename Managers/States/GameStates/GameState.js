public class GameState{
    protected var attacks:AttackCollection;

	public function cycleState(){
	}

    //my be done by visitor or at a lower level.
    protected function addAttack(att:Attack){
	    //add attack to collection
    }

    /*
		function checkAttacks(){
			var tmpAtt : GameObject;
			var tmpRange : float;
			var tempSize : int;
			while(true){
				yield WaitForSeconds(0.2);
				tempSize = allAttacks.Count;
				for(var i = (tempSize-1); i>-1;i--){
					tmpAtt = allAttacks.Item[i];
					if(tmpAtt!=null){
						tmpRange = tmpAtt.GetComponent(Attack).getRange();
						attScan(tmpAtt.transform.position, tmpRange, tmpAtt, true);
						tmpAtt.GetComponent(Attack).countDown();
						if(tmpAtt.GetComponent(Attack).getDeathCount()<=0){
							allAttacks.RemoveAt(i);
							tmpAtt.GetComponent(Attack).destroyObject();
						}
					}
					else{
						allAttacks.RemoveAt(i);
					}
				}
			}
		}

		function checkUnits(scanTeam : ArrayList ){
			var tempObject : GameObject;
			var tempState : UNIT_STATE;
			var attR : float;
			var purR : float;
			var tempSize = scanTeam.Count;
			for(var i = (tempSize-1); i>-1;i--){
				tempObject = scanTeam.Item[i];
				attR = tempObject.GetComponent(Unit_Data).getAttRange();
				purR = tempObject.GetComponent(Unit_Data).getPurRange();
				if(tempObject.transform.GetComponent(AI_Controls_002)!=null){
					tempState = tempObject.transform.GetComponent(AI_Controls_002).getState();
					switch(tempState){
						case UNIT_STATE.IDLE:
						case UNIT_STATE.WALK:
							attScan(tempObject.transform.position, attR, tempObject, false);
							break;
						case UNIT_STATE.ATTACK:
						case UNIT_STATE.PURSUE:
							attOrPur(tempObject.transform.position, attR, purR, tempObject);
							break;
						default:
							break;
					}
				}
				else if(tempObject.transform.GetComponent(Player_Controls_002)!=null){
					tempState = tempObject.GetComponent(Player_Controls_002).getState();
					playerSpot = tempObject.transform.position;
				}
				if(tempState == UNIT_STATE.DIE){
					var tempType = tempObject.GetComponent(Unit_Data).getType();
					var defTeam = tempObject.GetComponent(Unit_Data).getTeamNum();
					if(tempType != UNIT_TYPE.LIEUTENANT){
						if(tempType==UNIT_TYPE.BASE){
							teamAlive[defTeam-1] = false;
							checkVictory();
						}
						scanTeam.RemoveAt(i);
						tempObject.GetComponent(AI_Controls_002).destroyUnit();
					}
					else{
						tempObject.GetComponent(Unit_Data).reSpawn();
					}
				}
			}
		}
    */

    //grants XP based on how close hero is to fight
    /*
		function grantXP(center: Vector3, radius: float, tNum: int, xpNum: int){
			var hitColliders = Physics.OverlapSphere(center, radius);
			if(hitColliders != null){
				for (var i = 0; i < hitColliders.Length; i++) {
					if(hitColliders[i].GetComponent(Unit_Data)!=null){
						if(hitColliders[i].GetComponent(Unit_Data).getType()==UNIT_TYPE.LIEUTENANT){
							hitColliders[i].GetComponent(Unit_Data).addXP(xpNum);
						}
					}
				}
			}
		}
    */

    /*
		function makeChild(parentObject: GameObject, prefabObject: GameObject, tNum: int, type: UNIT_TYPE){
			var childObject : GameObject;
			var tempLocal = parentObject.transform.position;
			var modelObject :GameObject;
			childObject = Instantiate(prefabObject,tempLocal,parentObject.transform.rotation);
			childObject.GetComponent(Unit_Data).setTeamNum(tNum);
			childObject.GetComponent(Unit_Data).setUnitType(type);
			childObject.GetComponent(Unit_Data).setHome(tempLocal);
			modelObject = modelLoader.GetComponent(Team_Models).getModel(tNum, type);	
			childObject.GetComponent(Unit_Data).setModel(modelObject);//sets unit model to the following model.
				//childObject.GetComponent(AI_Controls_002).unitSetup();
			if(type==UNIT_TYPE.SOLDIER ||type==UNIT_TYPE.LIEUTENANT||type==UNIT_TYPE.TITAN){
				var tempDir : VISIT_ORDER;
				var tempSpot : NEXT_VISIT;
				var tempRand : float;
				tempRand = Random.Range(0,2);
				switch(parentObject){
					case spawn1a:
						tempDir = VISIT_ORDER.CLOCK;
						tempSpot = NEXT_VISIT.BASE_T3;
						break;
					case spawn2a:
						tempDir = VISIT_ORDER.CLOCK;
						tempSpot = NEXT_VISIT.BASE_T4;
						break;
					case spawn3a:
						tempDir = VISIT_ORDER.CLOCK;
						tempSpot = NEXT_VISIT.BASE_T2;
						break;
					case spawn4a:
						tempDir = VISIT_ORDER.CLOCK;
						tempSpot = NEXT_VISIT.BASE_T1;
						break;
					case spawn1b:
						if(tempRand>1){
							tempDir = VISIT_ORDER.CLOCK;
						}
						else{
							tempDir = VISIT_ORDER.COUNTER;
						}
						tempSpot = NEXT_VISIT.BASE_T2;
						break;			
					case spawn2b:
						if(tempRand>1){
							tempDir = VISIT_ORDER.CLOCK;
						}
						else{
							tempDir = VISIT_ORDER.COUNTER;
						}
						tempSpot = NEXT_VISIT.BASE_T1;
						break;			
					case spawn3b:
						if(tempRand>1){
							tempDir = VISIT_ORDER.CLOCK;
						}
						else{
							tempDir = VISIT_ORDER.COUNTER;
						}
						tempSpot = NEXT_VISIT.BASE_T4;
						break;			
					case spawn4b:
						if(tempRand>1){
							tempDir = VISIT_ORDER.CLOCK;
						}
						else{
							tempDir = VISIT_ORDER.COUNTER;
						}
						tempSpot = NEXT_VISIT.BASE_T3;
						break;
					case spawn1c:
						tempDir = VISIT_ORDER.COUNTER;
						tempSpot = NEXT_VISIT.BASE_T4;
						break;
					case spawn2c:
						tempDir = VISIT_ORDER.COUNTER;
						tempSpot = NEXT_VISIT.BASE_T3;
						break;
					case spawn3c:
						tempDir = VISIT_ORDER.COUNTER;
						tempSpot = NEXT_VISIT.BASE_T1;
						break;
					case spawn4c:
						tempDir = VISIT_ORDER.COUNTER;
						tempSpot = NEXT_VISIT.BASE_T2;	
						break;												
				}
				childObject.GetComponent(AI_Controls_002).setMoveOrder(tempDir);
				childObject.GetComponent(AI_Controls_002).setVisitNext(tempSpot);
				assignTarget(childObject);
				childObject.GetComponent(AI_Controls_002).setUnitState(UNIT_STATE.WALK);
			}
			switch(tNum){
				case 1:
					unitsT1.Add(childObject);
					break;
				case 2:
					unitsT2.Add(childObject);
					break;	
				case 3:
					unitsT3.Add(childObject);
					break;
				case 4:
					unitsT4.Add(childObject);
					break;	
			}
		}

		function makeHeroChild(parentObject: GameObject, prefabObject: GameObject, tNum: int, type: UNIT_TYPE){
			var childObject : GameObject;
			var tempLocal = parentObject.transform.position;
			var modelObject :GameObject;
			childObject = Instantiate(prefabObject,tempLocal,parentObject.transform.rotation);
			childObject.GetComponent(Unit_Data).setTeamNum(tNum);
			childObject.GetComponent(Unit_Data).setUnitType(type);
			childObject.GetComponent(Unit_Data).setHome(tempLocal);
			modelObject = modelLoader.GetComponent(Team_Models).getModel(tNum, type);	
			childObject.GetComponent(Unit_Data).setModel(modelObject);//sets unit model to the following model.
				//childObject.GetComponent(Player_Controls_002).unitSetup();
			camera_01.GetComponent(Camera_MMOStyle).setTarget(childObject.transform);
			camera_01.GetComponent(OverlayAndMenus).setUnitData(childObject.GetComponent(Unit_Data));
			camera_01.GetComponent(OverlayAndMenus).setPlayerControls(childObject.GetComponent(Player_Controls_002));
			dm.setCurHeroObject(childObject);
			switch(tNum){
				case 1:
					unitsT1.Add(childObject);
					break;
				case 2:
					unitsT2.Add(childObject);
					break;	
				case 3:
					unitsT3.Add(childObject);
					break;
				case 4:
					unitsT4.Add(childObject);
					break;	
			}
		}
    */
}