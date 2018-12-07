public class SectionBuilderUnitedLeague extends SectionBuilder{

    private var mainTeam:String = "united league";
    private var mainDir:String = "UnitedLeagueTeams/";
    private static var secBld:SectionBuilderUnitedLeague;

    public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int, gb: GameBoard){
        var ul:GBGroup;
        if(ts.getIsWar){
            ul= new GBGroup(lvl, getUnitedLeagueMainTeam(), groupID,ts, quadrant, gb);
        }
        else{
            ul= new GBGroup(lvl, getUnitedLeagueSubteam(), groupID,ts,quadrant, gb);
        }
        
        return ul;//GBGroups are added to a collection
    }

    /*Currently this grabs a single path and name for the core team, however 
    multiple versions could exists for one or more of the nations*/
    private function getUnitedLeagueMainTeam(){
        return new TeamString(mainTeam, mainTeam, mainDir+"AAA_Main_V001");
    }

    /*randomly selects a team name from a list of united league teams, these are 
    mostly used for grabbing the models for that team, and naming the group.*/
    private function getUnitedLeagueSubteam(){
        var ulTeams = new ArrayList();
        ulTeams.add(new Tuple(mainTeam,"AAA_Main_V001"));
        ulTeams.add(new Tuple("autobots","Autobots_V001"));
        ulTeams.add(new Tuple("batmen","Batmen_V001"));
        ulTeams.add(new Tuple("blue lanterns","BlueLanterns_V001"));
        ulTeams.add(new Tuple("bprd","BPRD_V001"));
        ulTeams.add(new Tuple("catwomen","Catwomen_V001"));
        ulTeams.add(new Tuple("doom patrol","DoomPatrol_V001"))
        ulTeams.add(new Tuple("green lantern corps","GreenLanternCorps_V001"));
        ulTeams.add(new Tuple("justice league","JusticeLeague_V001"));
        ulTeams.add(new Tuple("justice league dark","JusticeLeagueDark_V001"));
        ulTeams.add(new Tuple("justice society", "JusticeSociety_V001"));
        ulTeams.add(new Tuple("league of freedom","LeagueOfFreedom_V001"));
        ulTeams.add(new Tuple("outsiders", "Outsiders_V001"));
        ulTeams.add(new Tuple("red team","RedTeam_V001"));
        ulTeams.add(new Tuple("titans","Titans_V001"));
        var index = getRandomIndex(ulTeams.Count);
        var tuple:Tuple = (Tuple)ulTeams[index];
        return new TeamString(mainTeam, (String)tuple.getFst(), mainDir+(String)tuple.getSnd());
    }

    public static function getSecBld(){
        if(secBld==null){
            secBld= new SectionBuilderUnitedLeague();
        }
        return secBld;
    }
}
 
