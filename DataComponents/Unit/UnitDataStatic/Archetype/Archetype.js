/*enum ARCHETYPE{BALANCED, GOLEM, BLADE_ELEM, EARTH_ELEM, ELECTRIC_ELEM, FIRE_ELEM, 
	ICE_ELEM, MAGIC_ELEM, POISON_ELEM, WATER_ELEM, WIND_ELEM, SEA_SENTINEL, SOCEROR, 
	ASSASSIN, NOMAD, ROGUE, KNIGHT, BRUTE, DARK_DWELLER, SALAMADER, STORMBREAKER};*/
public class Archetype{
	public var kind:String;//name of extended class, used for displayed stats
	public var damagePref:String;//may not be used since most powerful of multipliers is what is used for models
	public var attackPref:String;
    protected var multipliers:int[]=new int[10];//basic, poison etc defense and attack multipliers

    public function Archetype(mult:int[], damPrf:String, attPrf:String, knd:String){
        if(mult.length!=10){
            Debug.Log("Archetype multiplier must be length 10");
        }
        else{
            kind=knd;
            damagePref=damPrf;
            attackPref=attPrf;
            multipliers=mult;   
        }
    }

    //Abstract function for getting a singleton archetype child
    public static function getArch(){}

    public function getAttackArr(lvl:int){
        var attArr:int[]=new int[10];
        for(var i=0;i<10;i++){
        	attArr[i]=lvl*multipliers[i];
        }
        return attArr;
    }

    public function getDefenseArr(lvl:int){
        var defArr:int[]=new int[10];
        for(var i=0;i<10;i++){
        	defArr[i]=0.5*lvl*multipliers[i];
        }
        return defArr;
    }
}
