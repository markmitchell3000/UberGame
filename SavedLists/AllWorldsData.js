//Holds references to all worlds as a string list
public class AllWorldsData{
	public var worldNames = ArrayList();
	public var worldMaps: Hashtable= new Hashtable();
	private var dm:DataManager=DataManager.getDataManager();

	public function deleteItem(s:String){
		var temp: int;
		for(temp=worldNames.Length-1;temp>=0;temp--){
			if(worldNames[temp].equals(s)){
				worldNames.RemoveAt(temp);
				worldMaps.Remove(s);
				dm.SaveWorld();
				return;
			}
		}
	}

	public function addItem(s:String, size: NUMBER_NATIONS, diff: DIFFICULTY){
		if(!worldMaps.ContainsKey(s)){
		    worldNames.Add(s);
		    worldMaps.Add(s, true);
	    }
	    dm.SaveWorld();
		//dm.setMapData(s, size, diff);
	}
}