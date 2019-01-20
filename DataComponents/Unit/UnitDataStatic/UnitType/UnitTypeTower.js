public class UnitTypeTower extends UnitType{
    private static var utt:UnitTypeTower;

    public function UnitTypeTower(rnk:int,rng:int){
        //basehealth=1500,basemana=1500,baseAttrange 20, pursuerange 0, isbld true
        super(rnk,1500,1500,rng,true);
        super.overrideNextState("Scan","Idle");
    }

    public static function getUT(){
        if(utt==null){
            utt= new UnitTypeTower();
        }
        return utt;
    }

    public function placeUnitByType(place:UnitPlacement, unitData:UnitData, untCnt:UnitCounter, gb:GameBoard){
        var towerTemp=place.towerSpots[unitCnt.towerCnt];
        unitData.curLoc.y=towerTemp[0]+place.yOffset;
        unitData.curLoc.x=towerTemp[1]+place.xOffset;
        unitCnt.towerCnt++;
        //width:int, height:int, pnt:Point, model:String, tempObjs:Hashtable
        placeTempObject(2,2,new Point(unitData.curLoc.x, unitData.curLoc.y), "tower_holder", gb.getTempObjs());
        for(var kto=0;kto<2;kto++){
            for(var lto=0;lto<2;lto++){
                grid[unitData.curLoc.y+kto, unitData.curLoc.x+lto]=TileTempObj.getTile();
            }
        }
    }

    public function logKill(ukf:UnitKillFacts){
        ukf.towerKills++;
    }

}