public class UnitTypeWorker extends UnitType{
    private static var utw:UnitTypeWorker;

    public function UnitTypeTower(){
        //basehealth=30,basemana=30,baseAttrange 5, pursuerange 8, isbld false
        super(30,30,5.0,8.0,false);
    }

    public function getUTW(){
        if(utw==null){
            utw= new UnitTypeWorker();
        }
        return utw;
    }

    //should only receive UMFCrowd not UnitModelFactory
    public function getModelArr(umf: UMFCrowd){
        return umf.getUnitModels();
    }

    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, grid:GameGrid, untCnt:GBUnitCounter, tempObjs:Hashtable){
        var wrkTemp=place.workerSpots[untCnt.workerCnt];
        gbUnit.yCoord=wrkTemp[0]+place.yOffset;
        gbUnit.xCoord=wrkTemp[1]+place.xOffset;
        safePlacement(gbUnit, grid);
        untCnt.workerCnt++;
    }
}