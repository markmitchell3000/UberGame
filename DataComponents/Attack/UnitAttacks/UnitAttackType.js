/*each attack type has a unique cooldown, distance, radius, range and lifespan. 
This is used to generate individual attacks statistics when given the player 
modifications*/ 
public class UnitAttackType{
	protected var type:String;
	protected var cooldown:float;//used for determining when an attack can be created.
	protected var distance:int;//max distance where attack will be called. (i.e. unit is 3 tiles away fire arrow)
	protected var radius:int;//0 for all but aoe,ultimate and passive
    protected var range:int; //0 for attacks that do not move, how much it moves in the direction
    protected var speed:int; //speed attack moves along the direction
    protected var lifespan:int;//how long will the attack live for
    protected var damageMulti:int;//Used multiply damage, i.e. melee or range =1, ultimate=6

    public function UnitAttackType(tp:String, cd:int, dst:int, rds: int, rng:int,sp:int, ls:int, mul: int){
        type=tp;
        cooldown=(float)cd;
        distance=dst;
        radius=rds;
        range=rng;
        speed=sp;
        lifespan=ls;
        damageMulti=mul;
    }

    public static function getUAT(){
        //abstract type used for grabbing a singleton
    }


    /*grabbed when attack is generated, logic handled by runtimeoverlay of unit,
     in order to determine when a new attack is to be made. */
	public function getCooldown(playerDiscount:int){
        if (playerDiscount<cooldown){
            return cooldown-playerDiscount;
        }
        else{
            Debug.Log("playerDiscount is larger than attack cooldown");
        }
	}

    /*Used by player to determine if attack is in range to be called.*/
    public function getDistance(bonusDistance: int){
        return distance+bonusDistance;
    }
    
    /*takes the level from the UnitPowers TypeRank tuples and uses this as a 
    multiplier, it then goes through each of the ranks to create the AttackStats 
    for the attack data object*/
	public function getAttStats(traits:Traits[],lvl:int, bonusRadius: int, bonusRange: int, bonusLifespan: int,curLoc:Point,direction:point){
        return new AttackStats(type, radius+bonusRadius, range+bonusRange, speed, lifespan+bonusLifespan, damageMulti,traits, curLoc, direction);
	}
}