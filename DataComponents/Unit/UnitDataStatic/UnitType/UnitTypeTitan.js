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

    public function placeUnitByType(place:UnitPlacement, unitData:UnitData, untCnt:UnitCounter, gb:GameBoard){
        var titanTemp=place.titanSpots[untCnt.titanCnt];
        unitData.curLoc.y=titanTemp[0]+place.yOffset;
        unitData.curLoc.x=titanTemp[1]+place.xOffset;
        safePlacement(unitData, gb.getGameGrid,gb.getGBSize());
        untCnt.titanCnt++;
    }

    public function logKill(ukf:UnitKillFacts){
        ukf.titanKills++;
    }
}