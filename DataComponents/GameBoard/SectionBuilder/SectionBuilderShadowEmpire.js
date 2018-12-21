public class SectionBuilderShadowEmpire extends SectionBuilder{

    private var mainTeam:String = "shadow empire";
    private var mainDir:String = "ShadowEmpireTeams/";
    private static var secBld:SectionBuilderShadowEmpire;

    public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int, gb: GameBoard){
        var se:GBGroup;
        if(ts.getIsWar){
            se= new GBGroup(lvl, getShadowEmpireMainTeam(), groupID,ts, quadrant, gb);
        }
        else{
            se= new GBGroup(lvl, getShadowEmpireSubteam(), groupID,ts,quadrant, gb);
        }
        
        return se;//GBGroups are added to a collection
    }

    /*Currently this grabs a single path and name for the core team, however 
    multiple versions could exists for one or more of the nations*/
    private function getShadowEmpireMainTeam(){
        return new TeamString(mainTeam, mainTeam, mainDir+"AAA_Main_V001");
    }

    /*randomly selects a team name from a list of Shadow Empire teams, these are 
    mostly used for grabbing the models for that team, and naming the group.*/
    private function getShadowEmpireSubteam(){
        var seTeams = new ArrayList();
        seTeams.add(new Tuple(mainTeam,"AAA_Main_V001"));
        seTeams.add(new Tuple("ace chemical","AceChemical_V001"));
        seTeams.add(new Tuple("aim","AIM_V001"));
        seTeams.add(new Tuple("anti-society","AntiSociety_V001"));
        seTeams.add(new Tuple("arkham society","ArkhamSociety_V001"));
        seTeams.add(new Tuple("bandits","Bandits_V001"));
        seTeams.add(new Tuple("brotherhood of mutants","BrotherhoodOfMutants_V001"));
        seTeams.add(new Tuple("cadmus","Cadmus_V001"));
        seTeams.add(new Tuple("elders","Elders_V001"));
        seTeams.add(new Tuple("essex corp","EssexCorp_V001"));
        seTeams.add(new Tuple("fisk enterprises","FiskEnterprises_V001"));
        seTeams.add(new Tuple("foot clan","FootClan_V001"));
        seTeams.add(new Tuple("hammer","Hammer_V001"));
        seTeams.add(new Tuple("heisenberg cartel","HeisenbergCartel_V001"));
        seTeams.add(new Tuple("hive","HIVE_V001"));
        seTeams.add(new Tuple("hydra","Hydra_V001"));
        seTeams.add(new Tuple("injustice club","InjusticeClub_V001"));
        seTeams.add(new Tuple("joker clan","JokerClan_V001"));
        seTeams.add(new Tuple("latveria","Latveria_V001"));
        seTeams.add(new Tuple("league of assassins","LeagueOfAssassins_V001"));
        seTeams.add(new Tuple("maestros contest", "MaestroContest_V001"));
        seTeams.add(new Tuple("rogues of central city","RoguesOfCentralCity_V001"));
        seTeams.add(new Tuple("secret society","SecretSociety_V001"));
        seTeams.add(new Tuple("sinestro corps","SinestroCorps_V001"));
        seTeams.add(new Tuple("sinister squad", "SinisterSquad_V001"));
        seTeams.add(new Tuple("soviet justice league","SovietJusticeLeague_V001"));
        seTeams.add(new Tuple("the light","TheLight_V001"));
        seTeams.add(new Tuple("tomorrow inc","TOMorrowInc_V001"));
        seTeams.add(new Tuple("toyman army","ToyManArmy_V001"));
        var index = getRandomIndex(seTeams.Count);
        var tuple:Tuple = (Tuple)seTeams[index];
        return new TeamString(mainTeam, (String)tuple.getFst(), mainDir+(String)tuple.getSnd());
    }

    public static function getSecBld(){
        if(secBld==null){
            secBld= new SectionBuilderShadowEmpire();
        }
        return secBld;
    }
}
 
