public class TeamNightHorde extends Team{

    private static var teamNH:TeamNightHorde;

	public function TeamNightHorde(){
        var subteams= new ArrayList();
        subteams.Add(new Tuple("Night Horde","Main_001"));//tuples are pairs of names and directories where subteams are located
		super("Night_Horde","DarkHorde_Icon001",subteams);
	}

	public function getRandomLeaderTuple(){
        //Leader Tuples have name and model number, model is later loaded from team/main_001/titan 
	}

	public static function getTeam(){
		if(teamNH==null){
			teamNH=new TeamNightHorde();
		}
		return teamNH;
	}
}