/*Like all tiles temp object tiles are also static, however the locations on the
 grid will match a hashmap of hitpoints/other stats used to determine if the 
 object is destroyed and what it is replaced with. FUTURE WORK*/
public class TileTempObj extends Tile{
    private static var tto:TileTempObj;
	public function TileTempObj(){
		super("temp object", false, 1000);
	}

	public function build(go:GOStructureProps, pos:Vector3, rot:Vector3, point:Point){
		var oa=ObjectAdjuster.getOA();
		var modelObject :GameObject;
		go.loadStaticTemp(point.x,point.y, gB.tempObj, modelObject);//somehow needs access to gameboards static objects?
	}

	public static function getTile(){
		if(tto==null){
			tto = new TileTempObj();
		}
		return tto;
	}
}