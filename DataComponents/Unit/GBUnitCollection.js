/*This is gameboard specific data that can be stored and loaded.  Global data 
that can be stored and loaded such as player data, world data and team data is 
stored outside of the gameboard.  This information is a discrete snapshot of the 
realtime data that contains game objects, attacks(which are dropped when 
saving), transform locations (floats are converted to ints for hash locations 
and for storing.) etc.*/
public class GBUnitCollection{
	private var listHead:GBUnitNode;
	//maybe a tail
	private var gbUnits:Hashtable;
    public function GBUnitCollection(){
    	gbUnits= new Hashtable();
    }

    /*remove from list first (as that is being iterated over), then call here to
     remove from hash*/
    public function removeUnit(hashid:int){
        if(gbUnits.ContainsKey(hashid)){
    	    gbUnits.Remove(hashid);
    	    //size--;
        }
        else{
        	Debug.Log("Attempting to remove untracked unit from GBGroup");
        }
    }

    /*Unit is in list, as it is being iterated over use this to check if the 
    unit has removed from hashtable*/
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

    public function addUnit(unit:GBUnit){
        var tempNode = new GBUnitNode(unit);
        tempNode.insertNext(listHead);
        listHead.insertLast(tempNode);
        listHead=tempNode;
        //add to hash table with some key value
    }
}
