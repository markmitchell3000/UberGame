public class TeamHash{
    private teams:HashTable;
    private static teamHash:TeamHash;

    public function TeamHash(){
        teams["Eternian Republic"]=new Team("Eternian_Republic","MOTU_Icon001");
        teams["Iniative"]=new Team("Iniative","SHIELD_Icon001");
        teams["Night Horde"]=new Team("Night_Horde","DarkHorde_Icon001");
        teams["Pantheon"]=new Team("Pantheon","GreekEmpire_Icon001");
        teams["Sentai Clan"]=new Team("Sentai_Clan","Neutrinos_Icon001");
        teams["Shadow Empire"]=new Team("Shadow_Empire","Hydra_Icon001");
        teams["United League"]=new Team("United_League","GIJoe_Icon001");
        teams["Utrom Sith Alliance"]=new Team("Utrom_Sith_Alliance","GalacticEmpire_Icon001");
        teams["Civilians"]=new Team("Civilians","MOTU_Icon001");
        teams["Zombies"]=new Team("Zombies","MOTU_Icon001");
        teams["Workers"]=new Team("Workers","MOTU_Icon001");
    }

	public static function getValue(str:String){
        if(teamHash==null){
            teamHash=new TeamHash();
        }
        return teamHash.getTeam(str);
	}

	public function getTeam(str:String){
	    return teams[str];
	}
}