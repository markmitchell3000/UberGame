public class Mission{
    public var missionName:String;
    public var missionDescription:String;

    public var missionLvl:int;

    public var hasTimer:boolean=false;//timer constraint is activated if true

    public var destroyObj:boolean=false;//list of objects ids to destroy is filled if true
    public var objToDestroy= new ArrayList();/*If Objects are a goal this is filled with ids, 
    the hashtable for temp objs in game board are queried to see if they have been destoyed.*/

    public var destroyEnemies:boolean=false;/*if true group ids are used to query the gbgroups 
    hashtable and check if groups have size 0 or have been removed.*/
    public var enemyGroupNames=new ArrayList();
    public var groupsToDestroy=new ArrayList();//list of group ids used by gbgroups hashtable.

    public var protectObj:boolean=false;//if true a list of object ids are kept to protect.
    public var objToProtect=new ArrayList();//ids of objects to protect, if empty mission is faied.

    public var protectAllies:boolean=false;/*if true group ids are used to query the gbgroups 
    hashtable and check if groups have size 0 or have been removed.  Allies can be civilians as well.*/
    public var allyGroupNames=new ArrayList();
    public var groupsToProtect=new ArrayList();//list of group ids used by gbgroups hashtable.

    public var childCnt:int=0;/*there is a 50% chance this mission has no child mission, 30% chance 
    it has 1 child and a 20% chance it has 2 child missions. The number of children is used for when the 
    mission is completed, if children exist one or two new mission objects are created and added to players 
    mission list */

    public var failureOnExit:boolean=false;//if mission is loaded again once gameboard has been discarded, mission is either rebooted or discarded.
    
    public function createMission(){
        missionLvl=getProbableLevel();
        destroyEnemies=true;
        protectAllies=true;
        var randNum=Random.Range(0, 10);//0-4 are 0 children, 5-7 is 1 child, 8 or 9 is 2 children missions
        if((randNum>=5)&&(randNum<=7)){childCnt=1;}
        else if(randNum>7){childCnt=2;}
        enemyGroupNames.Add(getRandomGroupFolder(Global_Variables.pickTeam(true)));//adds one folder location of enemy team 
        enemyGroupNames.Add(getRandomGroupFolder(Global_Variables.pickTeam(true)));//adds one folder location of enemy team
        allyGroupNames.Add(getRandomGroupFolder(Global_Variables.pickTeam(false)));//adds one folder location of ally team
        allyGroupNames.Add(getRandomGroupFolder(Global_Variables.pickTeam(false)));//adds one folder location of ally team
    }

    //called to when player goes to the mission, mission gameboards are not saved, 
    //leaving mission once made results in failure
    public function createGameBoard(){
        failureOnExit=true;
    }

    private function getProbableLevel(){
        var level=DataManager.getDataManager().getPlayerData().powerLevel;
        var newLevel: int;
        var probability:float = Random.value;
        var tempBottom: int;
        if(probability<=.66f){
            tempBottom = (level-3)<0?0:(level-3);
            newLevel = Random.Range(tempBottom, level+3);
        }
        else if(probability<=.88f){
            tempBottom = (level-7)<0?0:(level-7);
            newLevel = Random.Range(tempBottom, level+7);
        }
        else{
            tempBottom = (level-12)<0?0:(level-12);
            newLevel = Random.Range(tempBottom, level+12);
        }
        return newLevel;
    }

    private function getRandomGroupFolder(team: TEAM_NAME){
        //eight functions each load all strings into array and pick a random index.
        var folderStr: String;
        switch(team){
                case TEAM_NAME.ETERNIAN_REPUBLIC:
                    folderStr = getERTeam();
                    break;
                case TEAM_NAME.INITIATIVE:
                    folderStr = getINTeam();
                    break;
                case TEAM_NAME.NIGHT_HORDE:
                    folderStr = getNHTeam();
                    break;
                case TEAM_NAME.PANTHEON:
                    folderStr = getPATeam();
                    break;
                case TEAM_NAME.SENTAI_CLAN:
                    folderStr = getSCTeam();
                    break;
                case TEAM_NAME.SHADOW_EMPIRE:
                    folderStr = getSETeam();
                    break;
                case TEAM_NAME.UNITED_LEAGUE:
                    folderStr = getULTeam();
                    break;
                case TEAM_NAME.UTROM_SITH_ALLIANCE:
                    folderStr = getUSTeam();
                    break;
                case TEAM_NAME.ZOMBIE_GROUP:
                    folderStr= getZomTeam();
                    break;
                case TEAM_NAME.CIVILIAN_GROUP:
                    folderStr= getCivTeam();
                    break;
        }
        return folderStr;
    }

    private function getERTeam(){
        var groupFolders= Team_StaticVariables.erTeams;
        var str =Team_StaticVariables.mainTeamPaths[2];
        return str+groupFolders[Random.Range(0, groupFolders.Count)];
    }

    private function getINTeam(){
        var groupFolders= Team_StaticVariables.inTeams;
        var str =Team_StaticVariables.mainTeamPaths[3];
        return str+groupFolders[Random.Range(0, groupFolders.Count)];
    }

    private function getNHTeam(){
        var groupFolders= Team_StaticVariables.nhTeams;
        var str =Team_StaticVariables.mainTeamPaths[4];
        return str+groupFolders[Random.Range(0, groupFolders.Count)];
    }

    private function getPATeam(){
        var groupFolders= Team_StaticVariables.paTeams;
        var str =Team_StaticVariables.mainTeamPaths[5];
        return str+groupFolders[Random.Range(0, groupFolders.Count)];
    }

    private function getSCTeam(){
        var groupFolders= Team_StaticVariables.scTeams;
        var str =Team_StaticVariables.mainTeamPaths[6];
        return str+groupFolders[Random.Range(0, groupFolders.Count)];
    }

    private function getSETeam(){
        var groupFolders= Team_StaticVariables.seTeams;
        var str =Team_StaticVariables.mainTeamPaths[7];
        return str+groupFolders[Random.Range(0, groupFolders.Count)];
    }

    private function getULTeam(){
        var groupFolders= Team_StaticVariables.ulTeams;
        var str =Team_StaticVariables.mainTeamPaths[8];
        return str+groupFolders[Random.Range(0, groupFolders.Count)];
    }

    private function getUSTeam(){
        var groupFolders= Team_StaticVariables.usTeams;
        var str =Team_StaticVariables.mainTeamPaths[9];
        return str+groupFolders[Random.Range(0, groupFolders.Count)];
    }

    private function getCivTeam(){
        return Team_StaticVariables.mainTeamPaths[0];
    }

    private function getZomTeam(){
        return Team_StaticVariables.mainTeamPaths[1];
    }

}






