public class GOStructureProps{
	public var mainWall : GameObject;
	public var mainFloor : GameObject;
	public var outsideGround: GameObject;
	public var asphaltObj:GameObject;
	public var sidewalkObj:GameObject;
	public var playerObj : GameObject;
	private var blds8X8_A:Object[];
	private var blds8X8_B:Object[];
	private var cars2x4:Object[];
	private var statues1X1:Object[];
	private var plants1X1:Object[];
	private var rocks1X1:Object[];
	private var boxes1X1:Object[];
	private var equip1X1:Object[];

	private function setTilesObj(){
		var gB:GameBoard=dm.getGameBoard();
		var wallBlocks: Object[] = Resources.LoadAll("Model_Prefabs/Level_Models/"+gB.lMFolders[1]+"/"+gB.stcFolders[3], GameObject);
		var floorTiles: Object[] = Resources.LoadAll("Model_Prefabs/Level_Models/"+gB.lMFolders[3]+"/"+gB.tileFolders[0], GameObject);
		var groundTiles: Object[] = Resources.LoadAll("Model_Prefabs/Level_Models/"+gB.lMFolders[3]+"/"+gB.tileFolders[1], GameObject);
		var asphaltTiles: Object[] = Resources.LoadAll("Model_Prefabs/Level_Models/"+gB.lMFolders[3]+"/"+gB.tileFolders[2], GameObject);
		var sidewalkTiles: Object[] = Resources.LoadAll("Model_Prefabs/Level_Models/"+gB.lMFolders[3]+"/"+gB.tileFolders[3], GameObject);
		if(!gB.isMade){
			gB.wallStyle=Random.Range(0,wallBlocks.length-1);
			gB.floorStyle=Random.Range(0,floorTiles.length-1);
			gB.groundStyle=Random.Range(0,groundTiles.length-1);
			gB.asphaltStyle=Random.Range(0,asphaltTiles.length-1);
			gB.sidewalkStyle=Random.Range(0,sidewalkTiles.length-1);
			gB.isMade=true;//should be only place where the isMade gets set
			dm.saveUpdate();
		}
		mainWall=wallBlocks[gB.wallStyle];
		mainFloor=floorTiles[gB.floorStyle];
		outsideGround=groundTiles[gB.groundStyle];
		asphaltObj=asphaltTiles[gB.asphaltStyle];
		sidewalkObj=sidewalkTiles[gB.sidewalkStyle];
		if(gB.gbType==GB_TYPE.TOWN_GB){
	    	cars2x4=Resources.LoadAll("Model_Prefabs/Level_Models/"+gB.lMFolders[1]+"/"+gB.stcFolders[2]+"/2X4", GameObject);
	    	makeBldObjLists(gB);
	    	statues1X1=Resources.LoadAll("Model_Prefabs/Level_Models/"+gB.lMFolders[2]+"/"+gB.tmpFolders[3]+"/1X1", GameObject);
		}
		plants1X1=Resources.LoadAll("Model_Prefabs/Level_Models/"+gB.lMFolders[1]+"/"+gB.stcFolders[1]+"/1X1", GameObject);
	    rocks1X1=Resources.LoadAll("Model_Prefabs/Level_Models/"+gB.lMFolders[1]+"/"+gB.stcFolders[0]+"/1X1", GameObject);
	    boxes1X1=Resources.LoadAll("Model_Prefabs/Level_Models/"+gB.lMFolders[2]+"/"+gB.tmpFolders[0]+"/1X1", GameObject);
	    equip1X1=Resources.LoadAll("Model_Prefabs/Level_Models/"+gB.lMFolders[2]+"/"+gB.tmpFolders[1]+"/1X1", GameObject);
	}

		private function getObjList(str: String){
		//check for building strings of which there are 12
	    for(var i=0;i<6;i++){
	    	if(str==GameBoard.bldFolders[i*2]){
	    		return blds8X8_A;
	    	}
	    	else if(str==GameBoard.bldFolders[(i*2)+1]){
	            return blds8X8_B;
	    	}
	    }
	    //"Rocks","Trees&Plants","Vehicles","WallBlocks/InsideWall"
	    if(str==GameBoard.stcFolders[0]){
	    	return rocks1X1;
	    }
	    else if(str==GameBoard.stcFolders[1]){
	    	return plants1X1;
	    }
	    else if(str==GameBoard.stcFolders[2]){
	    	return cars2x4;
	    }
	    else if(str==GameBoard.tmpFolders[0]){
	        return boxes1X1;
	    }
	    else if(str==GameBoard.tmpFolders[1]){
	        return equip1X1;
	    }
	    else if(str==GameBoard.tmpFolders[3]){
	        return statues1X1;
	    }
	    else{
	    	Debug.Log("Trying to load non-existant obj list");
	    	return null;
	    }
	}

	private function getObjUnderValue(t: TILE_TYPE):GameObject{
	    var underObj:GameObject=sidewalkObj;
	    switch(t){
	    	case TILE_TYPE.FLOOR:
	    	    underObj=mainFloor;
	    	    break;
	    	case TILE_TYPE.GROUND:
	    	    underObj=outsideGround;
	    	    break;
	    	case TILE_TYPE.SIDEWALK:
	    	    underObj=sidewalkObj;
	    	    break;
	    	case TILE_TYPE.ASPHALT:
	    	    underObj=asphaltObj;
	    	    break;
	    	default:
	    	    underObj=sidewalkObj;
	    	    break;
	    }
	    return underObj;
	}

	private function loadStaticTemp(i:int, j:int, objHash:Hashtable, modelObject: GameObject){        
		if(objHash.ContainsKey(i+","+j)){
	    	var tempObj=objHash[i+","+j];
	    	var objs: Object[] = getObjList(tempObj.modelString);//Resources.LoadAll(gB.staticObjs[i+","+j].modelString, GameObject);
	    	modelObject=Instantiate(objs[tempObj.getModelNumber(objs.length)], transform.position, transform.rotation);
	    	posObj(modelObject, (i+(tempObj.yHeight/2)), (j+(tempObj.xWidth/2)), 102);
	    	if(!tempObj.byRow){
	    		modelObject.transform.Rotate(0,90,0);}
	        var underObj:GameObject=getObjUnderValue(tempObj.under);
	        for(var objW=0;objW<tempObj.xWidth;objW++){
	        	for(var objH=0;objH<tempObj.yHeight;objH++){
	        		modelObject=Instantiate(underObj, transform.position, transform.rotation);
	        		posObj(modelObject, (i+objH), (j+objW), 0);
	        	}
	        }
	    }
    }
}