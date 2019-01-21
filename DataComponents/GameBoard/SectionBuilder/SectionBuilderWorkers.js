public class SectionBuilderWorkers extends SectionBuilder{
    private var mainTeam:String = "workers";
    private var mainDir:String = "WorksdUnits/";
    private static var secBld:SectionBuilderWorkers;

    public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int,gb: GameBoard){
        var gp= new SubteamGroup(lvl, getSubteam(), groupID,ts, quadrant, gb);
        return gp;//SubteamGroups are added to a collection
    }

    /*randomly selects a team name from a list of teams, these are 
    mostly used for grabbing the models for that team, and naming the group.*/
    private function getSubteam(){
        var teams = new ArrayList();
        teams.add(new Tuple(mainTeam,"AAA_Main_V001"));
        //---TODO ---split up large groups
        var index = getRandomIndex(teams.Count)
        var tuple:Tuple = (Tuple)teams[index];
        return new TeamString(mainTeam, (String)tuple.getFst(), mainDir+(String)tuple.getSnd());
    }

    public static function getSecBld(){
        if(secBld==null){
            secBld= new SectionBuilderWorkers();
        }
        return secBld;
    }
}
