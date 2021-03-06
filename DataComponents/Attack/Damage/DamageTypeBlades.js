public class DamageTypeBlades extends DamageType{
	private var melee : GameObject;
    private var ranged : GameObject;
    private var passive : GameObject;
    private var blast : GameObject;
    private var power : GameObject;
    private var ultimate : GameObject;
    private var aoe : GameObject;
    static private var dtb: DamageTypeBlades;

    public function DamageTypeBlades(){
        super("Blade");
    }

    public static function getDT(){
        if(dtb==null){
            dtb= new DamageTypeBlades();
        }
        return dtb;
    }

	public function getMeleeObj(){
		if(melee==null){
            melee = super.getMeleeObj();
        }
        return melee;
    }
    public function getRangedObj(){
    	if(ranged==null){
            ranged = super.getRangedObj();
        }
        return ranged;
    }
    public function getPassiveObj(){
    	if(passive==null){
            passive = super.getPassiveObj();
        }
        return passive;
    }
    public function getBlastObj(){
    	if(blast==null){
            blast = super.getBlastObj();
        }
        return blast;
    }
    public function getPowerObj(){
    	if(power==null){
            power = super.getPowerObj();
        }
        return power;
    }
    public function getUltimateObj(){
    	if(ultimate==null){
            ultimate = super.getUltimateObj();
        }
        return ultimate;	
    }
    public function getAOEObj(){
    	if(aoe==null){
            aoe = super.getAOEObj();
        }
        return aoe;
    }
}