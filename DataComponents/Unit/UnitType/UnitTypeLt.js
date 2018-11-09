public class UnitTypeLt extends UnitType{
	private var baseHealth:int=60;
	private var baseMana:int=60;
	private var baseAttRange:float=8.0;//not sure what this should be.
	//bonus is typically 0
    public function setStats(lvl:int, bonus:float){
        super.setStats(lvl,bonus, baseHealth, baseMana, baseAttRange,15.0);
		super.isBuilding=false;
    }
    //should only receive UMFCombat not UnitModelFactory
    public function getModelArr(umf: UMFCombat){
        return umf.getLtOrHunterModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, grid:GameGrid, untCnt:GBUnitCounter, tempObjs:Hashtable){
        var ltTemp=place.ltSpots[untCnt.ltCnt];
        gbUnit.yCoord=ltTemp[0]+place.yOffset;
        gbUnit.xCoord=ltTemp[1]+place.xOffset;
        safePlacement(gbUnit, grid);
        untCnt.ltCnt++;
    }
}