import System.Collections.Generic;
//might extend hash manager
//Static class that tracks location of all units and objects
public class HMObjLocation{
    private var onTile: Hashtable;
    private var objLoc: Hashtable;//units, attacks and objs.  Each must have static id and a transform
    private static var hmol:HMObjLocation;

    public function HMObjLocation(){
    	onTile=new Hashtable();
    	objLoc=new Hashtable();
    }

    public static function getHMOL(){
        if(hmol==null){
            hmol=new HMObjLocation();
        }
        return hmol;
    }
    

     
    /*given a transform and hashid a list of collision hashids 
    is returned. This does not include the original hashid. These hashids are 
    used to verify if the collision is with an enemy, primarily for attacks 
    hitting units*/
    public function getCollisions(tf:Transform, hashId:String){
        updateLoc(tf, hashId);
        var pnts:Point[]=(Point [])objLoc[hashId];
        var ids: List.<String> =  new List.<String>();
        for(var pnt: Point in pnts){
            var tempIds = (String [])onTile[pnt.x+","+pnt.y];
            for(var id:String in tempIds){
                if(id!=hashId){
                    ids.Add(id);
                }
            }
        }
        return ids;
    }

    /*Returns a list, or empty list if unit is gone, of points that the unit is touching.*/
    public function getObjLoc(hashid:String){
        return (ArrayList)objLoc[hashid];
    }

    /*returns list or empty list of units at that spot, can be used for get 
    collision or to verify that a particular location is empty/populated*/
    public function checkSpot(pnt:Point){
        return (ArrayList)onTile[pnt.x+","+pnt.y];//or List.<String>
    }

    /*given a transform and hash id it can call addlocation 
    by generating 4 new points and checking 4 old points, 
    old points can be an empty list*/
    private function updateLoc(tf:Transform, hashId:String){
        var oldSqrs:Point[];
        //might a remove this from add location
        if(objLoc.ContainsKey(hashid)){
            oldSqrs=(Point [])objLoc[hashid];
        }
        var baseX:int = ObjectAdjuster.getOA().makeCoord(tf.x);
        var baseY:int = ObjectAdjuster.getOA().makeCoord(tf.y);
        var newSqrs:new Point[4];
        newSqrs[0]=new Point(baseX,baseY);
        newSqrs[1]=new Point(baseX+1,baseY);
        newSqrs[2]=new Point(baseX,baseY+1);
        newSqrs[3]=new Point(baseX+1,baseY+1);
        addlocation(newSqrs, oldSqrs, hashid);
    }

    //removes old locations and sets new locations
    private function addLocation(newSqrs:Point[], oldSqrs:Point[], hashid:String){
    	if(objLoc.ContainsKey(hashid)){
    		removeOld(oldSqrs, hashid);
    	}
        addNew(newSqrs,hashid);
    }

    private function addNew(newSqrs:Point[],hashid:String){
        objLoc[hashid]=newSqrs;
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
        objLoc.Remove(hashid);
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

}