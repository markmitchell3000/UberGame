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

    //should only receive UMFWar not UnitModelFactory
    public function getModelArr(umf: UMFWar){
        return umf.getBaseModels();
    }
    
    /*Used to set the coordinates in the GBUnits created*/
    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, untCnt:GBUnitCounter, gb:GameBoard){
        gbUnit.yCoord=place.baseSpots[0]+place.yOffset;
        gbUnit.xCoord=place.baseSpots[1]+place.xOffset;
        //width:int, height:int, pnt:Point, model:String, tempObjs:Hashtable
        placeTempObject(4,4,new Point(gbUnit.xCoord, gbUnit.yCoord), "base_holder", gb.getTempObjs());
        for(var kba=0;kba<4;kba++){
            for(var lba=0;lba<4;lba++){
                grid[gbUnit.yCoord+kba, gbUnit.xCoord+lba]=TileTempObj.getTile();
            }
        }
    }

    public function logKill(ukf:UnitKillFacts){
        ukf.baseKills++;
    }
}