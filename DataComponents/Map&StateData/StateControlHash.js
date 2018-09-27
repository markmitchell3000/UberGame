public class StateControlHash{
	private var rulers:HashTable;
	private var ruledStates:HashTable;
	private var sch:StateControlHash;

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
    public function updateTable(state:StateData,team:TeamInner){
    	remove(state, rulers[state.stateName]);//must be done before add or ruler will be different
        add(state,team);
    }
    
	private function add(state:StateData,team:TeamInner){
        rulers[state.stateName]=team;
        var arr:ArrayList=ruledStates[team.name];
        arr.add(state);
        ruledStates[team.name]=arr;
	}
    
    //used to remove state from teams list, states ruler is overriden in add
	private function remove(state:StateData,team:TeamInner){
        var arr:ArrayList=ruledStates[team.name];
        for(var i=0;i<arr.Count;i++){
        	var tempState:StateData=arr[i]
        	if(tempState.stateName==state.stateName){
                arr.RemoveAt(i);
                return;
        	}
        }
	}

	public function retrieve(state:StateData){
        return rulers[state.stateName];
	}

	public function retrieve(team:TeamInner){
        var arr:ArrayList=ruledStates[team.name];
        return arr;
	}
}