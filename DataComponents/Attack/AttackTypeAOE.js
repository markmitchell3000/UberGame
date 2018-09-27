public class AttackTypeAOE extends AttackType{
	attRange = 100;//Centered on player

	public function getAttObject(dam: DamageType){
        return dam.getAOEObj();
    }
}