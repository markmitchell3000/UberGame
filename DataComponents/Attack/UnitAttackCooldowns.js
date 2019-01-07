/*Unique to units, initialized the same for all but after the first attack is 
called the discounts come into effect.*/
public class UnitAttackCooldowns{
	private var attacks:String[]=["Passive","Melee","Ranged","Blast","Power","AOE","Ultimate"];
	private var attackCooldowns:HashTable;

	public function UnitAttackCooldowns(){
		for(var i=0;i<7;i++){
			attackCooldowns[attacks[i]]=UAHash.getValue(attacks[i]).getCooldown(0);
		}
	}

    /*May be skipped since attack selection can be handled here.*/
	/*public function getCooldown(str:String){
		return attackCooldowns[str];
	}*/
    /*returns an attack, if none are ready return none.*/
	public function selectAttack(pref:String){
        if(attackCooldowns[pref]>0){
            for(var i=3;i<7;i++){
            	if(isAttackCooled(i)){
            		return attacks[i];
            	}
            }
            return "None";//no attacks are ready, do nothing.
        }
        else{
        	return pref;//preferred attack is ready.
        }
	}

    /*Passive is called whenever possible*/
	public function isPassiveCooled(){
		return isAttackCooled(0);
	}

	private function isAttackCooled(attSpot:int){
        if(attackCooldowns[attacks[attSpot]]<=0){
           return true;
        }
        else{
           return false;
        }
	}
    
    /*Currently discounts are used this will likely be zero for now and then 
    added later, Called once an attack is created*/
	public function resetCooldown(str:String,discount:int){
        if(attackCooldowns[str]<=0){
        	attackCooldowns[str]=UAHash.getValue(str).getCooldown(discount);
        }
        else{
        	Debug.Log("Attacks being generated before cooldown has reached zero");
        }
	}

	public function reduceCooldowns(timeChange:float){
		for(var i=0;i<7;i++){
            attackCooldowns[attacks[i]]=reducerHelper(attacks[i],timeChange);
		}
	}

	private function reducerHelper(str:String,tc:float){
		return (attackCooldowns[str]-tc<=0) ? 0 : (attackCooldowns[str]-tc);
	}
}