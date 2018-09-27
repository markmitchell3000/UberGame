public class DataManagerPlayer{
    private var playerList:AllPlayersData;//save list of names of all players
    private var playerData: PlayerData;//player objects may be loaded in different world maps

	public function SaveHeroList(){
		var bf: BinaryFormatter = new BinaryFormatter();
		var file: FileStream ;
		file = File.Create(Application.persistentDataPath + "/playerInfo.dat");
		bf.Serialize(file, playerList);//writes serializable object to our file.
		file.Close();
	}

	public function LoadHeroesList(){
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

	/* The name of the hero used to load the correct playerData object */
	public function setPlayerData(heroName :String, modelS:String, team: TEAM_NAME){
		if(File.Exists(Application.persistentDataPath + "/heroData/"+heroName+".dat")){
			var bf: BinaryFormatter = new BinaryFormatter();
			var file: FileStream = File.Open(Application.persistentDataPath + "/heroData/"+heroName+".dat", FileMode.Open);
			var data: PlayerData = bf.Deserialize(file);
			file.Close();
			playerData=data;
	    }
	    else{
	    	playerData=new PlayerData();
	    	playerData.heroName=heroName;
	    	playerData.setModelString(team, modelS);
	    	savePlayerData(playerData);
	    }
	}

	public function savePlayerData(data: PlayerData){
		var bf: BinaryFormatter = new BinaryFormatter();
		var file: FileStream ;
		if(!Directory.Exists(Application.persistentDataPath + "/heroData/")){
	        Directory.CreateDirectory(Application.persistentDataPath + "/heroData/");
	    }
		file = File.Create(Application.persistentDataPath + "/heroData/"+data.heroName+".dat");
		bf.Serialize(file, data);//writes serializable object to our file.
		file.Close();
	}

	public function getPlayerData(){
		return playerData;
	}
}
