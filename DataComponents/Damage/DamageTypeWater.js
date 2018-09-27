public class DamageTypeWater extends DamageType{
	static private var melee : GameObject;
    static private var ranged : GameObject;
    static private var passive : GameObject;
    static private var blast : GameObject;
    static private var power : GameObject;
    static private var ultimate : GameObject;
    static private var aoe : GameObject;

	public function getMeleeObj(){
		if(melee==null){
            melee = super.getMeleeObj("Water");
        }
        return melee;
    }
    public function getRangedObj(){
    	if(ranged==null){
            ranged = super.getRangedObj("Water");
        }
        return ranged;
    }
    public function getPassiveObj(){
    	if(passive==null){
            passive = super.getPassiveObj("Water");
        }
        return passive;
    }
    public function getBlastObj(){
    	if(blast==null){
            blast = super.getBlastObj("Water");
        }
        return blast;
    }
    public function getPowerObj(){
    	if(power==null){
            power = super.getPowerObj("Water");
        }
        return power;
    }
    public function getUltimateObj(){
    	if(ultimate==null){
            ultimate = super.getUltimateObj("Water");
        }
        return ultimate;	
    }
    public function getAOEObj(){
    	if(aoe==null){
            aoe = super.getAOEObj("Water");
        }
        return aoe;
    }
}