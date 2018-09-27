//might extend hash manager
public class HMUnitLocation{
    private var onTile: Hashtable;
    private var unitLoc: Hashtable;

    public class HMUnitLocation(){
    	onTile=new Hashtable();
    	unitLoc=new Hashtable();
    }

    //removes old locations and sets new locations
    public function addLocation(newSqrs:Point[], oldSqrs:Point[], hashid:String){
    	if(unitLoc.ContainsKey(hashid)){
    		removeOld(oldSqrs, hashid);
    	}

    }

    private function addNew(newSqrs:Point[],hashid:String){
        unitLoc[hashid]=newSqrs;
        for(var i=0;i<4;i++){
            onTile[newSqrs[i].x+","+newSqrs[i].y]=addNewHelper(newSqrs[i],hashid);
        }
    }

    private function addNewHelper(pnt:Point, hashid:String){
    	var tempArr:ArrayList=(ArrayList)onTile[pnt.x+","+pnt.y];
    	tempArr.Add(hashid);
    	return tempArr;
    }

    private function removeOld(oldSqrs:Point[],hashid:String){
        unitLoc.Remove(hashid);
        for(var i=0;i<4;i++){
            onTile[oldSqrs[i].x+","+oldSqrs[i].y]=removeOldHelper(oldSqrs[i],hashid);
        }
    }

    private function removeOldHelper(pnt:Point, hashid:String){
    	var tempArr:ArrayList=(ArrayList)onTile[pnt.x+","+pnt.y];
    	for(var i=(tempArr.length-1);i>=0;i--){
            if(tempArr[i]==hashid){
            	tempArr.RemoveAt(i);
            }
    	}
    	return tempArr;
    }

    //returns list or empty list of units at that spot
    public function checkSpot(pnt:Point){
        return (ArrayList)onTile[pnt.x+","+pnt.y];
    }

}