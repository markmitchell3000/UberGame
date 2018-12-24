public class AttackTypeRanged extends AttackType{
	public static function getAttObject(dam: DamageType){
        return dam.getRangedObj();
    }
}