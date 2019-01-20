//Stored and used at runtime.
public class UnitStats extends BaseStats{
	/*0-civilian, 1- worker, 2-zombie, 3-soldier, 4-lt or hunter, 5- guardian, 6- tower, 7- titan, 8- base*/
	public var rank:int;
	public var powerLevel: int;
    public var curHealth: int;
	public var curMana: int;	
	public var xp: int;
	public var nextLevelXP: int;//some function based on the current level
	public var wealth: int;

	public function UnitStats(archetype:Archetype,unitType:UnitType,lvl:int){
        powerLevel=lvl;
        updateNextLevelXp();
        rank=unitType.getRank();
        super(archetype,unitType,lvl+rank);
        super.setHPandMana(unitType,lvl+rank);
        curHealth=super.health;
        curMana=super.mana;
	}

    public function addXP(xpNum: int){
        xp +=xpNum;
        updateUnit();
    }

    public function updateUnit(){       
      if(xp>nextLevelXP){
        powerLevel++;
        //update other stats make bonus stats for hero etc.
        xp-=nextLevelXP;
        updateNextLevelXp();
      }
    }

	public function updateNextLevelXp(){
        nextLevelXP = ((((powerLevel+1)*powerLevel)/2)*1000);
    }
}