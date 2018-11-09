public class UnitTypeHunter extends UnitType{
	private var baseHealth:int=60;
	private var baseMana:int=60;
	private var baseAttRange:float=8.0;//not sure what this should be.
	//bonus is typically 0
    public function setStats(lvl:int, bonus:float){
        super.setStats(lvl,bonus, baseHealth, baseMana, baseAttRange,55.0);
		super.isBuilding=false;
    }
    //should only receive UMFCombat not UnitModelFactory
    public function getModelArr(umf: UMFCombat){
        return umf.getLtOrHunterModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, grid:GameGrid, untCnt:GBUnitCounter, tempObjs:Hashtable){
        var hntTemp=place.hunterSpots[untCnt.hunterCnt];
        gbUnit.yCoord=hntTemp[0]+place.yOffset;
        gbUnit.xCoord=hntTemp[1]+place.xOffset;
        safePlacement(gbUnit, grid);
        untCnt.hunterCnt++;
    }
}