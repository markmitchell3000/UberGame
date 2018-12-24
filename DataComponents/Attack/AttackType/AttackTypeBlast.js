public class AttackTypeBlast extends AttackType{
	public static function getAttObject(dam: DamageType){
        return dam.getBlastObj();
    }
}