public class UnitTypeGuardian extends UnitType{
	private var baseHealth:int=120;
	private var baseMana:int=120;
	private var baseAttRange:float=10.0;//not sure what this should be.
	//bonus is typically 0
    public function setStats(lvl:int, bonus:float){
        super.setStats(lvl,bonus, baseHealth, baseMana, baseAttRange,30.0);
		super.isBuilding=false;
    }
    //should only receive UMFCombat not UnitModelFactory
    public function getModelArr(umf: UMFCombat){
        return umf.getGuardianModels();
    }
}