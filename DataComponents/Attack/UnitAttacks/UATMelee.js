public class UATMelee extends UnitAttackType{
    private static uatm:UATMelee;

	public function UATMelee(){
        super("Melee",1,1,0,0,0,1,1);//level 1, range 1 cooldown is 2 seconds
	}
    
    public static function getUAT(){
    	if(uatm==null){
    		uatm=new UATMelee();
    	}
    	return uatm;
    }
}