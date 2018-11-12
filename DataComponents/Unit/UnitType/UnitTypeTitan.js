public class UnitTypeTitan extends UnitType{
    private static var utt:UnitTypeTitan;

    public function UnitTypeTitan(){
        //basehealth=240,basemana=240,baseAttrange 20, pursuerange 20, isbld false
        super(240,240,20.0,20.0,false);
    }

    public function getUTT(){
        if(utt==null){
            utt= new UnitTypeTitan();
        }
        return utt;
    }

    //should only receive UMFCombat not UnitModelFactory
    public function getModelArr(umf: UMFCombat){
        return umf.getTitanModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, grid:GameGrid, untCnt:GBUnitCounter, tempObjs:Hashtable){
        var titanTemp=place.titanSpots[untCnt.titanCnt];
        gbUnit.yCoord=titanTemp[0]+place.yOffset;
        gbUnit.xCoord=titanTemp[1]+place.xOffset;
        safePlacement(gbUnit, grid);
        untCnt.titanCnt++;
    }
}