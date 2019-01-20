public class ArchetypeHash{
    private static var ath:ArchetypeHash;
    public var archetypeTable:HashTable;
    public var atList:String[]=["WindElemental","WaterElemental","StormBreaker",
    "Sorcerer","SeaSentinel","Salamandar","Rogue","PoisonElemental","Nomad",
    "MagicElemental","Knight","IceElemental","Golem","FireElemental",
    "ElectricElemental","EarthElemental","DarkDweller","Brute","BladeElemental",
    "Balanced","Assassin"];

    public function ArchetypeHash(){
        archetypeTable["WindElemental"]=new ArchetypeWindElemental();
        archetypeTable["WaterElemental"]=new ArchetypeWaterElemental();
        archetypeTable["StormBreaker"]=new ArchetypeStormBreaker();
        archetypeTable["Sorcerer"]=new ArchetypeSorcerer();
        archetypeTable["SeaSentinel"]=new ArchetypeSeaSentinel();
        archetypeTable["Salamandar"]=new ArchetypeSalamandar();
        archetypeTable["Rogue"]=new ArchetypeRogue();
        archetypeTable["PoisonElemental"]=new ArchetypePoisonElemental();
        archetypeTable["Nomad"]=new ArchetypeNomad();
        archetypeTable["MagicElemental"]=new ArchetypeMagicElemental();
        archetypeTable["Knight"]=new ArchetypeKnight();
        archetypeTable["IceElemental"]=new ArchetypeIceElemental();
        archetypeTable["Golem"]=new ArchetypeGolem();
        archetypeTable["FireElemental"]=new ArchetypeFireElemental();
        archetypeTable["ElectricElemental"]=new ArchetypeElectricElemental();
        archetypeTable["EarthElemental"]=new ArchetypeEarthElemental();
        archetypeTable["DarkDweller"]=new ArchetypeDarkDweller();
        archetypeTable["Brute"]=new ArchetypeBrute();
        archetypeTable["BladeElemental"]=new ArchetypeBladeElemental();
        archetypeTable["Balanced"]=new ArchetypeBalanced();
        archetypeTable["Assassin"]=new ArchetypeAssassin();
        setStats();
    }


    /*0- armor, 1- strength,2- vitality,3- agility,4- dexterity,5- intelligence,
    6- wisdom,7- charisma,8- endurance,9- luck,10- moveSpeed.
    Every type should use 22 points to allocate.  Might be spun off as another 
    type*/
    private function setStats(){
        ((Archetype)archetypeTable["WindElemental"]).setStatArr([6,5,1,1,1,1,1,1,1,1,3]);//
        ((Archetype)archetypeTable["WaterElemental"]).setStatArr([6,5,1,1,1,1,1,1,1,1,3]);//
        ((Archetype)archetypeTable["StormBreaker"]).setStatArr([3,1,1,3,1,3,3,1,1,3,2]);//
        ((Archetype)archetypeTable["Sorcerer"]).setStatArr([1,1,1,1,1,5,5,4,1,1,1]);//
        ((Archetype)archetypeTable["SeaSentinel"]).setStatArr([1,1,3,3,1,1,1,3,5,1,2]);//
        ((Archetype)archetypeTable["Salamandar"]).setStatArr([1,1,3,3,1,1,1,3,5,1,2]);//
        ((Archetype)archetypeTable["Rogue"]).setStatArr([1,1,3,3,1,1,1,3,5,1,2]);//
        ((Archetype)archetypeTable["PoisonElemental"]).setStatArr([6,5,1,1,1,1,1,1,1,1,3]);//
        ((Archetype)archetypeTable["Nomad"]).setStatArr([1,1,3,3,1,1,1,3,5,1,2]);//
        ((Archetype)archetypeTable["MagicElemental"]).setStatArr([6,5,1,1,1,1,1,1,1,1,3]);//
        ((Archetype)archetypeTable["Knight"]).setStatArr([8,5,1,1,1,1,1,1,1,1,1]);//
        ((Archetype)archetypeTable["IceElemental"]).setStatArr([6,5,1,1,1,1,1,1,1,1,3]);//
        ((Archetype)archetypeTable["Golem"]).setStatArr([1,4,5,1,1,1,1,1,5,1,1]);//
        ((Archetype)archetypeTable["FireElemental"]).setStatArr([6,5,1,1,1,1,1,1,1,1,3]);//
        ((Archetype)archetypeTable["ElectricElemental"]).setStatArr([6,5,1,1,1,1,1,1,1,1,3]);//
        ((Archetype)archetypeTable["EarthElemental"]).setStatArr([6,5,1,1,1,1,1,1,1,1,3]);//
        ((Archetype)archetypeTable["DarkDweller"]).setStatArr([1,1,3,3,1,1,1,3,5,1,2]);
        ((Archetype)archetypeTable["Brute"]).setStatArr([1,5,4,1,1,1,1,1,5,1,1]);//
        ((Archetype)archetypeTable["BladeElemental"]).setStatArr([6,5,1,1,1,1,1,1,1,1,3]);//
        ((Archetype)archetypeTable["Balanced"]).setStatArr([2,2,2,2,2,2,2,2,2,2,2]);//
        ((Archetype)archetypeTable["Assassin"]).setStatArr([1,1,1,3,3,1,1,1,3,3,4]);//
    }

    public static function getValue(str:String){
	    if(ath==null){
	        ath= new ArchetypeHash();
	    }
	    return ath.archetypeTable[str];
    }

    public static function getATString(val:int){
        if(ath==null){
            ath= new ArchetypeHash();
        }
        return ath.atList[val];
    }

    public static function getRandomString(){
        if(ath==null){
            ath= new ArchetypeHash();
        }
        var val:int=Random.Range(0,ath.atList.length);//should go up to 1 less than length
        return ath.atList[val]
    }
}