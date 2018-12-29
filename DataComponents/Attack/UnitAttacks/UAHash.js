public class UAHash{
	private var uats:Hashtable; //string keys should match attack pref and other possible strings
    private static var uahash:UAHash;//singleton

    public function UAHash(){
        uats= new Hashtable();
        uats["melee"]=UATMelee.getUAT();
        uats["ranged"]=UATRanged.getUAT();
        uats["blast"]=UATBlast.getUAT();
        uats["power"]=UATPower.getUAT();
        uats["aoe"]=UATAoe.getUAT();
        uats["ultimate"]=UATUltimate.getUAT();
        uats["passive"]=UATPassive.getUAT();//called every turn (if cooldown ready) regardless of other attacks
    }

    public static getValue(str:String){
    	if(uahash==null){
    		uahash=new UAHash();
    	}
    	return uahash.getAT(str);
    }

    public function getAT(str:String){
    	return uats[str];
    }
}
