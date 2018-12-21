public class SectionBuilderZombies extends SectionBuilder{
    private var mainTeam:String = "zombies";
    private var mainDir:String = "ZombieUnits/";
    private static var secBld:SectionBuilderZombies;

    public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int,gb: GameBoard){
        var zom= new GBGroup(lvl, getZombieSubteam(), groupID,ts, quadrant, gb);
        return zom;//GBGroups are added to a collection
    }

    /*randomly selects a team name from a list of zombie teams, these are 
    mostly used for grabbing the models for that team, and naming the group.*/
    private function getZombieSubteam(){
        var zomTeams = new ArrayList();
        zomTeams.add(new Tuple(mainTeam,"AAA_Main_V001"));
        //---TODO ---split up large groups
        var index = getRandomIndex(zomTeams.Count)
        var tuple:Tuple = (Tuple)zomTeams[index];
        return new TeamString(mainTeam, (String)tuple.getFst(), mainDir+(String)tuple.getSnd());
    }

    public static function getSecBld(){
        if(secBld==null){
            secBld= new SectionBuilderZombies();
        }
        return secBld;
    }
}
