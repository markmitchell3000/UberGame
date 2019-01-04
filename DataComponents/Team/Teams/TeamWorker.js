public class TeamWorker extends Team{

    private static var teamWK:TeamWorker;

	public function TeamWorker(){
        var subteams= new ArrayList();
        subteams.Add(new Tuple("Worker","Workers_001"));//tuples are pairs of names and directories where subteams are located
		super("Workers","MOTU_Icon001",subteams);
	}

	public function getRandomLeaderTuple(){
        //Leader Tuples have name and model number, model is later loaded from team/main_001/titan 
	}

    public function hasLeaders(){
    	return false;
    }
    
	public static function getTeam(){
		if(teamWK==null){
			teamWK=new TeamWorker();
		}
		return teamWK;
	}
}