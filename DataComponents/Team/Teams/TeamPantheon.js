public class TeamPantheon extends Team{

    private static var teamPA:TeamPantheon;

	public function TeamPantheon(){
        var subteams= new ArrayList();
        subteams.Add(new Tuple("Pantheon","Main_001"));//tuples are pairs of names and directories where subteams are located
		super("Pantheon","GreekEmpire_Icon001",subteams);
	}

	public function getRandomLeaderTuple(){
        //Leader Tuples have name and model number, model is later loaded from team/main_001/titan 
	}

	public static function getTeam(){
		if(teamPA==null){
			teamPA=new TeamPantheon();
		}
		return teamPA;
	}
}