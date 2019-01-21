public class SectionBuilderCivilians extends SectionBuilder{
    private var mainTeam:String = "civilians";
    private var mainDir:String = "CivilianUnits/";
	private static var secBld:SectionBuilderCivilians;

    public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int,gb: GameBoard){
        var civ= new SubteamGroup(lvl, getCivSubteam(), groupID,ts, quadrant, gb);
        return civ;//SubteamGroups are added to a collection
    }

    /*randomly selects a team name from a list of civilian teams, these are 
    mostly used for grabbing the models for that team, and naming the group.*/
    private function getCivSubteam(){
        var civTeams = new ArrayList();
        civTeams.add(new Tuple(mainTeam,"AAA_Main_V001"));
        //---TODO ---split up large groups
        var index = getRandomIndex(civTeams.Count)
        var tuple:Tuple = (Tuple)civTeams[index];
        return new TeamString(mainTeam, (String)tuple.getFst(), mainDir+(String)tuple.getSnd());
    }

	public static function getSecBld(){
        if(secBld==null){
        	secBld= new SectionBuilderCivilians();
        }
        return secBld;
	}
}
