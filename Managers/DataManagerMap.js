//maps data
public class DataManagerMap{
	private var curMapData: MapData;//world maps store global state information
    private var dmm: DataManagerMap;//singleton value

	public static function getDMM(){
		if (dmm==null){
			dmm = new DataManagerMap();
		}
		return dmm;
	}

	/* The name of the world is used to load the correct mapdata object */
	public function setMapData(mapName :String, size: int, diff: int){
		if(File.Exists(Application.persistentDataPath + "/worldMapData/"+mapName+".dat")){
			var bf: BinaryFormatter = new BinaryFormatter();
			var file: FileStream = File.Open(Application.persistentDataPath + "/worldMapData/"+mapName+".dat", FileMode.Open);
			var data: MapData = bf.Deserialize(file);
			file.Close();
			curMapData=data;
			curMapData.setStartState(playerData.team);
	    }
	    else{
	    	curMapData=new MapData();
	    	curMapData.wName=mapName;
	    	curMapData.setTeamNumber(size);
			curMapData.difficulty=diff;
			curMapData.setStartState(playerData.team);
	    	saveMapData();
	    }
	}

	public function saveMapData(){
		if(curMapData!=null){
			var bf: BinaryFormatter = new BinaryFormatter();
			var file: FileStream ;
			if(!Directory.Exists(Application.persistentDataPath + "/worldMapData/")){
		        Directory.CreateDirectory(Application.persistentDataPath + "/worldMapData/");
		    }
			file = File.Create(Application.persistentDataPath + "/worldMapData/"+curMapData.wName+".dat");
			bf.Serialize(file, curMapData);//writes serializable object to our file.
			file.Close();
	    }
	}

	public function getMapData(){
		if(curMapData==null){
			curMapData = new MapData();
			curMapData.makeNewMap();
		}
		return curMapData;
	}

}
