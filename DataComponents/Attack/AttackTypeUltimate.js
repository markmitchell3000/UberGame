public class AttackTypeUltimate extends AttackType{
	//attRange = 100;//centered on player
    private var baseCnt:int=5;//lives only for a second, new one should be made every second

    public function AttackTypeUltimate(UltimateBonusTime:int){
    	super(baseCnt+ultimateBonusTime, 1, 0);
    }

    public function AttackTypeUltimate(UltimateBonusTime:int, bonusRadius:int){
    	super(baseCnt+UltimateBonusTime, 1+bonusRadius, 0);
    }
	public function getAttObject(dam: DamageType){
        return dam.getUltimateObj();
    }
}