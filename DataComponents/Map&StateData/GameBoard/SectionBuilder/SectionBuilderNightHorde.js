public class SectionBuilderNightHorde extends SectionBuilder{

    private var mainTeam:String = "night horde";
    private var mainDir:String = "NightHordeTeams/";
    private static var secBld:SectionBuilderNightHorde;

    public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int, gb: GameBoard){
        var nh:GBGroup;
        if(ts.getIsWar){
            nh= new GBGroup(lvl, getNightHordeMainTeam(), groupID,ts, quadrant, gb);
        }
        else{
            nh= new GBGroup(lvl, getNightHordeSubteam(), groupID,ts,quadrant, gb);
        }
        
        return nh;//GBGroups are added to a collection
    }

    /*Currently this grabs a single path and name for the core team, however 
    multiple versions could exists for one or more of the nations*/
    private function getNightHordeMainTeam(){
        return new TeamString(mainTeam, mainTeam, mainDir+"AAA_Main_V001");
    }

    /*randomly selects a team name from a list of Night Horde teams, these are 
    mostly used for grabbing the models for that team, and naming the group.*/
    private function getNightHordeSubteam(){
        var nhTeams = new ArrayList();
        nhTeams.add(new Tuple(mainTeam,"AAA_Main_V001"));
        nhTeams.add(new Tuple("anti-asgard alliance","AntiAsgardAlliance_V001"));
        nhTeams.add(new Tuple("arrancar","Arrancar_V001")); 
        nhTeams.add(new Tuple("black lanterns","BlackLanterns_V001"));
        nhTeams.add(new Tuple("black magic","BlackMagic_V001"));
        nhTeams.add(new Tuple("blackwatch","Blackwatch_V001"));
        nhTeams.add(new Tuple("children of dormammu","ChildrenOfDormammu_V001"));
        nhTeams.add(new Tuple("cobra","COBRA_V001"));
        nhTeams.add(new Tuple("decepticons","Decepticons_V001"));
        nhTeams.add(new Tuple("galactic horde","GalactusHorde_V001"));
        nhTeams.add(new Tuple("heartless","Heartless_V001"))
        nhTeams.add(new Tuple("limbo","Limbo_V001"));
        nhTeams.add(new Tuple("nightmares","Nightmares_V001"));
        nhTeams.add(new Tuple("parallex infection","ParallexInfection_V001"));
        nhTeams.add(new Tuple("parasites","Parasites_V001"));
        nhTeams.add(new Tuple("red lantern corps","RedLanternCorps_V001")); 
        nhTeams.add(new Tuple("shadow x hunters","ShadowXHunters_V001"));
        nhTeams.add(new Tuple("symbiotes","Symbiotes_V001","TheGray_V001"));
        nhTeams.add(new Tuple("armored titans","TitansArmored_V001"));
        nhTeams.add(new Tuple("trigons army","TrigonsArmy_V001"));
        nhTeams.add(new Tuple("zedds forces","ZeddsForces_V001"));
        nhTeams.add(new Tuple("zerg","Zerg_V001"));
        var index = getRandomIndex(nhTeams.Count)
        var tuple:Tuple = (Tuple)nhTeams[index];
        return new TeamString(mainTeam, (String)tuple.getFst(), mainDir+(String)tuple.getSnd());
    }

    public static function getSecBld(){
        if(secBld==null){
            secBld= new SectionBuilderNightHorde();
        }
        return secBld;
    }
}
 
