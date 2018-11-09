public class UnitTypeBase extends UnitType{
	private var baseHealth:int=3000;
	private var baseMana:int=3000;
	private var baseAttRange:float=20.0;//not sure what this should be.
	//bonus is typically 0
    public function setStats(lvl:int, bonus:float){
        super.setStats(lvl,bonus, baseHealth, baseMana, baseAttRange,0.0);
		super.isBuilding=true;
    }
    //should only receive UMFWar not UnitModelFactory
    public function getModelArr(umf: UMFWar){
        return umf.getBaseModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, grid:GameGrid, untCnt:GBUnitCounter, tempObjs:Hashtable){
        gbUnit.yCoord=place.baseSpots[0]+place.yOffset;
        gbUnit.xCoord=place.baseSpots[1]+place.xOffset;
        //width:int, height:int, pnt:Point, model:String, tempObjs:Hashtable
        placeTempObject(4,4,new Point(gbUnit.xCoord, gbUnit.yCoord), "base_holder", tempObjs);
        for(var kba=0;kba<4;kba++){
            for(var lba=0;lba<4;lba++){
                grid[gbUnit.yCoord+kba, gbUnit.xCoord+lba]=TileTempObj.getTile();
            }
        }
    }
}