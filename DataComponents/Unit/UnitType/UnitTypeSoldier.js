public class UnitTypeSoldier extends UnitType{
	private var baseHealth:int=40;
	private var baseMana:int=40;
	private var baseAttRange:float=5.0;//not sure what this should be.
	//bonus is typically 0
    public function setStats(lvl:int, bonus:float){
        super.setStats(lvl,bonus, baseHealth, baseMana, baseAttRange,10.0);
		super.isBuilding=false;
    }
    //should only receive UMFCombat not UnitModelFactory
    public function getModelArr(umf: UMFCombat){
        return umf.getSoldierModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, grid:GameGrid, untCnt:GBUnitCounter, tempObjs:Hashtable){
        var sldTemp=place.soldierSpots[untCnt.soldierCnt];
        gbUnit.yCoord=sldTemp[0]+place.yOffset;
        gbUnit.xCoord=sldTemp[1]+place.xOffset;
        safePlacement(gbUnit, grid);
        untCnt.soldierCnt++;
    }
}