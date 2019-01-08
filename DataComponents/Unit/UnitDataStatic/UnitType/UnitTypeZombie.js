public class UnitTypeZombie extends UnitType{
    private static var utz:UnitTypeZombie;

    public function UnitTypeZombie(){
        //basehealth=40,basemana=40,baseAttrange 5, pursuerange 10, isbld false
        super(40,40,5.0,10.0,false);
    }

    public static function getUT(){
        if(utz==null){
            utz= new UnitTypeZombie();
        }
        return utz;
    }

    //should only receive UMFCrowd not UnitModelFactory
    public function getModelArr(umf: UMFCrowd){
        return umf.getUnitModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, untCnt:GBUnitCounter, gb: GameBoard){
        var civZomTemp=place.civOrZombSpots[untCnt.civOrZombCnt];
        gbUnit.yCoord=civZomTemp[0]+place.yOffset;
        gbUnit.xCoord=civZomTemp[1]+place.xOffset;
        safePlacement(gbUnit, gb.getGameGrid());
        untCnt.civOrZombCnt++;
    }

    public function getStatePostScan(){
        return "Walk";
    }
}