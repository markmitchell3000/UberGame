//loads and stores the list of players that should have saved data
public class DataManagerPlayerList{
    private var playerList:AllPlayersData;//save list of names of all players
    private static var dmpl:DataManagerPlayerList;//singleton value

	public function saveHeroList(){
		var bf: BinaryFormatter = new BinaryFormatter();
		var file: FileStream ;
		file = File.Create(Application.persistentDataPath + "/playerInfo.dat");
		bf.Serialize(file, playerList);//writes serializable object to our file.
		file.Close();
	}

	public function loadHeroesList(){
		if(File.Exists(Application.persistentDataPath + "/playerInfo.dat")){
			//Debug.Log("data path: "+ Application.persistentDataPath);
			var bf: BinaryFormatter = new BinaryFormatter();
			var file: FileStream = File.Open(Application.persistentDataPath + "/playerInfo.dat", FileMode.Open);
			playerList= bf.Deserialize(file);
			file.Close();
			return playerList;
		}
		else{
			playerList= new AllPlayersData();
			return playerList;
		}
	}

	public static function getDMPL(){
		if(dmpl==null){
			dmpl=new DataManagerPlayerList();
		}
		return dmpl;
	}
}