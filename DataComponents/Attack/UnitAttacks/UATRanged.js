public class UATRanged extends UnitAttackType{
    private static uatr:UATRanged;

	public function UATRanged(){
        super("Ranged",1,3,0,4,2,2,1);//UnitAttackType(tp:String, cd:int, dst:int, rds: int, rng:int,sp:int,ls:int, mul: int)
	}

	public static function getUAT(){
		if(uatr==null){
			uatr= new UATRanged();
		}
		return uatr;
	}
}