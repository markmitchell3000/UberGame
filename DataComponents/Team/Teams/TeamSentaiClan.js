public class TeamSentaiClan extends Team{

    private static var teamSC:TeamSentaiClan;

	public function TeamSentaiClan(){
        var subteams= new ArrayList();
        subteams.Add(new Tuple("Sentai Clan","Main_001"));//tuples are pairs of names and directories where subteams are located
		super("Sentai_Clan","Neutrinos_Icon001",subteams);
	}

	public function getRandomLeaderTuple(){
        //Leader Tuples have name and model number, model is later loaded from team/main_001/titan 
	}

	public static function getTeam(){
		if(teamSC==null){
			teamSC=new TeamSentaiClan();
		}
		return teamSC;
	}
}