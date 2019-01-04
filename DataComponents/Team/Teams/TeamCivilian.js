public class TeamCivilians extends Team{

    private static var teamCV:TeamCivilians;

	public function TeamCivilians(){
        var subteams= new ArrayList();
        subteams.Add(new Tuple("Civilians","Civilians_001"));//tuples are pairs of names and directories where subteams are located
		super("Civilians","MOTU_Icon001",subteams);
	}

	public function getRandomLeaderTuple(){
        //Leader Tuples have name and model number, model is later loaded from team/main_001/titan 
	}

    public function hasLeaders(){
    	return false;
    }

	public static function getTeam(){
		if(teamCV==null){
			teamCV=new TeamCivilians();
		}
		return teamCV;
	}
}