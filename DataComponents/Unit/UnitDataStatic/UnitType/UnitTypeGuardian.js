public class UnitTypeGuardian extends UnitType{
    private static var utg:UnitTypeGuardian;

    public function UnitTypeGuardian(){
        //basehealth=120,basemana=120,baseAttrange 10, pursueRange 30, isbld false
        super(120,120,10.0,30.0,false);
    }

    public static function getUT(){
        if(utg==null){
            utg= new UnitTypeGuardian();
        }
        return utg;
    }

    //should only receive UMFCombat not UnitModelFactory
    public function getModelArr(umf: UMFCombat){
        return umf.getGuardianModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, untCnt:GBUnitCounter, gb:GameBoard){
        var grdTemp=place.guardianSpots[untCnt.guardianCnt];
        gbUnit.yCoord=grdTemp[0]+place.yOffset;
        gbUnit.xCoord=grdTemp[1]+place.xOffset;
        safePlacement(gbUnit, gb.getGameGrid);
        untCnt.guardianCnt++;
    }
}