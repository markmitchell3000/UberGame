//UMFWar extends this since it loads these units 
//plus some war buildings, which are a unit class
//handles models for titans, guardians, ltsOrHunters, and soldiers
//Used by mission, arena and outdoor maps to load those models.
public class UMFCombat extends UnitModelFactory{
    protected var titanModels: Object[];
    protected var guardianModels: Object[];
    protected var ltsOrHuntModels: Object[];
    protected var soldierModels: Object[];

    public function loadUnits(gp: GBGroup){
        loadUnitHelp(gp);
		loadUnitModels(gp, this);
	}

	protected function loadUnitHelp(gp: GBGroup){
		titanModels=unitLoad(""+gp.modelStringFolder+"Titans");
		guardianModels=unitLoad(""+gp.modelStringFolder+"Guardians");
		ltsOrHuntModels=unitLoad(""+gp.modelStringFolder+"Lts&Hunters");
		soldierModels=unitLoad(""+gp.modelStringFolder+"Soldiers");
	}

	protected function loadUnitModels(gp: GBGroup, umf: UnitModelFactory){
        super.loadUnitModels(gp, this);
	}

	public function getTitanModels(){
		return titanModels;
	}

	public function getGuardianModels(){
		return guardianModels;
	}

    public function getLtOrHunterModels(){
    	return ltsOrHuntModels;
    }

	public function getSoldierModels(){
		return soldierModels;
	}

} 
/*
		try{
			for(var uId=0;uId<gpArr.Count;uId++){
				var tempUnit:GBUnit=gpArr.Item[uId];
				//var objNum:int;
				var unitObj : GameObject;
				switch(tempUnit.unitType){
					case UNIT_TYPE.BASE:
		                unitObj = unitObjSelector(tempUnit, baseModels);
					    break;
					case UNIT_TYPE.TOWER:
		                unitObj = unitObjSelector(tempUnit, towerModels);
					    break;
					case UNIT_TYPE.BONUS:
		                unitObj = unitObjSelector(tempUnit, bonusModels);
					    break;
					case UNIT_TYPE.TITAN:
		                unitObj = unitObjSelector(tempUnit, titanModels);
					    break;
					case UNIT_TYPE.GUARDIAN:
		                unitObj = unitObjSelector(tempUnit, guardianModels);
					    break;
					case UNIT_TYPE.HUNTER:
					case UNIT_TYPE.LIEUTENANT:
		                unitObj = unitObjSelector(tempUnit, ltsOrHuntModels);
					    break;
					case UNIT_TYPE.SOLDIER:
		                unitObj = unitObjSelector(tempUnit, soldierModels);
					    break;
					default:
					    Debug.Log("unit not part of war style structure.");
					    break;
				}
				modelObject=Instantiate(unitObj, transform.position, transform.rotation);
				posObj(modelObject, tempUnit.yCoord, tempUnit.xCoord, 0);
			}
		}
		catch(err){
			print (err.Message);
			Debug.Log("Issues with"+gp.modelStringFolder);
		}*/