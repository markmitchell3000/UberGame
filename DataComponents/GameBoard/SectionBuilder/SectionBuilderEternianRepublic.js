public class SectionBuilderEternianRepublic extends SectionBuilder{

    private var mainTeam:String = "eternian republic";
    private var mainDir:String = "EternianRepublicTeams/";
    private static var secBld:SectionBuilderEternianRepublic;

    public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int, gb: GameBoard){
        var er:SubteamGroup;
        if(ts.getIsWar){
            er= new SubteamGroup(lvl, getEternianMainTeam(), groupID,ts, quadrant, gb);
        }
        else{
            er= new SubteamGroup(lvl, getEternianSubteam(), groupID,ts,quadrant, gb);
        }
        
        return er;//SubteamGroups are added to a collection
    }

    /*Currently this grabs a single path and name for the core team, however 
    multiple versions could exists for one or more of the nations*/
    private function getEternianMainTeam(){
        return new TeamString(mainTeam, mainTeam, mainDir+"AAA_Main_V001");
    }

    /*randomly selects a team name from a list of eternian teams, these are 
    mostly used for grabbing the models for that team, and naming the group.*/
    private function getEternianSubteam(){
        var erTeams = new ArrayList();
        erTeams.add(new Tuple(mainTeam,"AAA_Main_V001"));
        erTeams.add(new Tuple("brotherhood of steel","BrotherhoodOfSteel_V001"));
        erTeams.add(new Tuple("gorilla city","GorillaCity_V001"));
        erTeams.add(new Tuple("inhumans","Inhumans_V001"));
        erTeams.add(new Tuple("keyblades","KeyBlades_V001"));
        erTeams.add(new Tuple("new republic","NewRepublic_V001"));
        erTeams.add(new Tuple("night elves","NightElves_V001"));
        erTeams.add(new Tuple("terrans","Terrans_V001"));
        erTeams.add(new Tuple("thanagar","Thanagar_V001"));
        erTeams.add(new Tuple("the order","TheOrder_V001"));
        var index = getRandomIndex(erTeams.Count)
        var tuple:Tuple = (Tuple)erTeams[index];
        return new TeamString(mainTeam, (String)tuple.getFst(), mainDir+(String)tuple.getSnd());
    }

    public static function getSecBld(){
        if(secBld==null){
            secBld= new SectionBuilderZombies();
        }
        return secBld;
    }
}
 
