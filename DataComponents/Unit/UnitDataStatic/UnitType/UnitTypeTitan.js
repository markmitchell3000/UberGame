public class UnitTypeTitan extends UnitType{
    private static var utt:UnitTypeTitan;

    public function UnitTypeTitan(rnk:int,rng:int){
        //basehealth=240,basemana=240,, isbld false
        super(rnk,240,240,rng,false);
        super.overrideNextState("Scan", "Idle");//unit may select to walk if unit is away from base
    }

    public static function getUT(){
        if(utt==null){
            utt= new UnitTypeTitan();
        }
        return utt;
    }

    //should only receive UMFCombat not UnitModelFactory
    public function getModelArr(umf: UMFCombat){
        return umf.getTitanModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, untCnt:GBUnitCounter, gb:GameBoard){
        var titanTemp=place.titanSpots[untCnt.titanCnt];
        gbUnit.yCoord=titanTemp[0]+place.yOffset;
        gbUnit.xCoord=titanTemp[1]+place.xOffset;
        safePlacement(gbUnit, gb.getGameGrid);
        untCnt.titanCnt++;
    }

    public function logKill(ukf:UnitKillFacts){
        ukf.titanKills++;
    }
}