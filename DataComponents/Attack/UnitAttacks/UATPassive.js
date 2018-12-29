/*specialized aoe*/
public class UATPassive extends UnitAttackType{
    private static var uatp:UATPassive;

	public function UATPassive(){
        super("passive",1,0,1,0,0,1,1);//level 1, range 1, cooldown 1,radius 1
	}

    public static function getUAT(){
		if(uatp==null){
			uatp= new UATPassive();
		}
		return uatp;
	}
}