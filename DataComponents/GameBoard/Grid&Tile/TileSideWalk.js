public class TileSideWalk extends Tile{
	private static var tsw:TileSideWalk;
	public function TileSideWalk(){
		super("sidewalk", true, 1);
	}

	public function build(go:GOStructureProps, pos:Vector3, rot:Vector3){
		var oa=ObjectAdjuster.getOA();
		var modelObject :GameObject;
		modelObject=Instantiate(go.sidewalkObj, pos,rot); //transform.position, transform.rotation);
		oa.posObj(modelObject, i, j, 0);
	}

	public static function getTile(){
		if(tsw==null){
			tsw = new TileSideWalk();
		}
		return tsw;
	}
}