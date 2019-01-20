public class GameBoard{
    /*create or loads SubteamGroup these manage unit data and is used to create 
    units (the pairing of unit data and unit models). The models move which 
    updates the estimated location of the unit data location which can be 
    stored.  Other data such as hitpoints is directly updated in the unit data 
    which can then be stored.*/
    public var groupListHead:SubteamGroupNode;//each group has lists for iterating and hashtable for lookups
    public var styles:MapStyleStrings;//collection of strings
    public var stateName:String;
	protected var gameGrid:GameGrid;
    /*each of the hashtables below take a string representing the location of 
    the tile on the map, this will return the GBObject, objects that are larger 
    may cover more tiles are either static or temp objects but these additional 
    tiles will not have a corresponding hash value.  For example only the bottom 
    left corner will reference a 8X8 building and the other spaces will have no 
    value.*/
	protected var staticObjs:Hashtable= new Hashtable();
    protected var tempObjs:Hashtable= new Hashtable();
    protected var gbSize:int;//Gameboards are square so this is the height and width
    protected var quadrantSize:int;
     
    /*There can be 1, 4, 9 or 16 quadrants*/ 
    public function GameBoard(numQuadrants:int){
        quadrantSize=numQuadrants;
    	gbSize=quadrantSize*16;//quadrants are 16x16 squares
    	gameGrid= new GameGrid(size);
    	initializeGround();
    	placeCorners();
    }

    //used when the groups are prepopulated and the gamegrid is being loaded.
    public function setGroupList(listHead:SubteamGroupNode){
        groupListHead=listHead;
    }

    public function getGameGrid(){
        return gameGrid;
    }

    public function getTempObjs(){
        return tempObjs;
    }

    public function getGBSize(){
        return gbSize;
    }

    protected function initializeGround(){
        for(var i:int=0;i<sizeXY;i++){
            for(var j:int=0;j<sizeXY;j++){
            	gameGrid.setSpot(new Point(i,j),TileGround.getTile());
            }
        }
    }

    protected function placeCorners(){
    	gameGrid.setSpot(new Point(0,0),TileWall.getTile());
    	gameGrid.setSpot(new Point(0,gbSize-1),TileWall.getTile());
    	gameGrid.setSpot(new Point(gbSize-1,0),TileWall.getTile());
    	gameGrid.setSpot(new Point(gbSize-1,gbSize-1),TileWall.getTile());
    }

    protected function frameGameBoard(){
        for(var i=1;i<gbSize-1;i++){
        	gameGrid.setSpot(new Point(0,i),TileWall.getTile());
        	gameGrid.setSpot(new Point(i,0),TileWall.getTile());
        	gameGrid.setSpot(new Point(gbSize-1,i),TileWall.getTile());
        	gameGrid.setSpot(new Point(i,gbSize-1),TileWall.getTile());
        }
    }

    /*For the initial placement of units onto a gameboard. 
    UnitNodes is the head list of Units (provided by GBCollections), these 
    are used to instantiate real Units*/
    protected function placeUnits(unitNodes:UnitNode, struct:TeamStructure, quadrant:int){
        var civOrZombTemp;
        var untCnt= new UnitTypeCounter();
        //Struct used to select type of placement
        var place:UnitPlacements=new UnitPlacements(quadrant);
        curNode=unitNodes;
        while(curNode!=null){
            var tmpType: UnitType=curNode.getData().unitType;
            tmpType.placeUnitByType(place, curNode.getData(), gameGrid, untCnt, tempObjs);
            //do stuff
            curNode=curNode.next;
        }
    }
    
    protected function instantiateUnits(){
        var tempNode:SubteamGroupNode=groupListHead;
        while(tempNode!=null){
            tempNode.getData().instantiateUnits();
            tempNode=(SubteamGroupNode)tempNode.next;
        }
    }

    /*For placing units according to there saved location*/
    protected function placeUnits(unitNodes:UnitNode){
        //todo
    }

    //abstract function extended by child classes.
    protected function generateQuadrantsUnits(){

    }

    public function getGroupListHead(){
        return groupListHead;
    }

    public function addGBGroup(group: SubteamGroup){
        var tempNode:SubteamGroupNode= new SubteamGroupNode(group);
        tempNode.insertNext(groupListHead);
        groupListHead.insertLast(tempNode);
        groupListHead=tempNode;
        
    }

    public function updateGroups(){
        var tempNode:SubteamGroupNode=groupListHead;
        while(tempNode!=null){
            tempNode.getData().updateUnits();
            tempNode=(SubteamGroupNode)tempNode.next;
        }
    }

}
