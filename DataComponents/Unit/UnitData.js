public class UnitData{
    public var id:int;//created in sequence by group
    public var hashid:String; //unique name used to locate unit itself (unitdata+model)
    public var unitName:String;

    public var unitType: String;//hash key for the unitType
    public var archetype:String;//hash key for the archetype
    public var team:String;//hash key for the team unit belongs to
    public var subTeam:String;//Used to select subfolders within team

    public var unitState:String;//hash key for the state that the unit is in.
    private var stateCountDown:float;//when zero or less the unit will transition to another state

    public var curLoc:Point;//summary of the model position, move model then set the unitdata position
    public var homeLoc:Point;//Location of base used for returning or other types of unit states.
    
    public var modelNum:int;//Used to load models
    public var portraitString:String;//used for portrait selection

    public var pursueRange:int; //max, as the crow flies, distance that unit will pursue

    public var traits:Traits[];
    public var attackCooldowns:UnitAttackCooldowns;//class subtracts delta time from all cooldown values > 0, new attacks reset cooldown
    public var actionCooldown: float;//every attack sets this to 1.0 then time decrements it, any attack requires this to be zero, future work may reduce this number with an attack speed reduction.
    
    public var wornItems:Item[];//on unit, able to give them stat/trait boosts
    public var unitStats:UnitStats;//statistics/Data about units health, power etc.

    /*Player data should override this*/
    public function updateUnit(timeChange:float){
        /*depending on state move or update unit, this includes accessing the 
        units model via the hashid in the unitcollection.*/
        //Set condition for initial state (maybe based on unittype)
        if(stateCountDown<=0){
            unitState=HashUnitABState.getValue(unitState).getNextStateString(unitType);
            stateCountDown=HashUnitABState.getValue(unitState).getTimer();
        }
        var tempUnit:Unit=(Unit)UnitCollection.getUC().getUnit(hashid);
        HashUnitABState.getValue(unitState).update(tempUnit,timeChange);
        stateCountDown-=timeChange;
    }

    public function setState(newState:String){
        unitState=newState;
        stateCountDown=HashUnitABState.getValue(unitState).getTimer();
    }

    public function instantiateUnit(tgm:TempGroupModel){
        /*Instantiates a gameobject using data found in this class.  A unit is 
        created by pairing this with the gameobject.  Then the unit is added to 
        the unitCollection with the hashid as the key for the unit value.*/
        var model:GameObject=(GameObject)tgm.getValue(unitType,modelNum);
        var unit:Unit=new Unit(this,model);
        unitCollection.getUC().addUnit(unit);//this will automatically use the hashid as the key 
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
