public class DataManagerPlayer{
    private var playerData: PlayerData;//player objects may be loaded in different world maps
    private static var dmp:DataManagerPlayer;//singleton value

	/* The name of the hero used to load the correct playerData object */
	public function loadAndSetPlayerData(heroName :String){
		if(File.Exists(Application.persistentDataPath + "/heroData/"+heroName+".dat")){
			var bf: BinaryFormatter = new BinaryFormatter();
			var file: FileStream = File.Open(Application.persistentDataPath + "/heroData/"+heroName+".dat", FileMode.Open);
			var data: PlayerData = bf.Deserialize(file);
			file.Close();
			playerData=data;
	    }
	    else{
	    	Debug.Log('Hero file does not exist for - '+heroName);
	    }
	}

    //overloaded function might not be used...
	public function setPlayerData(data:PlayerData){
		playerData=data;
		savePlayerData();;
	}

	public function savePlayerData(){
		var bf: BinaryFormatter = new BinaryFormatter();
		var file: FileStream ;
		if(!Directory.Exists(Application.persistentDataPath + "/heroData/")){
	        Directory.CreateDirectory(Application.persistentDataPath + "/heroData/");
	    }
		file = File.Create(Application.persistentDataPath + "/heroData/"+playerData.heroName+".dat");
		bf.Serialize(file, playerData);//writes serializable object to our file.
		file.Close();
	}

	public function getPlayerData(){
		return playerData;
	}

	public static function getDMP(){
		if(dmp==null){
			dmp=new DataManagerPlayer();
		}
		return dmp;
	}
}
