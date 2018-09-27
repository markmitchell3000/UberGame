public class TileGround extends Tile{
	public function TileGround(){
		super("ground", true, 1);
	}

	public function build(go:GOStructureProps, pos:Vector3, rot:Vector3){
		var oa=ObjectAdjuster.getOA();
		var modelObject :GameObject;
		modelObject=Instantiate(go.outsideGround, pos,rot); //transform.position, transform.rotation);
		oa.posObj(modelObject, i, j, 0);
	}
}