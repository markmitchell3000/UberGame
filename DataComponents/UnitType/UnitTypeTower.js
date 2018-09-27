public class UnitTypeTower extends UnitType{
	private var baseHealth:int=1500;
	private var baseMana:int=1500;
	private var baseAttRange:float=20.0;//not sure what this should be.
	//bonus is typically 0
    public function setStats(lvl:int, bonus:float){
        super.setStats(lvl,bonus, baseHealth, baseMana, baseAttRange,0.0);
		super.isBuilding=true;
    }
    //should only receive UMFCombat not UnitModelFactory
    public function getModelArr(umf: UMFWar){
        return umf.getTowerModels();
    }
}