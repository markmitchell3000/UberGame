public class SubteamGroup{
    public var groupId:int;
    public var powerLevel:int =1;
    public var size:int=0;//when brought down to 0 group can be removed.
    public var groupName:String;//subteam
    public var mapType: String;//maybe pulled from teamStructure
    public var modelStringFolder:String;//helps build reference for the Units, Units track the number that the are 
    public var teamName:TeamString;//Holds parent team name
    private var units:UnitNode;//holds UnitData rather than units(which include models), id is key and unit is value.

    public function SubteamGroup(lvl:int, tStr:TeamString, grpId:int,ts:TeamStructure, quadrant:int, gb:GameBoard){
        powerLevel=lvl;//in all cases except arena and mission, teams level is used, otherwise a level relative to the player.
        units=new UnitNode();// new GBUnitCollection();
        teamName=tStr.getTeam();
        groupName=tStr.getSubTeam();
        modelStringFolder=tStr.getFilePath();
        groupId=grpId;
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
        var untCnt:GBUnitTypeCounter = new GBUnitTypeCounter();
        //iterates through unit type counts
        var types= new UnitType[11];
        //unit types need to be made
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
                var tempUnit:GBUnit=new GBUnit();
                tempUnit.unitType=types[pos];
                tempUnit.unitType.placeUnitByType(up,tempUnit,unCnt, gb);
                if(pos>2){
                    tempUnit.unitName= nameGame.createNewName();
                }
                else{
                    tempUnit.unitName=groupName+" Structure "+idCnt;
                }
                tempUnit.unitID=idCnt;
                //future plans may set archetype to something here.
                units.addUnit(tempUnit);
                idCnt++;
            }

        }

    }

    protected function addId(){
        var cnt:int=1;
        var cur:GBUnitNode=units.getListHead();
        while(cur!=null){
            GBUnitNode.getData().unitID=cnt;
            cnt++;
            cur=cur.next;
        }
    }

    /*this will create all gameobjects which in turn pair unitdata and 
    gameobject to make a unit which is added to the unit collection.*/
    public function instantiateUnits(){
        var tempNode:UnitNode=units;
        while(tempNode!=null){
            tempNode.getData().instantiateUnit();
            tempNode=(UnitNode)tempNode.next;
        }
    }

    public function updateUnits(){
        var tempNode:UnitNode=units;
        while(tempNode!=null){
            if(!UnitCollection.getUC().unitIsDead(tempNode.getData().hashid)){
                tempNode.getData().updateUnit();
                tempNode=(UnitNode)tempNode.next;
            }
            else{
                tempNode.removeSelf();//node is removed from list but still references next
                tempNode=(UnitNode)tempNode.next;
            }
        }
    }
}

