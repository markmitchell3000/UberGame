public class TeamEternianRepublic extends Team{

    private static var teamER:TeamEternianRepublic;


	public function TeamEternianRepublic(){
        var subteams= new ArrayList();
        subteams.Add(new Tuple("Eternian Republic","Main_001"));//tuples are pairs of names and directories where subteams are located
		super("Eternian_Republic","MOTU_Icon001",subteams);
	}

	public function getRandomLeaderTuple(){
        //Leader Tuples have name and model number, model is later loaded from team/main_001/titan 
	}

	public static function getTeam(){
		if(teamER==null){
			teamER=new TeamEternianRepublic();
		}
		return teamER;
	}
}