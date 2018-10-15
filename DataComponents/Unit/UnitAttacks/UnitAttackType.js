/*each attack type has a unique cooldown, distance and level. The level is 
independent of units level but as unit upgraded it will have points to allocate
to the power level of its attacks*/ 
public class UnitAttackType{
	protected var level:int;
	protected var cooldown:int;//used to start death counters of created attacks
	protected var distance:int;//max distance where attack will be called. (i.e. unit is 3 tiles away fire arrow)
	protected var radius:int;//0 for all but aoe,ultimate and passive
	//should this include range???

	public function UnitAttackType(lvl:int, cd:int, dst:int){
        level=lvl;
        cooldown=cd;
        distance=dst;
        radius=0;//if no radius is set this is 0
	} 

    public function UnitAttackType(lvl:int, cd:int, dst:int, rds: int){
        level=lvl;
        cooldown=cd;
        distance=dst;
        radius=rds;
    }

    //setters are handled by extended classes
	public function getLevel(){
        return level;
	}

	public function getCooldown(){
        return cooldown;
	}

	public function getDistance(){
        return distance;
	}

    //functions may be overwritten by children
	public function increaseLvl(){
		level++;
	}

	public function reduceCooldown(){
		if(cooldown>1){
			cooldown=(int)(.9*cooldown);
		}
	}

    //only implimented for blast, power and ranged
	public function increaseDistance(){
	}

	public function increaseRadius(){
	}
}