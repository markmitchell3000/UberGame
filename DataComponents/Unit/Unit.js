//static var towerRange: float = 250.0;
//static var minionRange: float = 160.0;
//static var heroRange: float = 190.0;

public class Unit{
	private var unitInner:UnitInner;

	public function Unit(){
		unitInner=new UnitInner();
	} 

	public function acceptVisitor(v:Visitor){
		v.visit(unitInner);
	}

	class UnitInner{
		//public var missionList=new ArrayList();//holds mission Objects
		//private var inst:Instantiator=Instantiator.getInst();
		public var id:int;
		public var hashid: String;//id+team.name+unit.name
		public var avatar:GameObject;//holds model and controller
        public var unitData: UnitData;
        public var unitType: UnitType;
        public var unitStateInfo: UnitStateInfo; //verify this is the only place this referenced
        public var unitTransform: UnitTransform;
        public var isPlayer:Boolean;//may be handled elsewhere, could be used to determine controller type
        public var homeLocation:Point;
        public var targetPath: Point[];//series of fixed targets, might have a default chain if emptied
        public var target: Unit;
	}
}

/*//Useful for player unit only
function savePlayer(){
	DataManager.getDataManager().savePlayerData(unitData);
}*/

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
    }

	public function addXP(xpNum: int){
		xp +=xpNum;
		updateHero();
	}

	public function updateHero(){		
	  if(xp>nextLevelXP){
	  	powerLevel++;
	  	//update other stats make bonus stats for hero etc.
	  	xp-=nextLevelXP;
	  	updateNextLevelXp();
	  }
	}*/

	/*
		public function updateNextLevelXp(){
		nextLevelXP = ((((powerLevel+1)*powerLevel)/2)*1000);
	}
	*/

	/*


//function used when unit is hit, attack, damage typle and power come from aggressor.
public function calDamage(kindOfAtt: ATTACKTYPE, kindOfDam: DAMAGETYPE, attPower: int){
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