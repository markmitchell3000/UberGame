/*Attack stats are unique to individual attacks.  Attacks are short lived and 
never stored in save game files.*/
public class AttackStats{
	public var type: String;//AttackType
    public var mainDamage: String;//DamageType
    public var team:String;	
    public var radius: int;
    public var range: int;
    public var speed: float;//speed that the object moves across map, 0 if melee etc.
    public var lifespan: float;//time remaining till attack disappears
    public var damages: HashTable;//highest damage type determines the model used, maybe should be hashtable where type is key, damage is value
    //lingering time and chance possibly

	public function AttackStats(tp:String, tm: String, rd:int,rng:int,spd:int,ls:int,dm:int,traits:UnitTraitCollection){
		type=tp;
		team=tm;
		radius=rd;
		range=rng;
		speed=(float)spd;
		lifespan=(float)ls;
		makeDamages(dm,traits);
	}

	private function makeDamages(damMult:int, traits:UnitTraitCollection){
        var highestDam:int=0;
        damages= new HashTable();//new int[traits.length];
        for(var i=0;i<traits.tableSize;i++){
            var damType:String=DamageTypeHash.getDTString(i);
            var traitRef:Traits = traits.getTrait(damType);
            if(traitRef.damage>highestDam){
            	highestDam=traitRef.damage;
            	mainDamage=traitRef.type;
            }
            damages[damType]=traitRef.damage*damMult;
        }
	}

    public function applyDamages(unit:Unit){
        //iterate across damages and apply affects
        var ud:UnitData=unit.unitData;
        var utc:UnitTraitCollection=ud.traits;
        var totalDam:int=0;
        for(var i=0;i<utc.tableSize;i++){
            var damType:String=DamageTypeHash.getDTString(i);
            var traitRef:Traits = traits.getTrait(damType);
            var dam:int=((int)damages[damType])-traitRef.defense;
            if(dam>0){
                totalDam+=dam;
                //possible lingering effect here
            }
        }
        ud.unitStats.curHealth-=totalDam;//issue damage
    }

    /*This function uses the type of attacks string and primary damage type 
    string and uses the static classes to select the model for the right attack 
    and damage.*/
	public function getGameObject(){
		var attType:AttackType= (AttackType) AttackTypeHash.getValue(type);//static method takes a string returns an AttackType
		var damType:DamageType= (DamageType) DamageTypeHash.getValue(mainDamage);//static method takes a string returns a DamageType
		return attType.getAttackObject(DamageType);
	}

    /********Decrement Potentially***********/
    /*function uses the static hash table that takes the string for team and 
    returns the team object.*/
	public function getTeam(){
		return TeamHash.getValue(team);//Not Yet Set up
	}
}