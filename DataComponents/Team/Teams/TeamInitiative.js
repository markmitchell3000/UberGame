public class TeamInitiative extends Team{

    private static var teamIN:TeamInitiative;

	public function TeamInitiative(){
        var subteams= new ArrayList();
        subteams.Add(new Tuple("Initiative","Main_001"));//tuples are pairs of names and directories where subteams are located
		super("Initiative","SHIELD_Icon001",subteams);
	}

	public function getRandomLeaderTuple(){
        //Leader Tuples have name and model number, model is later loaded from team/main_001/titan 
	}

	public static function getTeam(){
		if(teamIN==null){
			teamIN=new TeamInitiative();
		}
		return teamIN;
	}
}