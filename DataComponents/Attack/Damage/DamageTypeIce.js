public class DamageTypeIce extends DamageType{
	private var melee : GameObject;
    private var ranged : GameObject;
    private var passive : GameObject;
    private var blast : GameObject;
    private var power : GameObject;
    private var ultimate : GameObject;
    private var aoe : GameObject;
    static private var dti : DamageTypeIce;

    public function DamageTypeIce(){
        super("Ice");
    }

    public static function getDT(){
        if(dti==null){
            dti=new DamageTypeIce();
        }
        return dti;
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