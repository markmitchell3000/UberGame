public class AttackTypeUltimate extends AttackType{
	public static function getAttObject(dam: DamageType){
        return dam.getUltimateObj();
    }
}