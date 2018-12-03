public class UnitTypeBonus extends UnitType{
    private static var utb:UnitTypeBonus;

    public function UnitTypeBonus(){
        //basehealth=500,basemana=500,baseAttrange 20
        super(500,500,20.0,0.0,true);
    }

    public function getUT(){
        if(utb==null){
            utb= new UnitTypeBonus();
        }
        return utb;
    }

    //should only receive UMFWar not UnitModelFactory
    public function getModelArr(umf: UMFWar){
        return umf.getBonusModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, grid:GameGrid, untCnt:GBUnitCounter, tempObjs:Hashtable){
        var bnsTemp=place.bonusSpots[unitCnt.bonusCnt];
        gbUnit.yCoord=bnsTemp[0]+place.yOffset;
        gbUnit.xCoord=bnsTemp[1]+place.xOffset;
        unitCnt.bonusCnt++;
        //width:int, height:int, pnt:Point, model:String, tempObjs:Hashtable
        placeTempObject(1,1,new Point(gbUnit.xCoord, gbUnit.yCoord), "bonus_holder", tempObjs);
        grid[gbUnit.yCoord, gbUnit.xCoord]=TileTempObj.getTile();
    }
}