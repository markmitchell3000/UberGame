public class TileWall extends Tile{
	private static var tw:TileWall;
	public function TileWall(){
		super("wall", false, 2000);
	}

	public function build(go:GOStructureProps, pos:Vector3, rot:Vector3){
		var oa=ObjectAdjuster.getOA();
		var modelObject :GameObject;
		for(var k=0;k<7;k++){
			modelObject=Instantiate(go.mainWall, pos, rot);
			oa.posObj(modelObject, i, j, k*10);
			modelObject.transform.localScale +=new Vector3(20f, 0, 20f);
		}
	}

	public static function getTile(){
		if(tw==null){
			tw = new TileWall();
		}
		return tw;
	}
}