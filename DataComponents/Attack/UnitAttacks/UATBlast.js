public class UATBlast extends UnitAttackType{
    private static uatb:UATBlast;

	public function UATBlast(){
        super("Blast",20,5,0,7,4,2,4);//level 1, range 1 cooldown is 2 seconds
	}

	public static function getUAT(){
		if(uatb==null){
			uatb= new UATBlast();
		}
		return uatb;
	}
}