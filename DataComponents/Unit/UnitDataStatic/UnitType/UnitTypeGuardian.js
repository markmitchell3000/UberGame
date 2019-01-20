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

    public function logKill(ukf:UnitKillFacts){
        ukf.guardianKills++;
    }

}