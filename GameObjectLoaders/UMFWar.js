//handles models for base, towers and bonus
public class UMFWar extends UMFCombat{
    protected var baseModels: Object[];
    protected var towerModels: Object[];
    protected var bonusModels: Object[];
	public function loadUnits(gp: GBGroup){
		baseModels=unitLoad(""+gp.modelStringFolder+"Bases");
		towerModels=unitLoad(""+gp.modelStringFolder+"Towers");
		bonusModels=unitLoad(""+gp.modelStringFolder+"Bonuses");
		super.loadUnitHelp(gp);
		super.loadUnitModels(gp, this);
	}

	public function getBaseModels(){
        return baseModels;
	}

	public function getTowerModels(){
        return towerModels;
	}

	public function getBonusModels(){
        return bonusModels;
	}
} 