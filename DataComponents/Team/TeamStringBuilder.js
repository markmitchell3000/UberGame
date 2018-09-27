public class TeamStringBuilder{
	private var tStrs=new TeamString[10];

	public function TeamStringBuilder(){
		tStrs[0]= new TeamString("Eternian Republic","EternianRepublicTeams");
		tStrs[1]= new TeamString("Initiative","InitiativeTeams");
		tStrs[2]= new TeamString("Night Horde","NightHordeTeams");
		tStrs[3]= new TeamString("Pantheon","PantheonTeams");
		tStrs[4]= new TeamString("Sentai Clan","SentaiClanTeams");
		tStrs[5]= new TeamString("Shadown Empire","ShadownEmpireTeams");
		tStrs[6]= new TeamString("United League","UnitedLeagueTeams");
		tStrs[7]= new TeamString("Utrom Sith Alliance","UtromSithAllianceTeams");
		tStrs[8]= new TeamStringCrowd("Civilians","CivilianUnits");
		tStrs[9]= new TeamStringCrowd("Zombies","ZombieUnits");
	}

	public function getTeamString(num:int){
		return tStrs[num];
	}
}