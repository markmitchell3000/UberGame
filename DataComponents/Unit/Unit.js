//Units are stored in a hashtable using the hashid of the unit data.
public class Unit{
    public var unitData:UnitData;
    public var unitModel:GameObject;
    private static var yPos:float=13;//where y should be in order to be above ground

    public function Unit(ud:UnitData,um:GameObject){
        unitData=ud;
        spawnModel(um);
    }

    public function destroyModel(){
    	Destroy(unitModel);//sets model to null, called when unit dies
    }

    public function spawnModel(um:GameObject){
    	var position=makeVector3(unitData.curLoc);
    	var lookat=makeVector3(unitData.altLoc);
    	var relativePos:Vector3 = lookat - position;
    	var rotation=Quaternion.LookRotation(relativePos,1);
    	unitModel=Instantiate(um,position,rotation);
    }

    private function makeVector3(pnt:Point){
    	var z:float =ObjectAdjuster.getOA().adjCoord(pnt.y);
    	var x:float =ObjectAdjuster.getOA().adjCoord(pnt.x);
    	return (new Vector3(x,yPos,z));
    }

}


