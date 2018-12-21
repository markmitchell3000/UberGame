public class DataManagerGameboard{
    private var curGameBoard:GameBoard;//Stored in state named folders but the can expand as the area is explored
    private static var dmg:DataManagerGameboard;//singleton value

	/* The name state and the yloc and xloc is used to load a gameBoard */
	public function setGameBoard(stateName :String, yLoc:int, xLoc:int){
		if(File.Exists(Application.persistentDataPath+"/worldMapData/"+curMapData.wName+"/"+stateName+"/"+stateName+"_"+yLoc+"_"+xLoc+".dat")){
			var bf: BinaryFormatter = new BinaryFormatter();
			var file: FileStream = File.Open(Application.persistentDataPath+"/worldMapData/"+curMapData.wName+"/"+stateName+"/"+stateName+"_"+yLoc+"_"+xLoc+".dat", FileMode.Open);
			var data: GameBoard = bf.Deserialize(file);
			file.Close();
			curGameBoard=data;
	    }
	    else{
	    	curGameBoard=new GameBoard();
	    	curGameBoard.stateName=stateName;
	    	curGameBoard.yLoc=yLoc;
			curGameBoard.xLoc=xLoc;
			//add random 1 in 100 chance of creating more towns inside territories and then adjacent gameboards may be town gameboards too.
			var isYCentered:boolean=(yLoc>=-5)&&(yLoc<=5);
	        var isXCentered:boolean=(xLoc>=-5)&&(xLoc<=5);
	        if(isYCentered&&isXCentered){
	        	curGameBoard.createLayout(GB_TYPE.TOWN_GB);
	        }
	        else{
	        	curGameBoard.createLayout(GB_TYPE.OUTDOOR_GB);
	        }
	    	saveGameBoard(curGameBoard);
	    }
	}

	/*function checks for an adjacent gameboard so it can build matching walls*/
	public function examineAdjBoard(stateName :String, yLoc:int, xLoc:int){
		if(File.Exists(Application.persistentDataPath+"/worldMapData/"+curMapData.wName+"/"+stateName+"/"+stateName+"_"+yLoc+"_"+xLoc+".dat")){
			var bf: BinaryFormatter = new BinaryFormatter();
			var file: FileStream = File.Open(Application.persistentDataPath+"/worldMapData/"+curMapData.wName+"/"+stateName+"/"+stateName+"_"+yLoc+"_"+xLoc+".dat", FileMode.Open);
			var data: GameBoard = bf.Deserialize(file);
			file.Close();
			return data;
	    }
	    else{
	    	return null;
	    }
	}

	public function saveGameBoard(){
		var bf: BinaryFormatter = new BinaryFormatter();
		var file: FileStream ;
		md=DataManager.dmMap.getMapDate();//mapdata, maps contains states that coorelate to collections of stored gameboards
		if(!Directory.Exists(Application.persistentDataPath + "/worldMapData/"+md.wName+"/"+md.curState.stateName+"/")){
	        Directory.CreateDirectory(Application.persistentDataPath + "/worldMapData/"+md.wName+"/"+md.curState.stateName+"/");
	    }
		file = File.Create(Application.persistentDataPath + "/worldMapData/"+md.wName+"/"+md.curState.stateName+"/"+curGameBoard.getFileName()+".dat");
		bf.Serialize(file, data);//writes serializable object to our file.
		file.Close();
	}

	public static function getDMG(){
		if(dmg==null){
			dmg=new DataManagerGameboard();
		}
		return dmg;
	}

	public function getGameBoard(){
		if(curGameBoard==null){
			curGameBoard = new GameBoard();
			curGameBoard.createLayout(GB_TYPE.OUTDOOR_GB);
		}
		return curGameBoard;
	}
}
