public class TileGround extends Tile{
	private static var tg:TileGround;
	public function TileGround(){
		super("ground", true, 1);
	}

	public function build(go:GOStructureProps, pos:Vector3, rot:Vector3){
		var oa=ObjectAdjuster.getOA();
		var modelObject :GameObject;
		modelObject=Instantiate(go.outsideGround, pos,rot); //transform.position, transform.rotation);
		oa.posObj(modelObject, i, j, 0);
	}

	public static function getTile(){
		if(tg==null){
			tg = new TileGround();
		}
		return tg;
	}
}