//maps and world data
public class DataManagerMap{
	private var worldList:WorldData;//stores list of names of all worlds
	private var curMapData: MapData;//world maps store global state information

	public function getCurWorldName(){
		return curMapData.wName;
	}

	public function SaveWorld(){
		var bf: BinaryFormatter = new BinaryFormatter();
		var file: FileStream ;
		file = File.Create(Application.persistentDataPath + "/worldInfo.dat");
		bf.Serialize(file, worldList);//writes serializable object to our file.
		file.Close();
	}

	/* Load worlds returns the world data object which has a list of worlds, these worlds are the key that unlocks
	the value in a hashtable which is the path to the mapData object that contains all the save data for that game/map.
	*/
	public function LoadWorlds(){
		if(File.Exists(Application.persistentDataPath + "/worldInfo.dat")){
			var bf: BinaryFormatter = new BinaryFormatter();
			var file: FileStream = File.Open(Application.persistentDataPath + "/worldInfo.dat", FileMode.Open);
			worldList= bf.Deserialize(file);
			file.Close();
			return worldList;
		}
		else{
			worldList= new WorldData();
			return worldList;
		}
	}

	/* The name of the world is used to load the correct mapdata object */
	public function setMapData(mapName :String, size: NUMBER_NATIONS, diff: DIFFICULTY){
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
	    	saveMapData(curMapData);
	    }
	}

	public function saveMapData(data: MapData){
		var bf: BinaryFormatter = new BinaryFormatter();
		var file: FileStream ;
		if(!Directory.Exists(Application.persistentDataPath + "/worldMapData/")){
	        Directory.CreateDirectory(Application.persistentDataPath + "/worldMapData/");
	    }
		file = File.Create(Application.persistentDataPath + "/worldMapData/"+data.wName+".dat");
		bf.Serialize(file, data);//writes serializable object to our file.
		file.Close();
	}

	public function getMapData(){
		if(curMapData==null){
			curMapData = new MapData();
			curMapData.makeNewMap();
		}
		return curMapData;
	}

	
}