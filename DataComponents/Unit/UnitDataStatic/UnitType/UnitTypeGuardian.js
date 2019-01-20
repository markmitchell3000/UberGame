public class UnitTypeGuardian extends UnitType{
    private static var utg:UnitTypeGuardian;

    public function UnitTypeGuardian(rnk:int,rng:int){
        //basehealth=120,basemana=120, isbld false
        super(rnk,120,120,rng,false);
        super.overrideNextState("Scan", "Idle");//unit may select to walk if unit is away from base
    }

    public static function getUT(){
        if(utg==null){
            utg= new UnitTypeGuardian();
        }
        return utg;
    }

    public function placeUnitByType(place:UnitPlacement, unitData:UnitData, untCnt:UnitCounter, gb:GameBoard){
        var grdTemp=place.guardianSpots[untCnt.guardianCnt];
        unitData.curLoc.y=grdTemp[0]+place.yOffset;
        unitData.curLoc.x=grdTemp[1]+place.xOffset;
        safePlacement(unitData, gb.getGameGrid,gb.getGBSize());
        untCnt.guardianCnt++;
    }

    public function logKill(ukf:UnitKillFacts){
        ukf.guardianKills++;
    }

}