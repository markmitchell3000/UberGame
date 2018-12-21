public class SectionBuilderSentaiClan extends SectionBuilder{

    private var mainTeam:String = "sentai clan";
    private var mainDir:String = "SentaiClanTeams/";
    private static var secBld:SectionBuilderSentaiClan;

    public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int, gb: GameBoard){
        var sc:GBGroup;
        if(ts.getIsWar){
            sc= new GBGroup(lvl, getSentaiClanMainTeam(), groupID,ts, quadrant, gb);
        }
        else{
            sc= new GBGroup(lvl, getSentaiClanSubteam(), groupID,ts,quadrant, gb);
        }
        
        return sc;//GBGroups are added to a collection
    }

    /*Currently this grabs a single path and name for the core team, however 
    multiple versions could exists for one or more of the nations*/
    private function getSentaiClanMainTeam(){
        return new TeamString(mainTeam, mainTeam, mainDir+"AAA_Main_V001");
    }

    /*randomly selects a team name from a list of Sentai Clans teams, these are 
    mostly used for grabbing the models for that team, and naming the group.*/
    private function getSentaiClanSubteam(){
        var scTeams = new ArrayList();
        scTeams.add(new Tuple(mainTeam,"AAA_Main_V001"));
        scTeams.add(new Tuple("feral feline faction","FeralFelineFaction_V001"));
        scTeams.add(new Tuple("hunter x hunter","HunterXHunter_V001"));
        scTeams.add(new Tuple("justice force","JusticeForce_V001"));
        scTeams.add(new Tuple("ninja turtles","NinjaTurtles_V001"));
        scTeams.add(new Tuple("overwatch","Overwatch_V001"));
        scTeams.add(new Tuple("mighty morphin power rangers","PowerRangersMM_V001"));
        scTeams.add(new Tuple("shinigami","Shinigami_V001"));
        scTeams.add(new Tuple("smash bros inc","SmashBrosInc_V001"));
        scTeams.add(new Tuple("space brigade","SpaceBrigade_V001"));
        scTeams.add(new Tuple("speedwagon", "SpeedWagon_V001"));
        scTeams.add(new Tuple("world warriors","WorldWarriors_V001"));
        var index = getRandomIndex(scTeams.Count)
        var tuple:Tuple = (Tuple)scTeams[index];
        return new TeamString(mainTeam, (String)tuple.getFst(), mainDir+(String)tuple.getSnd());
    }

    public static function getSecBld(){
        if(secBld==null){
            secBld= new SectionBuilderSentaiClan();
        }
        return secBld;
    }
}
 
