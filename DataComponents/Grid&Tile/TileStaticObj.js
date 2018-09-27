public class TileStaticObj extends Tile{
	public function TileStaticObj(){
		super("static object", false, 2000);
	}

	public function build(go:GOStructureProps, pos:Vector3, rot:Vector3, point:Point){
		var oa=ObjectAdjuster.getOA();
		var modelObject :GameObject;
		go.loadStaticTemp(point.x,point.y, gB.staticObjs, modelObject);//somehow needs access to gameboards static objects?
	}
}