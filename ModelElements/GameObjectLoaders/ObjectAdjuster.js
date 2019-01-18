public class ObjectAdjuster{
	private static var oa:ObjectAdjuster;
    private var tc:TransformConstants;

    public function ObjectAdjuster(){
    	tc=TransformConstants.getTC();
    }

	public static function getOA(){
		if(oa==null){
			oa=new ObjectAdjuster();
		}
		return oa;
	}
	
	public function posObj(modelObject:GameObject, i:int, j:int, yVal:int){
		modelObject.transform.position.z += adjCoord(i);
		modelObject.transform.position.x += adjCoord(j);
		modelObject.transform.position.y = yVal;
	}

    /*given a x or y value for the gird return an x or y value that translates 
    to a transform location*/
	public function adjCoord(val:int){
		return val*tc.getMultiplier() -tc.getOffset();
	}

    /*Given a transform value translate to an integer that can be used relative 
    to the grid*/
	public function makeCoord(val:float){
        return parseInt(((val+.5)/tc.getMultiplier())+tc.getOffset());//the .5 is added since integer division rounds down
	}
}