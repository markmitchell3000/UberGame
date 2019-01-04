public class TeamZombie extends Team{

    private static var teamZM:TeamZombie;

	public function TeamZombie(){
        var subteams= new ArrayList();
        subteams.Add(new Tuple("Zombie","Zombies_001"));//tuples are pairs of names and directories where subteams are located
		super("Zombies","MOTU_Icon001",subteams);
	}

	public function getRandomLeaderTuple(){
        //Leader Tuples have name and model number, model is later loaded from team/main_001/titan 
	}

	public function hasLeaders(){
    	return false;
    }

	public static function getTeam(){
		if(teamZM==null){
			teamZM=new TeamZombie();
		}
		return teamZM;
	}
}