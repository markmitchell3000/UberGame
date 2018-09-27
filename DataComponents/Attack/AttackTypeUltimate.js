public class AttackTypeUltimate extends AttackType{
	attRange = 100;//centered on player

	public function getAttObject(dam: DamageType){
        return dam.getUltimateObj();
    }
}