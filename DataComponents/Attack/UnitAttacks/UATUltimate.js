public class UATUltimate extends UnitAttackType{
    private static var uatu:UATUltimate;

	public function UATUltimate(){
        super("Ultimate",120,2,2,0,0,3,8);//UnitAttackType(tp:String, cd:int, dst:int, rds: int, rng:int,sp:int,ls:int, mul: int)
	}

	public static function getUAT(){
		if(uatu==null){
			uatu= new UATUltimate();
		}
		return uatu;
	}
}