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

    //should only receive UMFCombat not UnitModelFactory
    public function getModelArr(umf: UMFWar){
        return umf.getTowerModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, untCnt:GBUnitCounter, gb:GameBoard){
        var towerTemp=place.towerSpots[unitCnt.towerCnt];
        gbUnit.yCoord=towerTemp[0]+place.yOffset;
        gbUnit.xCoord=towerTemp[1]+place.xOffset;
        unitCnt.towerCnt++;
        //width:int, height:int, pnt:Point, model:String, tempObjs:Hashtable
        placeTempObject(2,2,new Point(gbUnit.xCoord, gbUnit.yCoord), "tower_holder", gb.getTempObjs());
        for(var kto=0;kto<2;kto++){
            for(var lto=0;lto<2;lto++){
                grid[gbUnit.yCoord+kto, gbUnit.xCoord+lto]=TileTempObj.getTile();
            }
        }
    }

    public function logKill(ukf:UnitKillFacts){
        ukf.towerKills++;
    }

}