public class TileDoor extends Tile{
	public function TileDoor(){
		super("door", true, 2);
	}

	public function build(go:GOStructureProps, pos:Vector3, rot:Vector3){
		var oa=ObjectAdjuster.getOA();
		var modelObject :GameObject;
		modelObject=Instantiate(go.mainFloor, pos, rot);
		oa.posObj(modelObject, i, j, 0);
	    modelObject=Instantiate(go.mainWall, pos, rot);
	    oa.posObj(modelObject, i, j, 60);
	    modelObject.transform.localScale += new Vector3(20f, 0, 20f);
	    modelObject=Instantiate(go.mainWall, pos, rot);
	    oa.posObj(modelObject, i, j, 70);
	    modelObject.transform.localScale += new Vector3(20f, 0, 20f);
	}
}