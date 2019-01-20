public class UnitTypeSoldier extends UnitType{
    private static var uts:UnitTypeSoldier;

    public function UnitTypeSoldier(rnk:int,rng:int){
        //basehealth=20,basemana=20,baseAttrange 5, pursuerange 5, isbld false
        super(rnk,40,40,rng,false);
    }

    public static function getUT(){
        if(uts==null){
            uts= new UnitTypeSoldier();
        }
        return uts;
    }

    public function placeUnitByType(place:UnitPlacement, unitData:UnitData, untCnt:UnitCounter, gb:GameBoard){
        var sldTemp=place.soldierSpots[untCnt.soldierCnt];
        unitData.curLoc.y=sldTemp[0]+place.yOffset;
        unitData.curLoc.x=sldTemp[1]+place.xOffset;
        safePlacement(unitData, gb.getGameGrid,gb.getGBSize());
        untCnt.soldierCnt++;
    }

    public function logKill(ukf:UnitKillFacts){
        ukf.soldierKills++;
    }
}