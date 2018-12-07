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
 , , 
, , , 
, ];

//extend class to seperate these


private var paTeams:String[]=["AAA_Main_V001",];
private var scTeams:String[]=["AAA_Main_V001",
private var seTeams:String[]=["AAA_Main_V001",];
private var ulTeams:String[]=["AAA_Main_V001",];
private var usTeams:String[]=["AAA_Main_V001",];
*/
