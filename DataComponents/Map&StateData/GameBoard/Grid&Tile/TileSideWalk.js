public class TileSideWalk extends Tile{
	public function TileSideWalk(){
		super("sidewalk", true, 1);
	}

	public function build(go:GOStructureProps, pos:Vector3, rot:Vector3){
		var oa=ObjectAdjuster.getOA();
		var modelObject :GameObject;
		modelObject=Instantiate(go.sidewalkObj, pos,rot); //transform.position, transform.rotation);
		oa.posObj(modelObject, i, j, 0);
	}
}