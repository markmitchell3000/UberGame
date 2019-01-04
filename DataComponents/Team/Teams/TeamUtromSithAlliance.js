public class TeamUtromSithAlliance extends Team{

    private static var teamUS:TeamUtromSithAlliance;

	public function TeamUtromSithAlliance(){
        var subteams= new ArrayList();
        subteams.Add(new Tuple("Utrom Sith Alliance","Main_001"));//tuples are pairs of names and directories where subteams are located
		super("Utrom_Sith_Alliance","GalacticEmpire_Icon001",subteams);
	}

	public function getRandomLeaderTuple(){
        //Leader Tuples have name and model number, model is later loaded from team/main_001/titan 
	}

	public static function getTeam(){
		if(teamUS==null){
			teamUS=new TeamUtromSithAlliance();
		}
		return teamUS;
	}
}