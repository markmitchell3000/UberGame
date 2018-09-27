import System;
import System.Runtime.Serialization.Formatters.Binary;
import System.IO;

public class DataManager{

    public var dmMap: DataManagerMap;
    public var dmPlayer:DataManagerPlayer;
    public var dmGameBoard: DataManagerGameboard;
    public static var dm:DataManager;

	public function DataManager(){
		//DontDestroyOnLoad (transform.gameObject);
		dmPlayer = new DataManagerPlayer();
		dmMap = new DataManagerMap();
		dmGameBoard = new DataManagerGameboard();
	}

	public static function getDataManager(){
		if (dm==null){
			dm = new DataManager();
		}
		return dm;
	}


	public function saveUpdate(){
		savePlayerData(playerData);
		saveMapData(curMapData);
		saveGameBoard(curGameBoard);
	}
}


/*
	public var mapNotSet:boolean=true;//
	private var randomStart:boolean=true;//random when visiting center of state, set when moving from one map to another.
	public function getRandomStart(){
		return randomStart;
	}

	public function setRandomStart(s: boolean){
		randomStart=s;
	}

*/




