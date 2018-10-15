public class AttackTypePassive extends AttackType{
	//attRange = 100;//centered on player
    private var baseCnt:int=1;//lives only for a second, new one should be made every second

    public function AttackTypePassive(PassiveBonusTime:int){
    	super(baseCnt+passiveBonusTime, 1, 0);
    }

    public function AttackTypePassive(PassiveBonusTime:int, bonusRadius:int){
    	super(baseCnt+passiveBonusTime, 1+bonusRadius, 0);
    }

	public function getAttObject(dam: DamageType){
        return dam.getPassiveObj();
    }
}