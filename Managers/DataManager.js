import System;
import System.Runtime.Serialization.Formatters.Binary;
import System.IO;

public class DataManager{

    public var dmMap: DataManagerMap;
    public var dmWorlds: DataManagerWorlds;//Only saved when new worlds are made, primarily used to store world name list
    public var dmPlayer:DataManagerPlayer;
    public var dmPlayerList:DataManagerPlayerList;//stores and loads a list of players that are saved. 
    public var dmGameBoard: DataManagerGameboard;
    public static var dm:DataManager;

	public function DataManager(){
		//DontDestroyOnLoad (transform.gameObject);
		dmPlayer = DataManagerPlayer.getDMP();
		dmPlayerList=DataManagerPlayerList.getDMPL();
		dmMap = DataManagerMap.getDMM();
		dmWorlds = DataManagerWorlds.getDMW();
		dmGameBoard = new DataManagerGameboard();
	}

	public static function getDataManager(){
		if (dm==null){
			dm = new DataManager();
		}
		return dm;
	}


	public function saveUpdate(){
		dmPlayer.savePlayerData();
		dmMap.saveMapData();
		dmGameBoard.saveGameBoard();
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




