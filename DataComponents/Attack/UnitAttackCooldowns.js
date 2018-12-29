/*Unique to units, initialized the same for all but after the first attack is 
called the discounts come into effect.*/
public class UnitAttackCooldowns{
	private var attacks:String[]=["Ultimate","Ranged","Power","Passive","Melee","Blast","AOE"];
	private var attackCooldowns:HashTable;

	public function UnitAttackCooldowns(){
		for(var i=0;i<7;i++){
			attackCooldowns[attacks[i]]=UAHash.getValue(attacks[i]).getCooldown(0);
		}
	}

	public function getCooldown(str:String){
		return attackCooldowns[str];
	}

	public function resetCooldown(str:String,discount:int){
        if(getCooldown(str)<=0){
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