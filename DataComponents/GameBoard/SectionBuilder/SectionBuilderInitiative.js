public class SectionBuilderInitiative extends SectionBuilder{

    private var mainTeam:String = "initiative";
    private var mainDir:String = "InitiativeTeams/";
    private static var secBld:SectionBuilderInitiative;

    public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int, gb: GameBoard){
        var in:SubteamGroup;
        if(ts.getIsWar){
            in= new SubteamGroup(lvl, getInitiativeMainTeam(), groupID,ts, quadrant, gb);
        }
        else{
            in= new SubteamGroup(lvl, getInitiativeSubteam(), groupID,ts,quadrant, gb);
        }
        
        return in;//SubteamGroups are added to a collection
    }

    /*Currently this grabs a single path and name for the core team, however 
    multiple versions could exists for one or more of the nations*/
    private function getInitiativeMainTeam(){
        return new TeamString(mainTeam, mainTeam, mainDir+"AAA_Main_V001");
    }

    /*randomly selects a team name from a list of initiative teams, these are 
    mostly used for grabbing the models for that team, and naming the group.*/
    private function getInitiativeSubteam(){
        var inTeams = new ArrayList();
        inTeams.add(new Tuple(mainTeam,"AAA_Main_V001"));
        inTeams.add(new Tuple("avengers","Avengers_V001"));
        inTeams.add(new Tuple("blue team","BlueTeam_V001"));
        inTeams.add(new Tuple("defenders","Defenders_V001"));
        inTeams.add(new Tuple("department k","DepartmentK_V001"));
        inTeams.add(new Tuple("fantastic force","FantasticForce_V001"));
        inTeams.add(new Tuple("galactic federation","GalacticFederation_V001"));
        inTeams.add(new Tuple("guardians of the galaxy","GuardiansOfTheGalaxy_V001"));
        inTeams.add(new Tuple("iron legion","IronLegion_V001"));
        inTeams.add(new Tuple("shield","SHIELD_V001"));
        inTeams.add(new Tuple("spidermen","SpiderMen_V001"));
        inTeams.add(new Tuple("squadron supreme","SquadronSupreme_V001"));
        inTeams.add(new Tuple("wakanda","Wakanda_V001"));
        inTeams.add(new Tuple("weapon x","WeaponX_V001"));
        inTeams.add(new Tuple("x-force","Xforce_V001"));
        inTeams.add(new Tuple("x-men""Xmen_V001"));
        var index = getRandomIndex(inTeams.Count)
        var tuple:Tuple = (Tuple)inTeams[index];
        return new TeamString(mainTeam, (String)tuple.getFst(), mainDir+(String)tuple.getSnd());
    }

    public static function getSecBld(){
        if(secBld==null){
            secBld= new SectionBuilderInitiative();
        }
        return secBld;
    }
}
 
