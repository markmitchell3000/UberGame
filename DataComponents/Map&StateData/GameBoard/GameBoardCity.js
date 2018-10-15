public class GameBoardCity extends GameBoardWorldMap{
    public function GameBoardCity(size:int){
    	super(size);
    	townLayout(0);//unsure where this number should orignate from, possibly random
    	super.InitMap();
    }

        //takes an int representing the town type: residential, gov_offices etc
    private function townLayout(tt:int){
        if(tt==0){townType=TOWN_TYPE.RESIDENTIAL;}
        else if(tt==1){townType=TOWN_TYPE.INDUSTRIAL;}
        else if(tt==2){townType=TOWN_TYPE.FARMMINE;}
        else if(tt==3){townType=TOWN_TYPE.MIL_BASE;}
        else if(tt==4){townType=TOWN_TYPE.GOV_OFFICES;}
        else{townType=TOWN_TYPE.BIG_CITY;}
        //build town
        var pt:ProceduralTown= new ProceduralTown(this);
        pt.buildTown();
        var pO:ProceduralObjects=new ProceduralObjects(this, pt.byRow);
        pO.placeTownObjects();
    }
}