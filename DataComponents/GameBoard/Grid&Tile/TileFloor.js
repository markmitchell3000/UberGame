public class TileFloor{
	private static var tf:TileFloor;
	public function TileFloor(){
		super("floor", true, 1);
	}

	public function build(go:GOStructureProps, pos:Vector3, rot:Vector3){
		var oa=ObjectAdjuster.getOA();
		var modelObject :GameObject;
		modelObject=Instantiate(go.mainFloor, pos,rot);//transform.position, transform.rotation);
		oa.posObj(modelObject, i, j, 0);
	    modelObject=Instantiate(go.mainWall, pos,rot);//transform.position, transform.rotation);//builds roof
	    oa.posObj(modelObject, i, j, 70);
	    modelObject.transform.localScale +=new Vector3(20f, 0, 20f)
	}

	public static function getTile(){
		if(tf==null){
			tf = new TileFloor();
		}
		return tf;
	}
}