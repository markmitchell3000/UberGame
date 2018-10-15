public class GBUnitCollection{
	private var listHead:GBUnitNode;
	//maybe a tail
	private var units:Hashtable;
    public function GBUnitCollection(){
    	units= new Hashtable();
    }

    //remove from list first (as that is being iterated over), then call here to remove from hash
    public function removeUnit(id:int){
        if(units.ContainsKey(id)){
    	    units.Remove(""+id);
    	    //size--;
        }
        else{
        	Debug.Log("Attempting to remove untracked unit from GBGroup");
        }
    }

    public function getListHead(){
    	return listHead;
    }

    public function addUnit(unit:GBUnit){
        var tempNode = new GBUnitNode(unit);
        tempNode.insertNext(listHead);
        listHead.insertLast(tempNode);
        listHead=tempNode;
        //add to hash table with some key value
    }
}