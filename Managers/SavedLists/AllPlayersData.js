//Simplify this
public class AllPlayersData{
	public var heroNames = new ArrayList();
	public var heroRefs: Hashtable = new Hashtable();
	private var dm: DataManager=DataManager.getDataManager();

	public function deleteItem(s:String){
		var temp: int;
		for(temp=heroNames.Length-1;temp>=0;temp--){
			if(heroNames[temp].equals(s)){
				heroNames.RemoveAt(temp);
				heroRefs.Remove(s);
				dm.SaveHeroList();
				return;
			}
		}
	}

	public function addItem(s:String, modelS:String, team: TEAM_NAME){
		if(!heroRefs.ContainsKey(s)){
			heroNames.Add(s);
		    heroRefs.Add(s, true);
		}
		dm.SaveHeroList();
		dm.setPlayerData(s, modelS, team);
	}
}