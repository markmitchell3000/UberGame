public class UnitTypeWorker extends UnitType{
	private var baseHealth:int=30;
	private var baseMana:int=30;
	private var baseAttRange:float=5.0;//not sure what this should be.
	//bonus is typically 0
    public function setStats(lvl:int, bonus:float){
        super.setStats(lvl,bonus, baseHealth, baseMana, baseAttRange,8.0);
		super.isBuilding=false;
    }
    //should only receive UMFCrowd not UnitModelFactory
    public function getModelArr(umf: UMFCrowd){
        return umf.getUnitModels();
    }
}