public class TeamShadowEmpire extends Team{

    private static var teamSE:TeamShadowEmpire;

	public function TeamShadowEmpire(){
        var subteams= new ArrayList();
        subteams.Add(new Tuple("Shadow Empire","Main_001"));//tuples are pairs of names and directories where subteams are located
		super("Shadow_Empire","Hydra_Icon001",subteams);
	}

	public function getRandomLeaderTuple(){
        //Leader Tuples have name and model number, model is later loaded from team/main_001/titan 
	}

	public static function getTeam(){
		if(teamSE==null){
			teamSE=new TeamShadowEmpire();
		}
		return teamSE;
	}
}