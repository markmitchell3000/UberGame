public class UnitTypeZombie extends UnitType{
    private static var utz:UnitTypeZombie;

    public function UnitTypeZombie(rnk:int,rng:int){
        //basehealth=40,basemana=40, rng, isbld false
        super(rnk,40,40,rng,false);
    }

    public static function getUT(){
        if(utz==null){
            utz= new UnitTypeZombie();
        }
        return utz;
    }

    public function placeUnitByType(place:UnitPlacement, unitData:UnitData, untCnt:UnitCounter, gb: GameBoard){
        var civZomTemp=place.civOrZombSpots[untCnt.civOrZombCnt];
        unitData.curLoc.y=civZomTemp[0]+place.yOffset;
        unitData.curLoc.x=civZomTemp[1]+place.xOffset;
        safePlacement(unitData, gb.getGameGrid(), gb.getGBSize());
        untCnt.civOrZombCnt++;
    }

    public function logKill(ukf:UnitKillFacts){
        ukf.zombieKills++;
    }
}