public class GBGroup{
    public var groupId:int;
    public var powerLevel:int =1;
    public var size:int=0;//when brought down to 0 group can be removed.
    public var groupName:String;
    public var mapType: String;
    public var modelStringFolder:String;//helps build reference for the GBUnits, Units track the number that the are 
    public var teamName:TeamString;//Holds name and folder string
    private var units:GBUnitCollection;//holds GBUnits, id is key and unit is value.

    public function GBGroup(lvl:int, gn:String, grdId:int,ts:TeamStructure, quadrant:int){
        powerLevel=lvl;//in all cases except arena and mission, teams level is used, otherwise a level relative to the player.
        units= new GBUnitCollection();
        groupName=gn;//group name is used to find the team name and in turn the models
        groupId=grdId;
        generateUnits(ts, quadrant;
    }
    
    //call this after team is set 
    public function setStringFolder(folderName: String){
        modelStringFolder=teamName.getFolder(folderName);
    }

    //only main teams should be selected for single lane and triple lane
    private function generateUnits(teamStruct: TeamStructure, quadrant: int){
        var cntList = teamStruct.getArrCopy();
        var mapType = teamStruct.getTSType();
        var idCnt:int=0;
        var up:UnitPlacement = teamStruct.getUnitPlacement(quadrant);
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
                tempUnit.unitType.placeUnitByType(up,tempUnit,grid,);//needs game grid, GBUNitCOunter and tempOObjs hashtable
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

    public function loadUnits(){
        units.getListHead();
    }
}

