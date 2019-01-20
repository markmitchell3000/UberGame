public class UnitTypeCivilian extends UnitType{
	private static var utc:UnitTypeCivilian;

    public function UnitTypeCivilain(rnk:int,rng:int){
        //basehealth=20,basemana=20, isbld false
        super(rnk,20,20,rng,false);
    }

    public static function getUT(){
        if(utb==null){
            utb= new UnitTypeCivilian();
        }
        return utb;
    }

    public function placeUnitByType(place:UnitPlacement, unitData:UnitData, untCnt:UnitCounter, gb:GameBoard){
        var civZomTemp=place.civOrZombSpots[untCnt.civOrZombCnt];
        unitData.curLoc.y=civZomTemp[0]+place.yOffset;
        unitData.curLoc.x=civZomTemp[1]+place.xOffset;
        safePlacement(unitData, gb,getGameGrid(),gb.getGBSize());
        untCnt.civOrZombCnt++;
    }

    public function logKill(ukf:UnitKillFacts){
        ukf.civilianKills++;
    }

}