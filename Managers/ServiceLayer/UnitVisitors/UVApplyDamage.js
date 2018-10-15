/*Called when an enemy attack encounters a unit.  This takes 
the stats of the attack and applies them against the defenses of the unit*/
public class UVApplyDamage implements UnitVisitor{
	private var attData:AttackData;
     
    //when collision is detected this object is created and the first function is called. 
    public function UVApplyDamage(ad:AttackData){
        attData=ad;
    }
    
    public function visitUnit(unit:UnitInner){
		//TBC applies damage
	}
}
    /*returns a positive number when player takes damage, returns a 
    negative when resistance is greater than the attack.*/
 /*   public function takeDamage(kindDam: DAMAGETYPE, tempDam:int){
    	var damTake: int;
        switch(kindDam){
			case DAMAGETYPE.BASIC:
				damTake = basicPower-tempDam;
				break;
			case DAMAGETYPE.BLADES:
				damTake = bladesPower-tempDam;
				break;
			case DAMAGETYPE.EARTH:
				damTake = earthPower-tempDam;
				break;
			case DAMAGETYPE.ELECTRIC:
				damTake = electricPower-tempDam;
				break;
			case DAMAGETYPE.FIRE:
				damTake = firePower-tempDam;
				break;
			case DAMAGETYPE.ICE:
				damTake = icePower-tempDam;
				break;
			case DAMAGETYPE.MAGIC:
				damTake = magicPower-tempDam;
				break;
			case DAMAGETYPE.POISON:
				damTake = poisonPower-tempDam;
				break;
			case DAMAGETYPE.WATER:
				damTake = waterPower-tempDam;
				break;
			case DAMAGETYPE.WIND:
				damTake = windPower-tempDam;
				break;				
		}
		return -damTake;
    }*/

    //function used when unit is hit, attack, damage typle and power come from aggressor.
/*public function calDamage(kindOfAtt: ATTACKTYPE, kindOfDam: DAMAGETYPE, attPower: int){
	var tempDam : int;
	var damTake : int;//damage to be taken if non-negative
	switch(kindOfAtt){
		case ATTACKTYPE.MELEE:
			tempDam = attPower;
			break;
		case ATTACKTYPE.RANGED:
			tempDam = 0.7*attPower;
			break;
		case ATTACKTYPE.BLAST:
			tempDam = 2*attPower;
			break;
		case ATTACKTYPE.POWER:
			tempDam = 4*attPower;
			break;
		case ATTACKTYPE.AOE:
			tempDam = 2*attPower;
			break;
		case ATTACKTYPE.ULTIMATE:
			tempDam = 8*attPower;
			break;		
		case ATTACKTYPE.PASSIVE:
			tempDam = 0.2*attPower;
			break;		
	}
	damTake=unitData.takeDamage(kindOfDam, tempDam);
	if(damTake>0){
		unitData.curHealth -= damTake;
		if(unitData.curHealth<=0){
			if(transform.GetComponent(AI_Controls_002)!=null){
				transform.GetComponent(AI_Controls_002).setUnitState(UNIT_STATE.DIE);
				transform.GetComponent(AI_Controls_002).cleanUp(typeUnit);
			}
			else{
				transform.GetComponent(Player_Controls_002).setUnitState(UNIT_STATE.DIE);
			}			
		}
	}
}
	*/