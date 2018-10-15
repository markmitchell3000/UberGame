public class TileTempObj extends Tile{
	public function TileTempObj(){
		super("temp object", false, 1000);
	}

	public function build(go:GOStructureProps, pos:Vector3, rot:Vector3, point:Point){
		var oa=ObjectAdjuster.getOA();
		var modelObject :GameObject;
		go.loadStaticTemp(point.x,point.y, gB.tempObj, modelObject);//somehow needs access to gameboards static objects?
	}
}