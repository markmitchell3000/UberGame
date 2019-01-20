public class SubteamGroup{
    public var groupId:int;
    public var powerLevel:int =1;
    public var isDestroyed:boolean;/*Group could have no units or no respawn 
    locations left, then group is defeated*/

    public var mapType: String;//maybe pulled from teamStructure
    public var modelStringFolder:String;/*helps build reference for the Units, 
    Units track the number that the are*/ 
    public var teamName:String;//Holds parent team name
    public var groupName:String;//subteam

    private var units:UnitNode;/*holds UnitData rather than units(which include 
    models), id is key and unit is value.*/
    private var idCnt:int;/* global because some groups spawn more units than 
    the genesis spawn.  In order to keep hashids unique this number must persist*/
    public var powerLevel:int;

    public function SubteamGroup(lvl:int, tStr:TeamString, grpId:int,ts:TeamStructure, quadrant:int, gb:GameBoard){
        powerLevel=lvl;//in all cases except arena and mission, teams level is used, otherwise a level relative to the player.
        units=new UnitNode();
        teamName=tStr.getTeam();
        groupName=tStr.getSubTeam();
        modelStringFolder=tStr.getFilePath();
        groupId=grpId;
        idCnt=0;//initialize count before units start being made
        generateUnits(ts, quadrant,gb);
    }
    
    //call this after team is set 
    public function setStringFolder(folderName: String){
        modelStringFolder=teamName.getFolder(folderName);
    }

    //only main teams should be selected for single lane and triple lane
    private function generateUnits(teamStruct: TeamStructure, quadrant: int, gb:GameBoard){
        var cntList = teamStruct.getArrCopy();
        var mapType = teamStruct.getTSType();
        var idCnt:int=0;
        var up:UnitPlacement = teamStruct.getUnitPlacement(quadrant);
        var untCnt:UnitTypeCounter = new UnitTypeCounter();
        var nameGame =new RandomNameGenerator();
        //iterates through unit type counts
        var types= new UnitType[11];
        //unit types need to be made, ordering may be altered later
        types[0]= UnitTypeBase.getUT();
        types[1]= UnitTypeTower.getUT();
        types[2]= UnitTypeBonus.getUT();
        types[3]= UnitTypeSoldier.getUT();
        types[4]= UnitTypeLt.getUT();
        types[5]= UnitTypeHt.getUT();
        types[6]= UnitTypeGuardian.getUT();
        types[7]= UnitTypeTitan.getUT();
        types[8]= UnitTypeCivilian.getUT();
        types[9]= UnitTypeZombie.getUT();
        types[10]= UnitTypeWorker.getUT();

        for(var pos=0;pos<11;pos++){
            var spotCnt=cntList[pos];
            for(var uCnt=0;uCnt<spotCnt;uCnt++){
                var unitName:String="";
                if(pos>2){
                    unitName= nameGame.createNewName();
                }
                else{
                    unitName=groupName+" Structure "+idCnt;
                }
                var utStr:String=UnitTypeHash.getUTString[((UnitType)types[pos]).getRank()]
                var atStr:String=ArchetypeHash.getRandomString();//returns an archetype string
                var tempUnit:UnitData=new UnitData(utStr,atStr,teamName,groupName,powerLevel,idCnt,unitName);
                ((UnitType)types[pos]).placeUnitByType(up,tempUnit,unCnt, gb);
                units.addUnit(tempUnit);
                idCnt++;
            }

        }

    }

    /*this will create all gameobjects which in turn pair unitdata and 
    gameobject to make a unit which is added to the unit collection.*/
    public function instantiateUnits(){
        var tempNode:UnitNode=units;
        var tempGroupModels=new TempGroupModels(modelStringFolder);
        /*for spawning this should persist inside of a spawner that adds members
        to the group.*/
        while(tempNode!=null){
            tempNode.getData().instantiateUnit(tempGroupModels);
            tempNode=(UnitNode)tempNode.next;
        }
    }

    public function updateUnits(time:float){
        var tempNode:UnitNode=units;
        while(tempNode!=null){
            if(!UnitCollection.getUC().unitIsDead(tempNode.getData().hashid)){
                tempNode.getData().updateUnit(float);
                tempNode=(UnitNode)tempNode.next;
            }
            else{
                tempNode.removeSelf();//node is removed from list but still references next
                tempNode=(UnitNode)tempNode.next;
            }
        }
    }
}

