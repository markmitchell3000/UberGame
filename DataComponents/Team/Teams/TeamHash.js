public class TeamHash{
    private teams:HashTable;
    private static teamHash:TeamHash;

    public function TeamHash(){
        teams["Eternian Republic"]=TeamEternianRepublic.getTeam();
        teams["Initiative"]=TeamInitiative.getTeam();
        teams["Night Horde"]=TeamNightHorde.getTeam();
        teams["Pantheon"]=TeamNightHorde.getTeam();
        teams["Sentai Clan"]=TeamSentaiClan.getTeam();
        teams["Shadow Empire"]=TeamShadowEmpire.getTeam();
        teams["United League"]=TeamUnitedLeague.getTeam();
        teams["Utrom Sith Alliance"]=TeamUtromSithAlliance.getTeam();
        teams["Civilians"]=TeamCivilian.getTeam();
        teams["Zombies"]=TeamZombie.getTeam();
        teams["Workers"]=TeamWorker.getTeam();
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