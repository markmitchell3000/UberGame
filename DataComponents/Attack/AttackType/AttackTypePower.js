public class AttackTypePower extends AttackType{
	public static function getAttObject(dam: DamageType){
        return dam.getPowerObj();
    }
}