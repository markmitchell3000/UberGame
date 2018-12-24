public class AttackTypeAOE extends AttackType{   
    /*used to find a cross section between attacktype and
      damagetype. */ 
	public static function getAttObject(dam: DamageType){
        return dam.getAOEObj();
    }

}