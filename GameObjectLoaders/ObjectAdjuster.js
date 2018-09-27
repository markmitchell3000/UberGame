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

	public function adjCoord(val:int){
		return val*tc.getMultiplier() -tc.getOffset();
	}
}