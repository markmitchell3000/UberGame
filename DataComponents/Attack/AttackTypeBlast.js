public class AttackTypeBlast extends AttackType{
	private var fireAttackSpeed : float = 5.0;
	attRange = 6;//in front of player

	public function getAttObject(dam: DamageType){
        return dam.getBlastObj();
    }
}