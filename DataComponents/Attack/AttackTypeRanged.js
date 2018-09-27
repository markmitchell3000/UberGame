public class AttackTypeRanged extends AttackType{
	private var fireAttackSpeed : float = 5.0;
	attRange = 3;//in front of player

	public function getAttObject(dam: DamageType){
        return dam.getRangedObj();
    }
}