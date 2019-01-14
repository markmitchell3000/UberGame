/*Attack stats are unique to individual attacks.  Attacks are short lived and 
never stored in save game files.*/
public class AttackStats{
	public var type: String;//AttackType
    public var mainDamage: String;//DamageType
    public var team:String;	
    public var radius: int;
    public var range: int;
    public var speed: int;
    public var lifespan:int;
    public var damages: HashTable;//highest damage type determines the model used, maybe should be hashtable where type is key, damage is value
    public var curLoc: Point;//Derived from transform of unit that instantiates the attack
    public var direction: Point;//unsure how this is made

	public function AttackStats(tp:String, tm: String, rd:int,rng:int,spd:int,ls:int,dm:int,traits:Traits[]){
		type=tp;
		team=tm;
		radius=rd;
		range=rng;
		speed=spd;
		lifespan=ls;
		makeDamages(dm,traits);
	}

	private function makeDamages(damMult:int, traits:Traits[]){
        var highestDam:int=0;
        damages= new HashTable;//new int[traits.length];
        for(var i=0;i<traits.length;i++){
            if(traits[i].damage>highestDam){
            	highestDam=traits[i].damage;
            	mainDamage=traits[i].type;
            }
            damages[traits[i].type]=traits[i].damage*damMult;
        }
	}

    /*This function uses the type of attacks string and primary damage type 
    string and uses the static classes to select the model for the right attack 
    and damage.*/
	public function getGameObject(){
		var attType:AttackType= (AttackType) AttackTypeHash.getValue(type);//static method takes a string returns an AttackType
		var damType:DamageType= (DamageType) DamageTypeHash.getValue(mainDamage);//static method takes a string returns a DamageType
		return attType.getAttackObject(DamageType);
	}

    /*function uses the static hash table that takes the string for team and 
    returns the team object.*/
	public function getTeam(){
		return TeamHash.getValue(team);//Not Yet Set up
	}
}