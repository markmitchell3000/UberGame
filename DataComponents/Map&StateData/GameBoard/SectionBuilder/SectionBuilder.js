public class SectionBuilder{

    private var teamBuilders: Hashtable;//Section builders for each team (civilian, zombies, horde etc)
    private static var secBld:SectionBuilder;

/*"EternianRepublicTeams/", "InitiativeTeams/", "NightHordeTeams/", 
"PantheonTeams/", "SentaiClanTeams/", "ShadowEmpireTeams/", 
"UnitedLeagueTeams/", "UtromSithAllianceTeams/"*/
    public function SectionBuilder(){
        teamBuilders= new Hashtable();
        teamBuilders["civilians"]           = SectionBuilderCivilians.getSecBld();
        teamBuilders["zombies"]             = SectionBuilderZombies.getSecBld();
        teamBuilders["eternian_republic"]   = SectionBuilderEternianRepublic.getSecBld();
        teamBuilders["initiative"]          = SectionBuilderInitiative.getSecBld();
        teamBuilders["night_horde"]         = SectionBuilderNightHorde.getSecBld();
        teamBuilders["pantheon"]            = SectionBuilderPantheon.getSecBld();
        teamBuilders["sentai_clan"]         = SectionBuilderSentaiClan.getSecBld();
        teamBuilders["shadow_empire"]       = SectionBuilderShadowEmpire.getSecBld();
        teamBuilders["united_league"]       = SectionBuilderUnitedLeague.getSecBld();
        teamBuilders["utrom_sith_alliance"] = SectionBuilderUtromSithAlliance.getSecBld();
        teamBuilders["workers"]             = SectionBuilderWorkers.getSecBld();
    }

    /*Takes a team Structure, a team and a quadrant and returns a GBGroup.  
    First it creates a group, populates it with GBUnits, then updates their 
    locations (places them) of these GBUnits*/
	public function generateAndPlace(ts:TeamStructure, team:String, quadrant:int, groupID:int){
            //Teams can will randomly select from there list of subteams if they have them
            //Future work may include missions preselecting subteams.
        return teamBuilders[team].generateAndPlace(ts, quadrant, groupID);
	}

	public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int){
		//abstract class
	}

	public static function getSecBld(){
        if(secBld==null){
        	secBld= new SectionBuilder();
        }
        return secBld;
	}
}
