public class GameBoardMission extends GameBoard{
    public function GameBoardMission(size:int){
    	super(size);
    	super.frameGameBoard();
    	missionLayout();
    }

   private function missionLayout(){
        frameGameBoard();
        //build mission GB
        var numBuilding:int = Random.Range(1, 6);//These buildings are located in 1 to 5 quadrants of the map.
        var val1:int=super.gbSize*.1;
        var val2:int=super.gbSize*.25;
        var val3:int=super.gbSize*.33;
        var val4:int=super.gbSize*.5;
        var val5:int=super.gbSize*.66;
        var val6:int=super.gbSize*.75;
        switch(numBuilding){
            case 1:
                fillPartition(val1,val1, val6, val6);
                break;
            case 2:
                fillPartition(val1,val1, val4-5, val6);
                fillPartition(val4,val1, val4-5, val6);
                break;
            case 3:
                fillPartition(val1,val1, val4-5, val4-5);
                fillPartition(val4,val1, val4-5, val4-5);
                fillPartition(val1,val4, val6, val4-5);
                break;
            case 4:
                fillPartition(val1,val1, val4-5, val4-5);
                fillPartition(val4,val1, val4-5, val4-5);
                fillPartition(val1,val4, val4-5, val4-5);
                fillPartition(val4,val4, val4-5, val4-5);
                break;
            case 5:
                fillPartition(val1,val1, val2, val4-5);
                fillPartition(val3,val1, val2, val4-5);
                fillPartition(val5,val1, val2, val4-5);
                fillPartition(val1,val4, val4-5, val4-5);
                fillPartition(val4,val4, val4-5, val4-5);
                break;
            default:
                fillPartition(val1,val1, val6, val6);
                break;
        }
        var pO:ProceduralObjects=new ProceduralObjects(this, true);
        pO.placeMissionObjects();
        generateQuadrantsUnits();
    }

    private function fillPartition(xVal:int, yVal:int, wth:int, hgt:int){
        var pro=new ProceduralStructure();
        pro.grid=grid;
        pro.constructBuilding(yVal,xVal, yVal+hgt, xVal+wth);
    }
}