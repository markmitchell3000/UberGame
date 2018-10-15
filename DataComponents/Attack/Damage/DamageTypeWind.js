public class DamageTypeWind extends DamageType{
	static private var melee : GameObject;
    static private var ranged : GameObject;
    static private var passive : GameObject;
    static private var blast : GameObject;
    static private var power : GameObject;
    static private var ultimate : GameObject;
    static private var aoe : GameObject;

	public function getMeleeObj(){
		if(melee==null){
            melee = super.getMeleeObj("Wind");
        }
        return melee;
    }
    public function getRangedObj(){
    	if(ranged==null){
            ranged = super.getRangedObj("Wind");
        }
        return ranged;
    }
    public function getPassiveObj(){
    	if(passive==null){
            passive = super.getPassiveObj("Wind");
        }
        return passive;
    }
    public function getBlastObj(){
    	if(blast==null){
            blast = super.getBlastObj("Wind");
        }
        return blast;
    }
    public function getPowerObj(){
    	if(power==null){
            power = super.getPowerObj("Wind");
        }
        return power;
    }
    public function getUltimateObj(){
    	if(ultimate==null){
            ultimate = super.getUltimateObj("Wind");
        }
        return ultimate;	
    }
    public function getAOEObj(){
    	if(aoe==null){
            aoe = super.getAOEObj("Wind");
        }
        return aoe;
    }
}