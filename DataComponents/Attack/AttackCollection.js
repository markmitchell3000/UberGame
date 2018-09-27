//probably share parent with GBUnitcollection
public class AttackCollection{
	private var listHead:AttackNode;
	//maybe a tail
	private var attacks:Hashtable;
    public function AttackCollection(){
    	attacks= new Hashtable();
    }

    public function removeUnit(id:int){
        if(attacks.ContainsKey(id)){
    	    attacks.Remove(""+id);
    	    //size--;
        }
        else{
        	Debug.Log("Attempting to remove untracked attack");
        }
    }

    public function getListHead(){
    	return listHead;
    }
}