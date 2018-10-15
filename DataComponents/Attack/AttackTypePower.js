public class AttackTypePower extends AttackType{
	//attRange = 20;//In front of player
    private var baseCnt:int=2;//lives only for a second, new one should be made every second

    public function AttackTypePower(PowerBonusTime:int){
    	super(baseCnt+powerBonusTime, 0, 5);
    }

    //Power can be extended beyond a magnitude of 5
    public function AttackTypePower(PowerBonusTime:int, bonusLgth:int){
    	super(baseCnt+powerBonusTime, 0, 5+bonusLgth);
    }

    //radius of the power vector can be expanded across the length of blast/power
    public function AttackTypePower(PowerBonusTime:int, bonusLgth:int,bonusRadius:int){
    	super(baseCnt+powerBonusTime, 0+bonusRadius, 5+bonusLgth);
    }

	public function getAttObject(dam: DamageType){
        return dam.getPowerObj();
    }
}