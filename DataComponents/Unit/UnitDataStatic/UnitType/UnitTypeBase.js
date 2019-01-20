public class UnitTypeBase extends UnitType{
    private static var utb:UnitTypeBase;

    public function UnitTypeBase(rnk:int,rng:int){

        //basehealth=3000,basemana=3000
        super(rnk,3000,3000,rng,true);
        super.overrideNextState("Scan","Idle");
    }

    public static function getUT(){
        if(utb==null){
            utb= new UnitTypeBase();
        }
        return utb;
    }
    
    /*Used to set the coordinates in the units created*/
    public function placeUnitByType(place:UnitPlacement, unitData:UnitData, untCnt:UnitCounter, gb:GameBoard){
        unitData.curLoc.y=place.baseSpots[0]+place.yOffset;
        unitData.curLoc.x=place.baseSpots[1]+place.xOffset;
        //width:int, height:int, pnt:Point, model:String, tempObjs:Hashtable
        placeTempObject(4,4,new Point(unitData.curLoc.x, unitData.curLoc.y), "base_holder", gb.getTempObjs());
        for(var kba=0;kba<4;kba++){
            for(var lba=0;lba<4;lba++){
                grid[unitData.curLoc.y+kba, unitData.curLoc.x+lba]=TileTempObj.getTile();
            }
        }
    }

    public function logKill(ukf:UnitKillFacts){
        ukf.baseKills++;
    }
}