public class TeamUnitedLeague extends Team{

    private static var teamUL:TeamUnitedLeague;

	public function TeamUnitedLeague(){
        var subteams= new ArrayList();
        subteams.Add(new Tuple("United League","Main_001"));//tuples are pairs of names and directories where subteams are located
		super("United_League","GIJoe_Icon001",subteams);
	}

	public function getRandomLeaderTuple(){
        //Leader Tuples have name and model number, model is later loaded from team/main_001/titan 
	}

	public static function getTeam(){
		if(teamUL==null){
			teamUL=new TeamUnitedLeague();
		}
		return teamUL;
	}
}