//directly used by items and extended for units since they need more stuff
public class BaseStats{
	public var health: int;//maxhealth for unit, plus amount from items
	public var healingRate: int; //added back every other second 
	public var mana: int;//mana for unit, plus this amount from items
	public var manaRate: int; //added back every other second 
    public var xpRate:float;//boost based on wisdom or item over units assigned xp
    public var wealthRate: int;//amount made per 5 seconds if player unit.

    //need to apply these at some point
    public var armor: int; //base damage threshold, some chance damage can circumvent armor
    public var strength: int; //increase damage
	public var vitality: int; //increase health
	public var agility: int; // increase dodge
	public var dexterity: int; //increases weapon damage
	public var intelligence: int; //increase mana recharge, maybe action
	public var wisdom: int; //increase mana
	public var charisma: int; //chance of non detection in scan, maybe a do not place in locHash for some frames...
	public var endurance: int; //mana re charge, health re charge
	public var luck: int; //chance to hit
	public var moveSpeed: int; //movement across the board

	public var rotationSpeed: int=5;//no idea what this should be,probably should be static

	public function BaseStats(archetype:Archetype,lvl:int){
        var arr:int[]=archetype.getStatArr();
        armor=spotHelper(arr,0,lvl);
        strength=spotHelper(arr,1,lvl);
        vitality=spotHelper(arr,2,lvl);
        agility=spotHelper(arr,3,lvl);
        dexterity=spotHelper(arr,4,lvl);
        intelligence=spotHelper(arr,5,lvl);
        wisdom=spotHelper(arr,6,lvl);
        charisma=spotHelper(arr,7,lvl);
        endurance=spotHelper(arr,8,lvl);
        luck=spotHelper(arr,9,lvl);
        moveSpeed=spotHelper(arr,10,lvl);
	}

	private function statHelper(arr:int[],spot:int,lvl:int){
		return arr[spot]+lvl+((int)(lvl*.05*arr[spot]));
	}

	public function setHPandMana(unitType:UnitType, lvl:int){
        health=unitType.getMaxHealth(lvl);
        mana=unitType.getMaxMana(lvl);
        setRecoverRates(lvl);
	}

    /*Any unit will fully recover after 10 minutes (600 seconds), at level 100, 
    healing is at its highest pace at 200 seconds.  Mana is half of this*/
    private funtion setRecoverRates(lvl:int){
        var hpDenom:int = 600 - (lvl*4);
        if(hpDenom<200){
        	hpDenom=200;
        }
        var manaDenom:int = 300 -(lvl*2);
        if(manaDenom<100){
        	manaDenom=100;
        }
        healingRate=(int)health/hpDenom;
        manaRate=(int)mana/manaDenom;
    }

	//setHPandMana for items is needed
}