public class AttackTypeMelee extends AttackType{
    //attRange = 10;//in front of player	
    private var baseCnt:int=1;//lives only for a second

    public function AttackTypeMelee(meleeBonusTime:int){
    	super(baseCnt+meleeBonusTime, 0, 0);
    }

    public function AttackTypeMelee(meleeBonusTime:int, bonusRadius:int){
    	super(baseCnt+meleeBonusTime, 0+bonusRadius, 0);
    }

    public function getAttObject(dam: DamageType){
        return dam.getMeleeObj();
    }
}