/* The purpose of this service is to check if the attack preference is at a 
cooldown of zero (or less :/), if no go to the next kind of attack and 
continue until either an attack is selected or there is no possible attack to use.
*/
public class UVAttackSelector implements UnitVisitor{
	public  var curAttackString: String;
	
	public function visitUnit(unit:UnitInner){
		unit.unitData.acceptVisitor(this);
	}
	
	public function visitUnit(ud:UDInner){
		ud.unitAttacks.acceptVisitor(this);
	}
	
	public function visitUnit(ua:UAInner){
		curAttackString=ua.attackPref;
        checkCooldowns(ua);
	}

    public function getAttackString(unit:Unit){
        unit.acceptVisitor(this);
        return curAttackString;
    }
    
    private function checkCooldowns(ua){
    	if(curAttackString=="melee"){
    		if(ua.meleeCooldown>0){
    			curAttackString=="ranged";
    		}
    	}
    	if(curAttackString=="ranged"){
    		if(ua.rangedCooldown>0){
    			curAttackString=="blast";
    		}
    	}
    	if(curAttackString=="blast"){
    		if(ua.blastCooldown>0){
    			curAttackString=="power";
    		}
    	}
    	if(curAttackString=="power"){
    		if(ua.powerCooldown>0){
    			curAttackString=="aoe";
    		}
    	}
    	if(curAttackString=="aoe"){
    		if(ua.aoeCooldown>0){
    			curAttackString=="ultimate";
    		}
    	}
    	if(curAttackString=="ultimate"){
    		if(ua.ultimateCooldown>0){
    			curAttackString=="none";
    		}
    	}
    }
}