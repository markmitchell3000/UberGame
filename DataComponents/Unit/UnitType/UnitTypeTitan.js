public class UnitTypeTitan extends UnitType{
	private var baseHealth:int=240;
	private var baseMana:int=240;
	private var baseAttRange:float=20.0;//not sure what this should be.
	//bonus is typically 0
    public function setStats(lvl:int, bonus:float){
        super.setStats(lvl,bonus, baseHealth, baseMana, baseAttRange,20.0);
		super.isBuilding=false;
    }
    //should only receive UMFCombat not UnitModelFactory
    public function getModelArr(umf: UMFCombat){
        return umf.getTitanModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, grid:GameGrid, untCnt:GBUnitCounter, tempObjs:Hashtable){
        var titanTemp=place.titanSpots[untCnt.titanCnt];
        gbUnit.yCoord=titanTemp[0]+place.yOffset;
        gbUnit.xCoord=titanTemp[1]+place.xOffset;
        safePlacement(gbUnit, grid);
        untCnt.titanCnt++;
    }
}