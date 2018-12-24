public class UnitTypeCivilian extends UnitType{
	private static var utc:UnitTypeCivilian;

    public function UnitTypeCivilain(){
        //basehealth=20,basemana=20,baseAttrange 5, pursuerange 5, isbld false
        super(20,20,5.0,5.0,false);
    }

    public static function getUT(){
        if(utb==null){
            utb= new UnitTypeCivilian();
        }
        return utb;
    }

    //should only receive UMFCrowd not UnitModelFactory
    public function getModelArr(umf: UMFCrowd){
        return umf.getUnitModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, untCnt:GBUnitCounter, gb:GameBoard){
        var civZomTemp=place.civOrZombSpots[untCnt.civOrZombCnt];
        gbUnit.yCoord=civZomTemp[0]+place.yOffset;
        gbUnit.xCoord=civZomTemp[1]+place.xOffset;
        safePlacement(gbUnit, gb,getGameGrid());
        untCnt.civOrZombCnt++;
    }
}