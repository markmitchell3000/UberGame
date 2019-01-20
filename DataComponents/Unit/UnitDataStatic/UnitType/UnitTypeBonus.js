public class UnitTypeBonus extends UnitType{
    private static var utb:UnitTypeBonus;

    public function UnitTypeBonus(rnk:int,rng:int){
        //basehealth=500,basemana=500
        super(rnk,500,500,rng,true,true);
        super.overrideNextState("Scan","Idle");
    }

    public static function getUT(){
        if(utb==null){
            utb= new UnitTypeBonus();
        }
        return utb;
    }

    public function placeUnitByType(place:UnitPlacement, unitData:UnitData, untCnt:UnitCounter, gb: GameBoard){
        var bnsTemp=place.bonusSpots[unitCnt.bonusCnt];
        unitData.curLoc.y=bnsTemp[0]+place.yOffset;
        unitData.curLoc.x=bnsTemp[1]+place.xOffset;
        unitCnt.bonusCnt++;
        //width:int, height:int, pnt:Point, model:String, tempObjs:Hashtable
        placeTempObject(1,1,new Point(unitData.curLoc.x, unitData.curLoc.y), "bonus_holder", gb.getTempObjs());
        grid[unitData.curLoc.y, unitData.curLoc.x]=TileTempObj.getTile();
    }

    public function logKill(ukf:UnitKillFacts){
        ukf.bonusKills++;
    }

}