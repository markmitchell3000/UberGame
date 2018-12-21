//Stores the list of world (games seperate from player data) names 
public class DataManagerWorlds{
	private var worldList:WorldData;//stores list of names of all worlds
    private static var dmw:DataManagerWorlds;//singleton data manager
    
	public function SaveWorlds(){
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

    public static function getDMW(){
    	if(dmw==null){
    		dmw= new DataManagerWorlds();
    	}
    	return dmw;
    }
}