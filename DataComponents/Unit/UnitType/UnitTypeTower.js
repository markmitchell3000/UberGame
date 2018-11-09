public class UnitTypeTower extends UnitType{
	private var baseHealth:int=1500;
	private var baseMana:int=1500;
	private var baseAttRange:float=20.0;//not sure what this should be.
	//bonus is typically 0
    public function setStats(lvl:int, bonus:float){
        super.setStats(lvl,bonus, baseHealth, baseMana, baseAttRange,0.0);
		super.isBuilding=true;
    }
    //should only receive UMFCombat not UnitModelFactory
    public function getModelArr(umf: UMFWar){
        return umf.getTowerModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, grid:GameGrid, untCnt:GBUnitCounter, tempObjs:Hashtable){
        var towerTemp=place.towerSpots[unitCnt.towerCnt];
        gbUnit.yCoord=towerTemp[0]+place.yOffset;
        gbUnit.xCoord=towerTemp[1]+place.xOffset;
        unitCnt.towerCnt++;
        //width:int, height:int, pnt:Point, model:String, tempObjs:Hashtable
        placeTempObject(2,2,new Point(gbUnit.xCoord, gbUnit.yCoord), "tower_holder", tempObjs);
        for(var kto=0;kto<2;kto++){
            for(var lto=0;lto<2;lto++){
                grid[gbUnit.yCoord+kto, gbUnit.xCoord+lto]=TileTempObj.getTile();
            }
        }
    }
}