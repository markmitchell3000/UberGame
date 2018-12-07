/*enum TEAM_NAME{ETERNIAN_REPUBLIC, INITIATIVE, NIGHT_HORDE, PANTHEON, SENTAI_CLAN, SHADOW_EMPIRE, 
	UNITED_LEAGUE, UTROM_SITH_ALLIANCE, CIVILIAN_GROUP, ZOMBIE_GROUP};*/
public class TeamString{
    private var team:String;
    private var subteam:String;
    private var filepath:String;

    public function TeamString(t:String, st: String, fp:String){
        team = t;
        subteam = st;
        filepath = fp;
    }

    public function getTeam(){
        return team;
    }

    public function getSubTeam(){
        return subteam;
    }

    public function getFilePath(){
        return filepath
    }
}    
/*


    protected var mainTeamPaths: String[]=[, , 
 "InitiativeTeams/", "NightHordeTeams/", 
"PantheonTeams/", "SentaiClanTeams/", "ShadowEmpireTeams/", 
"UnitedLeagueTeams/", "UtromSithAllianceTeams/"];

//extend class to seperate these

private var inTeams:String[]=["AAA_Main_V001","Avengers_V001","BlueTeam_V001",
"Defenders_V001","DepartmentK_V001","FantasticForce_V001",
"GalacticFederation_V001","GuardiansOfTheGalaxy_V001","IronLegion_V001",
"SHIELD_V001","SpiderMen_V001","SquadronSupreme_V001","Wakanda_V001",
"WeaponX_V001","Xforce_V001","Xmen_V001"];
private var nhTeams:String[]=["AAA_Main_V001","AntiAsgardAlliance_V001",
"Arrancar_V001", "BlackLanterns_V001","BlackMagic_V001","Blackwatch_V001",
"ChildrenOfDormammu_V001","COBRA_V001","Decepticons_V001",
"GalactusHorde_V001","Heartless_V001","Limbo_V001","Nightmares_V001",
"ParallexInfection_V001","Parasites_V001","RedLanternCorps_V001", 
"ShadowXHunters_V001","Symbiotes_V001","TheGray_V001", "TitansArmored_V001",
"TrigonsArmy_V001","ZeddsForces_V001", "Zerg_V001"];
private var paTeams:String[]=["AAA_Main_V001","Amazons_V001",
"Asgard_V001","Atlantis_V001","CelticGods_V001","CircesForces_V001",
"EasternGods_V001","GrecoRomanGods_V001","HinduGods_V001",
"HorsemanOfApocalypse_V001", "MesoAmericanGods_V001","NorseGods_V001",
"Outworld_V001","PantheonTech_V001", "TheKoopa_V001","ZadkielsHorde_V001"];
private var scTeams:String[]=["AAA_Main_V001","FeralFelineFaction_V001",
"HunterXHunter_V001","JusticeForce_V001","NinjaTurtles_V001","Overwatch_V001",
"PowerRangersMM_V001","Shinigami_V001","SmashBrosInc_V001","SpaceBrigade_V001", 
"SpeedWagon_V001","WorldWarriors_V001"];
private var seTeams:String[]=["AAA_Main_V001","AceChemical_V001","AIM_V001",
"AntiSociety_V001","ArkhamSociety_V001","Bandits_V001",
"BrotherhoodOfMutants_V001","Cadmus_V001","Elders_V001","EssexCorp_V001",
"FiskEnterprises_V001","FootClan_V001","Hammer_V001","HeisenbergCartel_V001",
"HIVE_V001","Hydra_V001", "InjusticeClub_V001","JokerClan_V001","Latveria_V001",
"LeagueOfAssassins_V001", "MaestroContest_V001","RoguesOfCentralCity_V001",
"SecretSociety_V001","SinestroCorps_V001", "SinisterSquad_V001",
"SovietJusticeLeague_V001","TheLight_V001","TOMorrowInc_V001",
"ToyManArmy_V001"];
private var ulTeams:String[]=["AAA_Main_V001","Autobots_V001","Batmen_V001",
"BlueLanterns_V001","BPRD_V001","Catwomen_V001","DoomPatrol_V001",
"GreenLanternCorps_V001","JusticeLeague_V001","JusticeLeagueDark_V001", 
"JusticeSociety_V001","LeagueOfFreedom_V001", "Outsiders_V001","RedTeam_V001",
"Titans_V001"];
private var usTeams:String[]=["AAA_Main_V001","Apokolips_V001","BlackOrder_V001",
"Borg_V001","Brainiac_V001","Brood_V001","BrotherhoodOfInhumans_V001",
"DoomsdayInfection_V001","Enclave_V001","Kree_V001", "Manhunters_V001",
"NewKryptonAuthority_V001", "Qward_V001","Sentinels_V001","Shadaloo_V001", 
"SithImperialists_V001", "Skrulls_V001","Skynet_V001","UltronInitiative_V001",
"Utrom_V001", "WilyIndustries_V001","XenoBots_V001","Xenomorph_V001"];
*/
