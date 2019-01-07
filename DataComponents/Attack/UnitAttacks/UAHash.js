public class UAHash{
	private var uats:Hashtable; //string keys should match attack pref and other possible strings
    private static var uahash:UAHash;//singleton

    public function UAHash(){
        uats= new Hashtable();
        uats["Melee"]=UATMelee.getUAT();
        uats["Ranged"]=UATRanged.getUAT();
        uats["Blast"]=UATBlast.getUAT();
        uats["Power"]=UATPower.getUAT();
        uats["AOE"]=UATAoe.getUAT();
        uats["Ultimate"]=UATUltimate.getUAT();
        uats["Passive"]=UATPassive.getUAT();//called every turn (if cooldown ready) regardless of other attacks
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
