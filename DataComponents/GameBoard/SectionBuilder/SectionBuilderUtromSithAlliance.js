public class SectionBuilderUtromSithAlliance extends SectionBuilder{

    private var mainTeam:String = "utrom sith alliance";
    private var mainDir:String = "UtromSithAllianceTeams/";
    private static var secBld:SectionBuilderUtromSithAlliance;

    public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int, gb: GameBoard){
        var gp:SubteamGroup;
        if(ts.getIsWar){
            gp= new SubteamGroup(lvl, getMainTeam(), groupID,ts, quadrant, gb);
        }
        else{
            gp= new SubteamGroup(lvl, getSubteam(), groupID,ts,quadrant, gb);
        }
        
        return gp;//SubteamGroups are added to a collection
    }

    /*Currently this grabs a single path and name for the core team, however 
    multiple versions could exists for one or more of the nations*/
    private function getMainTeam(){
        return new TeamString(mainTeam, mainTeam, mainDir+"AAA_Main_V001");
    }

    /*randomly selects a team name from a list of teams, these are 
    mostly used for grabbing the models for that team, and naming the group.*/
    private function getSubteam(){
        var ulTeams = new ArrayList();
        ulTeams.add(new Tuple(mainTeam,"AAA_Main_V001"));
        teams.add(new Tuple("apokolips","Apokolips_V001"));
        teams.add(new Tuple("black order","BlackOrder_V001";
        teams.add(new Tuple("borg","Borg_V001"));
        teams.add(new Tuple("brainiac","Brainiac_V001"));
        teams.add(new Tuple("brood","Brood_V001"));
        teams.add(new Tuple("brotherhood of inhumans","BrotherhoodOfInhumans_V001"));
        teams.add(new Tuple("doomsday infection","DoomsdayInfection_V001"));
        teams.add(new Tuple("enclave","Enclave_V001"));
        teams.add(new Tuple("kree","Kree_V001"));
        teams.add(new Tuple("manhunters", "Manhunters_V001"));
        teams.add(new Tuple("new krypton authority","NewKryptonAuthority_V001"));
        teams.add(new Tuple("qward", "Qward_V001"));
        teams.add(new Tuple("sentinels","Sentinels_V001"));
        teams.add(new Tuple("shadaloo","Shadaloo_V001"));
        teams.add(new Tuple("sith imperialists", "SithImperialists_V001"));
        teams.add(new Tuple("skrulls", "Skrulls_V001"));
        teams.add(new Tuple("skynet","Skynet_V001"));
        teams.add(new Tuple("ultron initiative","UltronInitiative_V001"));
        teams.add(new Tuple("utrom","Utrom_V001"));
        teams.add(new Tuple("wily industries", "WilyIndustries_V001")):
        teams.add(new Tuple("xenobots","XenoBots_V001"));
        teams.add(new Tuple("xenomorph","Xenomorph_V001"));
        var index = getRandomIndex(teams.Count);
        var tuple:Tuple = (Tuple)teams[index];
        return new TeamString(mainTeam, (String)tuple.getFst(), mainDir+(String)tuple.getSnd());
    }

    public static function getSecBld(){
        if(secBld==null){
            secBld= new SectionBuilderUtromSithAlliance();
        }
        return secBld;
    }
}
 
