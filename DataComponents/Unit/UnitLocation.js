import System.Collections.Generic;
//Static class that tracks location of all units 
public class UnitLocation{
    private var onTile: Hashtable;//what units are on the tile
    private var unitLocation: Hashtable;//units, attacks and objs.  Each must have static id and a transform
    private var unitSize:int=9;//Units touch 9 squares
    
    private static var unitLoc:UnitLocation;//singleton value

    public function UnitLocation(){
    	onTile=new Hashtable();
    	unitLocation=new Hashtable();
    }

    public static function getUnitLocHash(){
        if(unitLoc==null){
            unitLoc=new UnitLocation();
        }
        return unitLoc;
    }
     
    /*given an attack a list of unit collision hashids is returned. These 
    hashids are used to verify if the collision is with an enemy.*/
    public function getAttackCollisions(att:Attack){
        var pnts:Point[]=getPoints(att.attObject.transform);
        var ids: List.<String> =  new List.<String>();
        for(var pnt: Point in pnts){
            var tempIds = (String [])onTile[pnt.x+","+pnt.y];
            for(var id:String in tempIds){
                ids.Add(id);
            }
        }
        return ids;
    }

    /*Returns a list, or empty list if unit is gone, of points that the unit is touching.*/
    public function getUnitLoc(hashid:String){
        return (ArrayList)unitLocation[hashid];
    }

    /*returns list or empty list of units at that spot, can be used for get 
    collision or to verify that a particular location is empty/populated*/
    public function checkSpot(pnt:Point){
        return (ArrayList)onTile[pnt.x+","+pnt.y];//or List.<String>
    }

    private function getPoints(tf:Transform){
        var baseX:int = ObjectAdjuster.getOA().makeCoord(tf.x);
        var baseY:int = ObjectAdjuster.getOA().makeCoord(tf.y);
        var newSqrs=new Point[unitSize];
        //count all spots around unit as unit position
        newSqrs[0]=new Point(baseX,baseY);
        newSqrs[1]=new Point(baseX+1,baseY);
        newSqrs[2]=new Point(baseX,baseY+1);
        newSqrs[3]=new Point(baseX+1,baseY+1);
        newSqrs[4]=new Point(baseX-1,baseY);
        newSqrs[5]=new Point(baseX-1,baseY-1);
        newSqrs[6]=new Point(baseX,baseY-1);
        newSqrs[7]=new Point(baseX-1,baseY+1);
        newSqrs[8]=new Point(baseX+1,baseY-1);
        return newSqrs;
    }

    /*given a transform and hash id it can call addlocation by generating 4 new 
    points and checking 4 old points, old points can be an empty list.  The Unit 
    data is also updated based on the transform location*/
    private function updateLoc(unit:Unit){
        var tf:Transform=unit.unitModel.transform;
        var hashid:String=unit.unitData.hashid;
        var oldSqrs:Point[];
        //might a remove this from add location
        if(unitLocation.ContainsKey(hashid)){
            oldSqrs=(Point [])unitLocation[hashid];
        }
        var newSqrs=getPoints(tf);
        unit.unitData.curLoc=newSqrs[0];
        addlocation(newSqrs, oldSqrs, hashid);
    }

    //removes old locations and sets new locations
    private function addLocation(newSqrs:Point[], oldSqrs:Point[], hashid:String){
    	if(unitLocation.ContainsKey(hashid)){
    		removeOld(oldSqrs, hashid);
    	}
        addNew(newSqrs,hashid);
    }

    private function addNew(newSqrs:Point[],hashid:String){
        unitLocation[hashid]=newSqrs;
        for(var i=0;i<unitSize;i++){
            onTile[newSqrs[i].x+","+newSqrs[i].y]=addNewHelper(newSqrs[i],hashid);
        }
    }

    private function addNewHelper(pnt:Point, hashid:String){
    	var tempArr:ArrayList=(ArrayList)onTile[pnt.x+","+pnt.y];
    	tempArr.Add(hashid);
    	return tempArr;
    }

    private function removeOld(oldSqrs:Point[],hashid:String){
        unitLocation.Remove(hashid);
        for(var i=0;i<unitSize;i++){
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