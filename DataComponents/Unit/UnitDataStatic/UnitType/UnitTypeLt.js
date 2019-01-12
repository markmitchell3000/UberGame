public class UnitTypeLt extends UnitType{
    private static var utl:UnitTypeLt;

    public function UnitTypeLt(){
        //basehealth=60,basemana=60,baseAttrange 8, pursueRange 15, isbld false
        super(60,60,8.0,15.0,false);
    }

    public static function getUT(){
        if(utl==null){
            utl= new UnitTypeLt();
        }
        return utl;
    }
    //should only receive UMFCombat not UnitModelFactory
    public function getModelArr(umf: UMFCombat){
        return umf.getLtOrHunterModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, untCnt:GBUnitCounter, gb:GameBoard){
        var ltTemp=place.ltSpots[untCnt.ltCnt];
        gbUnit.yCoord=ltTemp[0]+place.yOffset;
        gbUnit.xCoord=ltTemp[1]+place.xOffset;
        safePlacement(gbUnit, gb.getGameGrid);
        untCnt.ltCnt++;
    }

}