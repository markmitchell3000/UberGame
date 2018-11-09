public class UnitTypeBonus extends UnitType{
	private var baseHealth:int=500;
	private var baseMana:int=500;
	private var baseAttRange:float=20.0;//not sure what this should be.
	//bonus is typically 0
    public function setStats(lvl:int, bonus:float){
        super.setStats(lvl,bonus, baseHealth, baseMana, baseAttRange,0.0);
		super.isBuilding=true;
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