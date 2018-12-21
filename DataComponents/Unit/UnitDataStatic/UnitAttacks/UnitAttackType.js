/*each attack type has a unique cooldown, distance and level. The level is 
independent of units level but as unit upgraded it will have points to allocate
to the power level of its attacks*/ 
public class UnitAttackType{
	protected var type:String;
	protected var cooldown:int;//used to start death counters of created attacks
	protected var distance:int;//max distance where attack will be called. (i.e. unit is 3 tiles away fire arrow)
	protected var radius:int;//0 for all but aoe,ultimate and passive
	//should this include range???

	public function UnitAttackType(tp:String, cd:int, dst:int){
        type=tp;
        cooldown=cd;
        distance=dst;
        radius=0;//if no radius is set this is 0
	} 

    public function UnitAttackType(tp:String, cd:int, dst:int, rds: int){
        type=tp;
        cooldown=cd;
        distance=dst;
        radius=rds;
    }

    //setters are handled by extended classes
	public function getType(){
        return type;
	}

	public function getCooldown(){
        return cooldown;
	}

	public function getDistance(){
        return distance;
	}
    
    /*takes the level from the UnitPowers TypeRank tuples and uses this as a 
    multiplier, it then goes through each of the ranks to create an attack 
    object*/
	public function getDamage(traits:Traits[],lvl:int){
		//abstract function
	}
}