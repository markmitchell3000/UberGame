public class GameBoardWorldMap extends GameBoard{

    protected var loc:Point;

    public function GameBoardWorldMap(size:int){
    	super(size);
    }

    public function getFileName(){
        var fn:String= stateName+"_"+loc.y+"_"+loc.x;
        return fn;
    }

    protected function initMap(){
    	setWalls();
    	generateQuadrantsUnits();
    }

    private function setWalls(){
        var northGB:GameBoardWorldMap=dm.examineAdjBoard(stateName, yLoc+1, xLoc);
        var southGB:GameBoardWorldMap=dm.examineAdjBoard(stateName, yLoc-1, xLoc);
        var eastGB:GameBoardWorldMap=dm.examineAdjBoard(stateName, yLoc, xLoc+1);
        var westGB:GameBoardWorldMap=dm.examineAdjBoard(stateName, yLoc, xLoc-1);
        var cutInN:int[]= new int[5];
        var cutInS:int[]= new int[5];
        var cutInE:int[]= new int[5];
        var cutInW:int[]= new int[5];
        for(var k=0;k<5;k++){
            cutInN[k]=Random.Range(1,248);
            cutInS[k]=Random.Range(1,248);
            cutInN[k]=Random.Range(1,248);
            cutInS[k]=Random.Range(1,248);
        }
        for(var i=1;i<sizeXY-1;i++){
        	if(northGB!=null){
                grid[0,i]=northGB.grid[sizeXY-1,i];
            }
            else{
                grid[0,i]=TileWall.getTile();//later this will be trees or rocks(static obj)
                for(var j=0;j<5;j++){
                    if((i>=(cutInN[j]-2))&&(i<=(cutInN[j]+2))){
                        grid[0,i]=TileGround.getTile();
                    }
                }
            }
            if(southGB!=null){
                grid[sizeXY-1,i]=southGB.grid[0,i];
            }
            else{
                grid[sizeXY-1,i]=TileWall.getTile();//later this will be trees or rocks
                for(var j=0;j<5;j++){
                    if((i>=(cutInS[j]-2))&&(i<=(cutInS[j]+2))){
                        grid[sizeXY-1,i]=TileGround.getTile();
                    }
                }
            }
            if(eastGB!=null){
                grid[i,sizeXY-1]=eastGB.grid[i,0];
            }
            else{
                grid[i,sizeXY-1]=TileWall.getTile();//later this will be trees or rocks
                for(var j=0;j<5;j++){
                    if((i>=(cutInE[j]-2))&&(i<=(cutInE[j]+2))){
                        grid[i,sizeXY-1]=TileGround.getTile();
                    }
                }
            }
            if(westGB!=null){
                grid[i,0]=westGB.grid[i,sizeXY-1];
            }
            else{
                grid[i,0]=TileWall.getTile();//later this will be trees or rocks
                for(var j=0;j<5;j++){
                    if((i>=(cutInW[j]-2))&&(i<=(cutInW[j]+2))){
                        grid[i,0]=TileGround.getTile();
                    }
                }
            }
        }
    }

    //Structures that can be destroyed
    private function placeTempBuilding(width:int, height:int, x:int,y:int){
        var gbo:GBObject=new GBObject();
        gbo.modelString="blank";
        gbo.xWidth=width;
        gbo.yHeight=height;
        gbo.destroyable=true;
        gbo.under=TileGround.getTile();
        gbo.byRow=true;
        gbo.xCoord=x;
        gbo.yCoord=y;
        tempObjs[y+","+x]=gbo;
    }

    private function generateQuadrantsUnits(){
        //chance of units in 16 quadrants
        /*
        var idNum:int=0;
        var lvl=dm.getPlayerData().powerLevel;//number is the playes level, used for relative challenges
        for(var i=0;i<quadrantSize;i++){
            var temp= Random.Range(0,10);// 50/50 for now
            if(temp<2){
                var civ= new SubteamGroupNode(false, lvl, "civilians");//SubteamGroup(lvl:int, tStr:TeamString, grpId:int,ts:TeamStructure, quadrant:int, gb:GameBoard)
                civ.teamName=TEAM_NAME.CIVILIAN_GROUP;
                civ.groupId=idNum;
                idNum++;
                civ.groupName="civilians";
                civ.setStringFolder(" ");
                placeUnits(civ.generateUnits(), TeamStructureCivilian, i);
                super.addGroup(civ);
            }
            else if(temp<4){
                var zom= new SubteamGroup(TeamStructureZombie, false, lvl);//SubteamGroup(lvl:int, tStr:TeamString, grpId:int,ts:TeamStructure, quadrant:int, gb:GameBoard)
                zom.teamName=TEAM_NAME.ZOMBIE_GROUP;
                zom.groupId=idNum;
                idNum++;
                zom.groupName="zombies";
                zom.setStringFolder(" ");
                placeUnits(zom.generateUnits(), TeamStructureZombie, i);
                super.addGroup(zom);
            }
        }*/
    }
}