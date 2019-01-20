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

    public function placeUnitByType(place:UnitPlacement, unitData:UnitData, untCnt:UnitCounter, gb:GameBoard){
        var wrkTemp=place.workerSpots[untCnt.workerCnt];
        unitData.curLoc.y=wrkTemp[0]+place.yOffset;
        unitData.curLoc.x=wrkTemp[1]+place.xOffset;
        safePlacement(unitData, gb.getGameGrid(),gb.getGBSize());
        untCnt.workerCnt++;
    }

    public function logKill(ukf:UnitKillFacts){
        ukf.workerKills++;
    }
}