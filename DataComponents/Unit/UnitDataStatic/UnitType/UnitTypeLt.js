public class UnitTypeLt extends UnitType{
    private static var utl:UnitTypeLt;

    public function UnitTypeLt(rnk:int,rng:int){
        //basehealth=60,basemana=60,baseAttrange 8, pursueRange 3, isbld false
        super(rnk,60,60,rng,false,true);
    }

    public static function getUT(){
        if(utl==null){
            utl= new UnitTypeLt();
        }
        return utl;
    }
    //should only receive UMFCombat not UnitModelFactory
    public function getModelArr(umf: UMFCombat){
        return umf.getLtOrHunterModels();
    }

    public function placeUnitByType(place:UnitPlacement, unitData:UnitData, untCnt:UnitCounter, gb:GameBoard){
        var ltTemp=place.ltSpots[untCnt.ltCnt];
        unitData.curLoc.y=ltTemp[0]+place.yOffset;
        unitData.curLoc.x=ltTemp[1]+place.xOffset;
        safePlacement(unitData, gb.getGameGrid,gb.getGBSize());
        untCnt.ltCnt++;
    }

    public function logKill(ukf:UnitKillFacts){
        ukf.ltKills++;
    }

}