public class AttackTypeAOE extends AttackType{
	//attRange = 100;//Centered on player
    private var baseCnt:int=3;//AOE lives for 3 seconds as a base

    public function AttackTypeAOE(aoeBonusTime:int){
        super(baseCnt+aoeBonusTime, 1, 0);
    }

    public function AttackTypeAOE(aoeBonusTime:int, bonusRadius:int){
    	super(baseCnt+aoeBonusTime, 1+bonusRadius, 0);
    }
    
    /*used to find a cross section between attacktype and
      damagetype. */ 
	public function getAttObject(dam: DamageType){
        return dam.getAOEObj();
    }

}