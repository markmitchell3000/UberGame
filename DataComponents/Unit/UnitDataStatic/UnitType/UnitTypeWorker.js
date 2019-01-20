public class UnitTypeWorker extends UnitType{
    private static var utw:UnitTypeWorker;

    public function UnitTypeWorker(rnk:int,rng:int){
        //basehealth=30,basemana=30,baseAttrange 5, rng, isbld false
        super(rnk,30,30,rng,false);
    }

    public static function getUT(){
        if(utw==null){
            utw= new UnitTypeWorker();
        }
        return utw;
    }

    //should only receive UMFCrowd not UnitModelFactory
    public function getModelArr(umf: UMFCrowd){
        return umf.getUnitModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, untCnt:GBUnitCounter, gb:GameBoard){
        var wrkTemp=place.workerSpots[untCnt.workerCnt];
        gbUnit.yCoord=wrkTemp[0]+place.yOffset;
        gbUnit.xCoord=wrkTemp[1]+place.xOffset;
        safePlacement(gbUnit, gb.getGameGrid());
        untCnt.workerCnt++;
    }

    public function logKill(ukf:UnitKillFacts){
        ukf.workerKills++;
    }
}