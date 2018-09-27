public class UnitTypeBonus extends UnitType{
	private var baseHealth:int=500;
	private var baseMana:int=500;
	private var baseAttRange:float=20.0;//not sure what this should be.
	//bonus is typically 0
    public function setStats(lvl:int, bonus:float){
        super.setStats(lvl,bonus, baseHealth, baseMana, baseAttRange,0.0);
		super.isBuilding=true;
    }
    //should only receive UMFWar not UnitModelFactory
    public function getModelArr(umf: UMFWar){
        return umf.getBonusModels();
    }
}