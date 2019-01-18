/*
    Unit creates an attack object if it has a cooldown, may
*/
public class UnitABStateAttack extends UnitABState{

    public function UnitABStateAttack(){
    	super("Attack", 1.5);
    }

    public function update(unit:Unit,time:float){
    	unit.unitData.actionCooldown-=time;
    	if(unit.unitData.actionCooldown<0){
            unit.unitData.actionCooldown=0;
    	}
        if(unit.unitData.actionCooldown==0){
            selectAndCreateAttack(unit);
        }
        super.update(unit, time);
    }

    private function selectAndCreateAttack(unit:Unit){
    	var attPref:String=((Archetype)ArcheTypeHash.getValue(unit.unitData.archetype)).damagePref;
    	var attName:String=unit.unitData.attackCooldowns.selectAttack(attPref);
    	var uat:UnitAttackType=UAHash.getValue(attName);
    	var attStats:AttackStats=uat.getAttStats(unit.unitData.traits, 0,0,0);//currently there is no bonus radius, range or lifespan for attacks
    	//reset cooldown
    	unit.unitData.attackCooldowns.resetCooldown(attName);
    	new Attack(attStats, unit.unitModel.transform);
    	unit.unitData.actionCooldown=1;
    }
}