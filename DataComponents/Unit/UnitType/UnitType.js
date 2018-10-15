
/*Bases can generate, respawn and attack but not move. Used only by a teams main groups. 
Towers can attack but not move. Used only by a teams main groups.
Bonuses can attack and enhance team stats but cannot move. Used only by a teams main groups, for now.
Soldiers have low stats and always move or attack.
Lieutenats respawn with base and have high stats and always move or attack, heroes are considered lts. 
Hunters respawn with base and have lt level stats and seek out Heroes or lt units or work there way to lower level units if needed.
Guardians only move to pursue but will always return to a set location, they have higher stats than lts.
Titans are just like guardians but with higher stats.
Civilians have low stats and can move, flee or stay idle. They are allied with home team, in case of mission that is players team. 
  Other kinds of activities may be added later.
Zombies have mid level stats and can move, pursue or attack.  They will attack all teams.
Workers are like civilians but preform certain tasked that grow the wealth of the state they belong. 
*/
//BASE, TOWER, BONUS, SOLDIER, LIEUTENANT, HUNTER, GUARDIAN, TITAN, CIVILIAN, ZOMBIE, WORKER
public class UnitType{
    protected var maxHealth:int;
    protected var maxMana:int;
    protected var attRange:float;
    protected var pursueRange:float;
    protected var isBuilding:boolean
    //abstract function uses the umf to return the appropriate array of models for that type
    public function getModelArr(umf: UnitModelFactory){

    }

    //populated by values from child classes, ie.: health, mana, attackrange, pursuerange
    public function setStats(lvl:int, bonus:float, bH:int, bM:int, aR:float,pR:float){
        maxHealth = bH*(1+(0.1*lvl));
		maxMana = bM*(1+(0.1*lvl));
		attRange= aR + bonus;//
		pursueRange = pR+aR;
    }
    
    //set by extended class
    public function getMaxHealth(){
    	return maxHealth;
    }
    //set by extended class
    public function getMaxMana(){
    	return maxMana;
    }
    //set by extended class
    public function getAttackRange(){
    	return attRange;
    }
    //set by extended class
    public function getPursueRange(){
    	return pursueRange;
    }
    //set by extended class
    public function isBuilding(){
    	return isBuilding;
    	//buildings have a statusBarYOffset = Screen.height/5;
    	//units have a statusBarYOffset =0;
    }
}

