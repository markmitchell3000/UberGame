public class AttackTypePower extends AttackType{
	attRange = 20;//In front of player

	public function getAttObject(dam: DamageType){
        return dam.getPowerObj();
    }
}