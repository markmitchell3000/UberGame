/*World map is mostly forest/desert etc but certian areas are city, these are 
built from the Town classes*/
public class GameBoardCity extends GameBoardWorldMap{
    public function GameBoardCity(size:int){
    	super(size);
    	townLayout(0);//unsure where this number should orignate from, possibly random
    	super.InitMap();
    }

        //takes an int representing the town type: residential, gov_offices etc
    private function townLayout(tt:int){
        var townType:Town;
        switch(tt){
            case 0:
                townType=new TownResidential();
                break;
            case 1:
                townType=new TownIndustrial();
                break;
            case 2:
                townType=new TownFarm();
                break;
            case 3:
                townType=new TownMine();
                break;
            case 4:
                townType=new TownMilitary();
                break;
            case 5:
                townType=new TownGovernment();
                break;
            case 6:
                townType=new TownBigCity();
                break;
            case 7:
                townType=new TownCommercial();
                break;
            default
                townType=new TownResidential();
                break;

        }
        //build town
        var pt:ProceduralTown= new ProceduralTown(this);
        pt.buildTown();
        var pO:ProceduralObjects=new ProceduralObjects(this, pt.byRow);
        pO.placeTownObjects();
    }
}