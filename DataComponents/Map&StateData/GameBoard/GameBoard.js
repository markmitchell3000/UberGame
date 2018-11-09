public class GameBoard{
    /*create or loads GBGroup that is used to create a UnitGroup. The UnitGroup 
    updates the GBGroup, periodically the GBGroup data is saved along with other
    GB data etc.*/
    public var gbGroupListHead:GBGroupNode;//each group has lists for iterating and hashtable for lookups
    public var styles:MapStyleStrings;
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
    protected var gbSize:int;
     
    public function GameBoard(size:int){
    	gbSize=size;
    	gameGrid= new GameGrid(size);
    	initializeGround();
    	placeCorners();
    }

    //used when the groups are prepopulated and the gamegrid is being loaded.
    public function setGroupList(listHead:GBGroupNode){
        gbGroupListHead=listHead;
    }

    public function getGG(){
        return gameGrid;
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
    gbUnitNodes is the head list of GBUnits (provided by GBCollections), these 
    are used to instantiate real Units*/
    protected function placeUnits(gbUnitNodes:GBUnitNode, struct:TeamStructure, quadrant:int){
        var civOrZombTemp;
        var gbUntCnt= new GBUnitTypeCounter();
        //Struct used to select type of placement
        var place:UnitPlacements=new UnitPlacements(quadrant);
        curNode=gbUnitNodes;
        while(curNode!=null){
            var tmpType: UnitType=curNode.getData().unitType;
            tmpType.placeUnitByType(place, curNode.getData(), gameGrid, gbUntCnt, tempObjs);
            //do stuff
            curNode=curNode.next;
        }
    }
}