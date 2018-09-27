public class GameBoard{
    public var gbGroups=new ArrayList();
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

    public function getGG(){
        return gameGrid;
    }

    protected function initializeGround(){
        for(var i:int=0;i<sizeXY;i++){
            for(var j:int=0;j<sizeXY;j++){
            	gameGrid.setSpot(new Point(i,j),TILE_TYPE.GROUND);
            }
        }
    }

    protected function placeCorners(){
    	gameGrid.setSpot(new Point(0,0),TILE_TYPE.WALL);
    	gameGrid.setSpot(new Point(0,gbSize-1),TILE_TYPE.WALL);
    	gameGrid.setSpot(new Point(gbSize-1,0),TILE_TYPE.WALL);
    	gameGrid.setSpot(new Point(gbSize-1,gbSize-1),TILE_TYPE.WALL);
    }

    protected function frameGameBoard(){
        for(var i=1;i<gbSize-1;i++){
        	gameGrid.setSpot(new Point(0,i),TILE_TYPE.WALL);
        	gameGrid.setSpot(new Point(i,0),TILE_TYPE.WALL);
        	gameGrid.setSpot(new Point(gbSize-1,i),TILE_TYPE.WALL);
        	gameGrid.setSpot(new Point(i,gbSize-1),TILE_TYPE.WALL);
        }
    }

    //For the initial placement of units onto a gameboard. 
    private function placeUnits(groupUnits:ArrayList, struct:TEAM_STRUCTURE, quadrant:int){
        var towerCnt:int=0;
        var titanCnt:int=0;
        var guardianCnt:int=0;
        var hunterCnt:int=0;
        var ltCnt:int=0;
        var soldierCnt:int=0;
        var civOrZomCnt:int=0;
        var civOrZombTemp;
        var place:Placements=new Placements(struct, quadrant);
        for(var i=0;i<groupUnits.Count;i++){
            var type: UNIT_TYPE=groupUnits.Item[i].unitType;
            //UNIT_TYPE {BASE, TOWER, BONUS, SOLDIER, LIEUTENANT, HUNTER, GUARDIAN, TITAN, CIVILIAN, ZOMBIE, WORKER};
            switch(type){
                case UNIT_TYPE.BASE:
                    groupUnits.Item[i].yCoord=place.baseSpots[0]+place.yOffset;
                    groupUnits.Item[i].xCoord=place.baseSpots[1]+place.xOffset;
                    placeTempBuilding(4,4, groupUnits.Item[i].xCoord, groupUnits.Item[i].yCoord);
                    for(var kba=0;kba<4;kba++){
                        for(var lba=0;lba<4;lba++){
                            grid[groupUnits.Item[i].yCoord+kba, groupUnits.Item[i].xCoord+lba]=TILE_TYPE.TEMP_OBJ;
                        }
                    }
                    break;
                case UNIT_TYPE.TOWER:
                    var towerTemp=place.towerSpots[towerCnt];
                    groupUnits.Item[i].yCoord=towerTemp[0]+place.yOffset;
                    groupUnits.Item[i].xCoord=towerTemp[1]+place.xOffset;
                    towerCnt++;
                    placeTempBuilding(2,2,groupUnits.Item[i].xCoord, groupUnits.Item[i].yCoord);
                    for(var kto=0;kto<2;kto++){
                        for(var lto=0;lto<2;lto++){
                            grid[groupUnits.Item[i].yCoord+kto, groupUnits.Item[i].xCoord+lto]=TILE_TYPE.TEMP_OBJ;
                        }
                    }
                    break;
                case UNIT_TYPE.BONUS:
                    groupUnits.Item[i].yCoord=place.bonusSpots[0]+place.yOffset;
                    groupUnits.Item[i].xCoord=place.bonusSpots[1]+place.xOffset;
                    placeTempBuilding(1,1,groupUnits.Item[i].xCoord, groupUnits.Item[i].yCoord);
                    grid[groupUnits.Item[i].yCoord, groupUnits.Item[i].xCoord]=TILE_TYPE.TEMP_OBJ;
                    break;
                case UNIT_TYPE.TITAN:
                    var titanTemp=place.titanSpots[titanCnt];
                    groupUnits.Item[i].yCoord=titanTemp[0]+place.yOffset;
                    groupUnits.Item[i].xCoord=titanTemp[1]+place.xOffset;
                    safePlacement(groupUnits.Item[i]);
                    titanCnt++;
                    break;
                case UNIT_TYPE.GUARDIAN:
                    var guardianTemp=place.guardianSpots[guardianCnt];
                    groupUnits.Item[i].yCoord=guardianTemp[0]+place.yOffset;
                    groupUnits.Item[i].xCoord=guardianTemp[1]+place.xOffset;
                    safePlacement(groupUnits.Item[i]);
                    guardianCnt++;
                    break;
                case UNIT_TYPE.HUNTER:
                    var hunterTemp=place.hunterSpots[hunterCnt];
                    groupUnits.Item[i].yCoord=hunterTemp[0]+place.yOffset;
                    groupUnits.Item[i].xCoord=hunterTemp[1]+place.xOffset;
                    safePlacement(groupUnits.Item[i]);
                    hunterCnt++;
                    break;
                case UNIT_TYPE.LIEUTENANT:
                    var ltTemp=place.ltSpots[ltCnt];
                    groupUnits.Item[i].yCoord=ltTemp[0]+place.yOffset;
                    groupUnits.Item[i].xCoord=ltTemp[1]+place.xOffset;
                    safePlacement(groupUnits.Item[i]);
                    ltCnt++;
                    break;
                case UNIT_TYPE.SOLDIER:
                    var soldierTemp=place.soldierSpots[soldierCnt];
                    groupUnits.Item[i].yCoord=soldierTemp[0]+place.yOffset;
                    groupUnits.Item[i].xCoord=soldierTemp[1]+place.xOffset;
                    safePlacement(groupUnits.Item[i]);
                    soldierCnt++;
                    break;
                case UNIT_TYPE.CIVILIAN:
                    civOrZombTemp=place.civOrZombSpots[civOrZomCnt];
                    groupUnits.Item[i].yCoord=civOrZombTemp[0]+place.yOffset;
                    groupUnits.Item[i].xCoord=civOrZombTemp[1]+place.xOffset;
                    safePlacement(groupUnits.Item[i]);
                    civOrZomCnt++;
                    break;
                case UNIT_TYPE.ZOMBIE:
                    civOrZombTemp=place.civOrZombSpots[civOrZomCnt];
                    groupUnits.Item[i].yCoord=civOrZombTemp[0]+place.yOffset;
                    groupUnits.Item[i].xCoord=civOrZombTemp[1]+place.xOffset;
                    safePlacement(groupUnits.Item[i]);
                    civOrZomCnt++;
                    break;
            }
        }
    }

    private function safePlacement(gU: GBUnit){
        var cnt:int=0;
        while(checkCollision(new Point(gU.yCoord, gU.xCoord))){
            var randY:int=Random.Range(-5,5);
            var randX:int=Random.Range(-5,5);
            var validY:boolean=((gU.yCoord+randY)>0)&&((gU.yCoord+randY)<sizeXY-1);
            var validX:boolean=((gU.xCoord+randX)>0)&&((gU.xCoord+randX)<sizeXY-1);
            gU.yCoord= validY?(gU.yCoord+randY):gU.yCoord;
            gU.xCoord= validX?(gU.xCoord+randX):gU.xCoord;
            cnt++;
            if(cnt>100){
                Debug.Log("GBUnit should be removed");
            }
        }
    }

    //helper function for safeplacement
    private function checkCollision(pnt:Point){
        if(grid.getSpot(pnt)==TILE_TYPE.WALL){
            return true;
        }
        else if(grid.getSpot(pnt)==TILE_TYPE.STATIC_OBJ){
            return true;
        }
        else if(grid.getSpot(pnt)==TILE_TYPE.TEMP_OBJ){
            return true;
        }
        else{
            return false;
        }
    }
}