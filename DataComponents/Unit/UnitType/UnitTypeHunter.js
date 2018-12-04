public class UnitTypeHunter extends UnitType{
    private static var uth:UnitTypeHunter;

    public function UnitTypeBase(){
        //basehealth=60,basemana=60,baseAttrange 8, pursuerange 55, isbld false
        super(60,60,8.0,55.0,false);
    }

    public function getUT(){
        if(uth==null){
            uth= new UnitTypeHunter();
        }
        return uth;
    }

    //should only receive UMFCombat not UnitModelFactory
    public function getModelArr(umf: UMFCombat){
        return umf.getLtOrHunterModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, untCnt:GBUnitCounter, gb:GameBoard){
        var hntTemp=place.hunterSpots[untCnt.hunterCnt];
        gbUnit.yCoord=hntTemp[0]+place.yOffset;
        gbUnit.xCoord=hntTemp[1]+place.xOffset;
        safePlacement(gbUnit, gb.getGameGrid);
        untCnt.hunterCnt++;
    }
}