public class UnitTypeSoldier extends UnitType{
    private static var uts:UnitTypeSoldier;

    public function UnitTypeSoldier(){
        //basehealth=20,basemana=20,baseAttrange 5, pursuerange 5, isbld false
        super(40,40,5.0,10.0,false);
    }

    public static function getUT(){
        if(uts==null){
            uts= new UnitTypeSoldier();
        }
        return uts;
    }

    //should only receive UMFCombat not UnitModelFactory
    public function getModelArr(umf: UMFCombat){
        return umf.getSoldierModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, untCnt:GBUnitCounter, gb:GameBoard){
        var sldTemp=place.soldierSpots[untCnt.soldierCnt];
        gbUnit.yCoord=sldTemp[0]+place.yOffset;
        gbUnit.xCoord=sldTemp[1]+place.xOffset;
        safePlacement(gbUnit, gb.getGameGrid);
        untCnt.soldierCnt++;
    }

}