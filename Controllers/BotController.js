public class BotController extends Controller{
	private var unit:Unit;//maybe a transform
    private var hasTurrent: boolean;//may not be needed
    private var turrent: GameObject;//null if not present
    private var target:GameObject;//this is where unit will walk to,escort, collect or attack if in range.
    
    public function BotController(u:Unit){
        unit=u;
    }

    public function setTarget(targ:GameObject){
    	target=targ;
    }

    //if unit is of a type that has a turrent then create and assign one
    private function assignTurret(){
    	/*
        var tempObj = Global_Variables.turret_001;
		var tempPos = transform.transform.position;
		tempPos.y = tempPos.y+90;
		turret = Instantiate(tempObj,tempPos,transform.transform.rotation);
		turret.transform.parent = transform;
    	*/
        hasTurrent=true;//
    }


}
