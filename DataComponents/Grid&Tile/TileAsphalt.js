public class TileAsphalt extends Tile{
	public function TileAsphalt(){
		super("asphalt", true, 1);
	}

	public function build(go:GOStructureProps, pos:Vector3, rot:Vector3){
		var oa=ObjectAdjuster.getOA();
		var modelObject :GameObject;
		modelObject=Instantiate(go.asphaltObj, pos,rot); //transform.position, transform.rotation);
		oa.posObj(modelObject, i, j, 0);
	}
}