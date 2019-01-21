public class SectionBuilderPantheon extends SectionBuilder{

    private var mainTeam:String = "pantheon";
    private var mainDir:String = "PantheonTeams/";
    private static var secBld:SectionBuilderPantheon;

    public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int, gb: GameBoard){
        var pa:SubteamGroup;
        if(ts.getIsWar){
            pa= new SubteamGroup(lvl, getPantheonMainTeam(), groupID,ts, quadrant, gb);
        }
        else{
            pa= new SubteamGroup(lvl, getPantheonSubteam(), groupID,ts,quadrant, gb);
        }
        
        return pa;//SubteamGroups are added to a collection
    }

    /*Currently this grabs a single path and name for the core team, however 
    multiple versions could exists for one or more of the nations*/
    private function getPantheonMainTeam(){
        return new TeamString(mainTeam, mainTeam, mainDir+"AAA_Main_V001");
    }

    /*randomly selects a team name from a list of Pantheon teams, these are 
    mostly used for grabbing the models for that team, and naming the group.*/
    private function getPantheonSubteam(){
        var paTeams = new ArrayList();
        paTeams.add(new Tuple(mainTeam,"AAA_Main_V001"));
        paTeams.add(new Tuple("anti-asgard alliance","Amazons_V001"));
        paTeams.add(new Tuple("asgard","Asgard_V001"));
        paTeams.add(new Tuple("atlantis","Atlantis_V001"));
        paTeams.add(new Tuple("celtic gods","CelticGods_V001"));
        paTeams.add(new Tuple("circes forces","CircesForces_V001"));
        paTeams.add(new Tuple("eastern gods","EasternGods_V001"));
        paTeams.add(new Tuple("greco-roman gods","GrecoRomanGods_V001"));
        paTeams.add(new Tuple("hindu gods","HinduGods_V001"));
        paTeams.add(new Tuple("horseman of apocalypse","HorsemanOfApocalypse_V001"));
        paTeams.add(new Tuple("meso-american gods","MesoAmericanGods_V001"));
        paTeams.add(new Tuple("norse gods","NorseGods_V001"));
        paTeams.add(new Tuple("outworld","Outworld_V001"));
        paTeams.add(new Tuple("pantheon tech","PantheonTech_V001"));
        paTeams.add(new Tuple("the koopa","TheKoopa_V001"));
        paTeams.add(new Tuple("zadkiels horde","ZadkielsHorde_V001"));
        var index = getRandomIndex(paTeams.Count)
        var tuple:Tuple = (Tuple)paTeams[index];
        return new TeamString(mainTeam, (String)tuple.getFst(), mainDir+(String)tuple.getSnd());
    }

    public static function getSecBld(){
        if(secBld==null){
            secBld= new SectionBuilderPantheon();
        }
        return secBld;
    }
}
 
