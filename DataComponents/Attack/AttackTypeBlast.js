public class AttackTypeBlast extends AttackType{
	//private var fireAttackSpeed : float = 5.0;
	//Blasts dont travel but instead are an instant long attack
	//attRange = 6;//in front of player
    private var baseCnt:int=1;//lives only for a second, new one should be made every second

    public function AttackTypeBlast(blastBonusTime:int){
    	super(baseCnt+blastBonusTime, 0, 5);
    }

    //blast can be extended beyond a magnitude of 5
    public function AttackTypeBlast(blastBonusTime:int, bonusLgth:int){
    	super(baseCnt+blastBonusTime, 0, 5+bonusLgth);
    }

    //radius of the blast vector can be expanded across the length of blast
    public function AttackTypeBlast(blastBonusTime:int, bonusLgth:int,bonusRadius:int){
    	super(baseCnt+blastBonusTime, 0+bonusRadius, 5+bonusLgth);
    }
	public function getAttObject(dam: DamageType){
        return dam.getBlastObj();
    }
}