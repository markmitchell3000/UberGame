/*Use in tantum with GBUnitCollection, this means that UnitGroup is the realtime 
parallel to GBGroup which is storage ready data.  UnitGroup therefore has the 
same group ids, while Units and GBunits have the same hashids*/
public class UnitCollection{
	private var listHead:UnitNode;
	//maybe a tail
	private var units:Hashtable;
    /*simplified unit data that is discrete and stored so gameboards can be 
    loaded and reloaded. Consider parent class, unitcollection might be iterated
    every gameloop while gbunits might be iterated every few loops since this is
    a precursor to saving the current game*/
    private var gbUnitCollection:GBUnitCollection;

    public function UnitCollection(){
    	units= new Hashtable();
    }

    /*remove from list first (as that is being iterated over), then call here to
     remove from hash.  Value is stored by unit.*/
    public function removeUnit(hashid:string){
        if(units.ContainsKey(hashid)){
    	    units.Remove(hashid);
            gbUnitCollection.removeUnit(hashid);
    	    //size--;
        }
        else{
        	Debug.Log("Attempting to remove untracked unit");
        }
    }

    /*Unit is in list, as it is being iterated over use this to check if the 
    unit has removed from hashtable, if so remove node by joining parent to 
    child in the list(handled by node)*/
    public function unitIsDead(hashid:String){
        if(units.ContainsKey(hashid)){
            return false;
        }
        else{
            return true;
        }
    }

    public function getListHead(){
    	return listHead;
    }

    public function addUnit(unit:Unit){
        var tempNode = new UnitNode(unit);
        tempNode.insertNext(listHead);
        listHead.insertLast(tempNode);
        listHead=tempNode;
        //add to hash table with some key value
    }
}