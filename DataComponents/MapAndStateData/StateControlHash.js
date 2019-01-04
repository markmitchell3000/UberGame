public class StateControlHash{
	private var rulers:HashTable;//key: statename, value: team names
	private var ruledStates:HashTable;//key: team name, arraylist of state names
	private static var sch:StateControlHash;

    public function StateControlHash(){
		rulers=new Hashtable();
		ruledStates=new Hashtable();
	}

	static public function getSCH(){
		if(sch==null){
			sch=new StateControlHash();
		}
		return sch;
	}
    
    //called by new ruler
    public function updateTable(stateName:String,teamName:String){
    	removeRecord(stateName, rulers[stateName]);//must be done before add or ruler will be different
        addRecord(stateName,teamName);
    }
    
	private function addRecord(stateName:String,teamName:String){
        rulers[stateName]=teamName;
        var arr:ArrayList=ruledStates[teamName];
        arr.add(stateName);
        ruledStates[teamName]=arr;
	}
    
    //used to remove state from teams list, states ruler is overriden in add
	private function removeRecord(stateName:String,teamName:String){
        var arr:ArrayList=(ArrayList)ruledStates[teamName];
        for(var i=0;i<arr.Count;i++){
        	var tempState:String=arr[i]
        	if(tempState==stateName){
                arr.RemoveAt(i);
                return;
        	}
        }
	}

	public function retrieve(stateName:String){
        return rulers[stateName];
	}

	public function retrieve(teamName:String){
        var arr:ArrayList=ruledStates[teamName];
        return arr;
	}
}