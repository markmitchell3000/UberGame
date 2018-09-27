public class AttackTypeMelee extends AttackType{
    attRange = 10;//in front of player	

    public function getAttObject(dam: DamageType){
        return dam.getMeleeObj();
    }
}