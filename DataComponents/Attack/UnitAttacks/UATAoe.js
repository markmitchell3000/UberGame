public class UATAoe extends UnitAttackType{
    private static var uata:UATAoe;

	public function UATAoe(){
        super("Area of Effect",60,1,1,0,0,2,4);//level 1, range 1, cooldown is 20
	}

	public static function getUAT(){
        if(uata==null){
           uata= new UATAoe();
        }
        return uata;
	}
}