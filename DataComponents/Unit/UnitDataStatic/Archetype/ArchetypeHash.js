public class ArchetypeHash{
    private static var ath:ArchetypeHash;
    private var archetypeTable:HashTable;

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
    }

    public static function getValue(str:String){
	if(ath==null){
	    ath= new ArchetypeHash();
	}
	return ath.archetypeTable[str];
    }
}