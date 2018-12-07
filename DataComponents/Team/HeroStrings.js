public class HeroStrings{
	private var erModelNames: String[]=["Mossman"];
	private var inModelNames: String[]=["Spiderman"];
	private var nhModelNames: String[]=["BlackKnight"];
	private var paModelNames: String[]=["Bakasura"];
	private var scModelNames: String[]=["TerraFirma"];
	private var seModelNames: String[]=["Mordo"];
	private var ulModelNames: String[]=["Felicia"];
	private var usModelNames: String[]=["CadeBane"];
	private var heroLists = new HashTable();

	private static var hs:HeroStrings;

	public function HeroStrings(){
        heroLists["eternian republic"]=erModelNames;
        heroLists["initiative"]=inModelNames;
        heroLists["night horde"]=nhModelNames;
        heroLists["pantheon"]=paModelNames;
        heroLists["sentai clan"]=scModelNames;
        heroLists["shadow empire"]=seModelNames;
        heroLists["united league"]=ulModelNames;
        heroLists["utrom sith alliance"]=usModelNames;
	}

    public function getTeamHeroList(team:String){
        return heroLists[team];
    }

    public static function getHS(){
    	if(hs ==null){
            hs = new HeroStrings();
    	}
    	return hs;
    }

}