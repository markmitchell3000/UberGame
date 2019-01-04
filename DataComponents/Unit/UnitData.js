public class UnitData{
    public var id:int;//created in sequence by group
    public var hashid; //unique name used to locate unit itself (unitdata+model)
    public var unitName:String;

    public var unitType: String;//hash key for the unitType
    public var archetype:String;//hash key for the archetype
    public var team:String;//hash key for the team unit belongs to
    public var subTeam:String;//Used to select subfolders within team
    public var unitState:String;//hash key for the state that the unit is in.

    public var curLoc:Point;//summary of the model position, move model then set the unitdata position
    public var homeLoc:Point;//Location of base used for returning or other types of unit states.
    
    public var modelNum:Int;//Used to load models
    public var portraitString:String;//used for portrait selection

    public var pursueRange:int; //max, as the crow flies, distance that unit will pursue

    public var traits:Traits[];
    public var attackCooldowns:UnitAttackCooldowns;//class subtracts delta time from all cooldown values > 0, new attacks reset cooldown
    
    public var wornItems:Item[];//on unit, able to give them stat/trait boosts
    public var unitStats:UnitStats;//Data about units health, power etc.

    public function updateUnit(timeChange:float){
        /*depending on state move or update unit, this includes accessing the 
        units model via the hashid in the unitcollection.*/
    }

    public function instantiateUnit(){
        /*Instantiates a gameobject using data found in this class.  A unit is 
        created by pairing this with the gameobject.  Then the unit is added to 
        the unitCollection with the hashid as the key for the unit value.*/
    }
}

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
