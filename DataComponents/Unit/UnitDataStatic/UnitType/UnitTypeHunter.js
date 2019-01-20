public class UnitTypeHunter extends UnitType{
    private static var uth:UnitTypeHunter;

    public function UnitTypeBase(rnk:int,rng:int){
        //basehealth=60,basemana=60, isbld false
        super(rnk,60,60,rng,false,true);
        super.overrideNextState("Scan", "Pursue");//unit selects a target and will chase it across map, ignoring others unless scan selects a near target to attack
    }

    public static function getUT(){
        if(uth==null){
            uth= new UnitTypeHunter();
        }
        return uth;
    }
    
    public function placeUnitByType(place:UnitPlacement, unitData:UnitData, untCnt:UnitCounter, gb:GameBoard){
        var hntTemp=place.hunterSpots[untCnt.hunterCnt];
        unitData.curLoc.y=hntTemp[0]+place.yOffset;
        unitData.curLoc.x=hntTemp[1]+place.xOffset;
        safePlacement(unitData, gb.getGameGrid,gb.getGBSize());
        untCnt.hunterCnt++;
    }

    public function logKill(ukf:UnitKillFacts){
        ukf.hunterKills++;
    }

}