/*
  Unit hash respawned set cur health and mana to max and send to home location
*/
public class UnitABStateRestore extends UnitABState{
 
    public function UnitABStateRestore(){
    	super("Restore", 0.1);//should happen once
    }

    public function update(unit:Unit,time:float){
    	if(unit.unitModel==null){
            unit.unitData.curLoc=unit.unitData.homeLoc;
    		unit.spawnModel();
    		var stats:UnitStats=unit.unitData.unitStats;
    	    stats.curHealth=stats.health
    	    stats.curMana=stats.mana
    	}
    	super.update(unit, time);
    }
}