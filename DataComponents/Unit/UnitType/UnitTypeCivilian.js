public class UnitTypeCivilian extends UnitType{
    private var baseHealth:int=20;
	private var baseMana:int=20;
	private var baseAttRange:float=5.0;//not sure what this should be.
	//bonus is typically 0
    public function setStats(lvl:int, bonus:float){
        super.setStats(lvl,bonus, baseHealth, baseMana, baseAttRange,5.0);
		super.isBuilding=false;
    }
    //should only receive UMFCrowd not UnitModelFactory
    public function getModelArr(umf: UMFCrowd){
        return umf.getUnitModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, grid:GameGrid, untCnt:GBUnitCounter, tempObjs:Hashtable){
        var civZomTemp=place.civOrZombSpots[untCnt.civOrZombCnt];
        gbUnit.yCoord=civZomTemp[0]+place.yOffset;
        gbUnit.xCoord=civZomTemp[1]+place.xOffset;
        safePlacement(gbUnit, grid);
        untCnt.civOrZombCnt++;
    }
}