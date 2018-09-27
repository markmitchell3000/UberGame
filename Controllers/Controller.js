public class Controller extends MonoBehaviour{
	public var unitState:UnitStateInfo;//current animation/behavior state
	public var isAnimated:boolean;//some units are not animated, so don't call animation controller
	public var unit:Unit;//Unit managed by controller
    private var target:GameObject;//this is where unit will walk to,escort, collect or attack if in range.
    
    public function Controller(unt:Unit, animated:boolean){
        unit=unt;
        isAnimated=animated;
    }
    //
    //public var targetInRange(unitLoc:Vector3){}

    //att needs its tranform set somehow
	public function attackFire (att: Attack, tf: tranform) {
	    var childObject : GameObject;
		//yield WaitForSeconds(attackSpellSpeed/4);
		var tempPos = tf.position;//maybe att.tf is set beforehand???
		tempPos.y += 5;
        childObject = Instantiate(att.getAttackData().getAttObject(),tempPos,tf.rotation);
		//attack gets assigned parent and variables
	    childObject.transform.parent = tf;
	    /*childObject.GetComponent(Attack).setAtt(attackType);
	    childObject.GetComponent(Attack).setDam(dm.getPlayerData().damageType);
	    childObject.GetComponent(Attack).setTeam(dm.getPlayerData().team);
	    childObject.GetComponent(Attack).setPowerLevel(dm.getPlayerData().powerLevel);
	    childObject.GetComponent(Attack).setMotion();//works like awake but after variables are set.
	    GlobalAI_002.addAttack(childObject);*/
	    return childObject;
	}

	public function attTarget(){
		childObject = Instantiate(getAttackModel(),tempPos, tempRot);
	    coolTimer(ATTACK_COOLDOWN.BASIC_CD);
	    /*
	    case ATTACKTYPE.MELEE:
	        childObject = Instantiate(getAttackModel(),tempPos, tempRot);
	    	coolTimer(ATTACK_COOLDOWN.BASIC_CD);
	        break;
	    case ATTACKTYPE.RANGED:
	        childObject = Instantiate(Global_Variables.rangedBasic,tempPos, tempRot);
	        coolTimer(ATTACK_COOLDOWN.BASIC_CD);
	        break;	   
	    case ATTACKTYPE.BLAST:
	        childObject = Instantiate(Global_Variables.magicBlast,tempPos, tempRot);
	    	coolTimer(ATTACK_COOLDOWN.BLAST_CD);
	        break;		    
	    case ATTACKTYPE.POWER:
	        childObject = Instantiate(Global_Variables.magicPower,tempPos, tempRot);
	       	coolTimer(ATTACK_COOLDOWN.POWER_CD);
	        break;		    
	    case ATTACKTYPE.AOE:
	        childObject = Instantiate(Global_Variables.magicAOE,tempPos, tempRot);
	        break;		    
	    case ATTACKTYPE.ULTIMATE:
	        childObject = Instantiate(Global_Variables.magicUltimate,tempPos, tempRot);
	        coolTimer(ATTACK_COOLDOWN.ULT_CD);
	        break;	    
	}*/
	//attack gets assigned parent and variables
    childObject.transform.parent = transform;
    childObject.GetComponent(Attack).setAtt(attackType);
    childObject.GetComponent(Attack).setDam(transform.GetComponent(Unit_Data).getUnitData().damageType);
    childObject.GetComponent(Attack).setTeam(transform.GetComponent(Unit_Data).getUnitData().team);
    childObject.GetComponent(Attack).setPowerLevel(transform.GetComponent(Unit_Data).getUnitData().powerLevel);
    childObject.GetComponent(Attack).setMotion();//works like awake but after variables are set.
    return childObject;
	}

	private function getAttackModel(){
		var tempUVAS=new UVAttackSelecter();
		unit.acceptVisitor(tempUVAS);
		//tempUVAS will have a string at this point ??? what next
	}
}



/*
private var turret : GameObject;;

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
}

function attackTarget(attUnit: UNIT_TYPE){
	var childObject : GameObject;
	var typeBasicPref: BASIC_PREF;
	typeBasicPref = transform.GetComponent(Unit_Data).getUnitData().basicpref;
	rotateToTarget();
	var thisType = transform.GetComponent(Unit_Data).getType();
	var tempPos = transform.transform.position;
	var tempRot = transform.transform.rotation;
	if(thisType == UNIT_TYPE.SOLDIER|| thisType ==UNIT_TYPE.TOWER||
		thisType == UNIT_TYPE.BASE||thisType ==UNIT_TYPE.BONUS){
		if(basicReady == false){
			return;
		}
		else{
			if(typeBasicPref==BASIC_PREF.MELEE_PREF){
				attackType = ATTACKTYPE.MELEE;
			}
			if(typeBasicPref==BASIC_PREF.RANG_PREF){
				attackType = ATTACKTYPE.RANGED;
			}
			if(thisType != UNIT_TYPE.SOLDIER){
				tempPos = turret.transform.position;
				tempRot = turret.transform.rotation;	
			}
		}
	}
	else{
		switch(attUnit){
			case UNIT_TYPE.BASE:
			case UNIT_TYPE.LIEUTENANT:
			case UNIT_TYPE.TITAN:
				if(powerReady==true){
					attackType = ATTACKTYPE.POWER;
					break;
				}
				else if(ultReady==true){
					attackType = ATTACKTYPE.ULTIMATE;
					break;				
				}
				else if(blastReady==true){
					attackType = ATTACKTYPE.BLAST;
					break;			
				}
			case UNIT_TYPE.TOWER:
			case UNIT_TYPE.BONUS:
			case UNIT_TYPE.SOLDIER:		
				if(basicReady==true){
					if(typeBasicPref==BASIC_PREF.MELEE_PREF){
						attackType = ATTACKTYPE.MELEE;
						break;
					}
					else{
						attackType =ATTACKTYPE.RANGED;
						break;
					}				
				}
				else{
					return;
				}
		}
	}

}
*/