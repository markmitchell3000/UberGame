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
		public var id:int;//created by counter used for indexing may be dropped
		public var hashid: String;//id+team.name+unit.name, used for hash function
		public var avatar:GameObject;//holds model and controller//public var unitTransform: UnitTransform;
        public var unitData: UnitData;
        public var unitType: UnitType;
        public var unitStateInfo: UnitStateInfo; //verify this is the only place this referenced
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
/*
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

