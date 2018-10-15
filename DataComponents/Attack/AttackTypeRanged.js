public class AttackTypeRanged extends AttackType{
	//private var fireAttackSpeed : float = 5.0;
	//attRange = 3;//in front of player
    private var baseCnt:int=3;//lives only for 3 second

    public function AttackTypeRanged(rangedBonusTime:int){
    	super(baseCnt+rangedBonusTime, 0, 0);
    }

    public function AttackTypeRanged(rangedBonusTime:int, bonusRadius:int){
    	super(baseCnt+rangedBonusTime, 0+bonusRadius, 0);
    }
	public function getAttObject(dam: DamageType){
        return dam.getRangedObj();
    }
}