//handles units for zombies and civilians
public class UMFCrowd extends UnitModelFactory{
	private var unitModels: Object[];
	//zombies, civilians or possibly workers
	public function loadUnits(gp: GBGroup){
		unitModels=Resources.LoadAll("Model_Prefabs/Unit_Models/"+gp.modelStringFolder, GameObject);
		super.loadUnitModels(gp, this);
	}

	public function getUnitModels(){
		return unitModels;
	}
} 