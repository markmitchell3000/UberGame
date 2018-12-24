public class AttackTypePassive extends AttackType{
	public static function getAttObject(dam: DamageType){
        return dam.getPassiveObj();
    }
}