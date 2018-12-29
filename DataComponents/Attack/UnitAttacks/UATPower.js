public class UATPower extends UnitAttackType{
    private static var uatp:UATPower;

	public function UATPower(){
        super("Power",45,5,0,7,4,2,5);//UnitAttackType(tp:String, cd:int, dst:int, rds: int, rng:int,sp:int,ls:int, mul: int)
	}

    public static function getUAT(){
		if(uatp==null){
			uatp= new UATPower();
		}
		return uatp;
	}
}