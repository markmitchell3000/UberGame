public class AttackTypeMelee extends AttackType{
    public static function getAttObject(dam: DamageType){
        return dam.getMeleeObj();
    }
}