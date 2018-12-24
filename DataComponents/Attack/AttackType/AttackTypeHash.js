public class AttackTypeHash{
	private static var ath:AttackTypeHash;
	private var attTypeTable:HashTable;

	public function AttackTypeHash(){
        attTypeTable["Melee"]=new AttackTypeMelee();
        attTypeTable["Ranged"]=new AttackTypeRanged();
        attTypeTable["Blast"]=new AttackTypeBlast();
        attTypeTable["Power"]=new AttackTypePower();
        attTypeTable["Area of Effect"]=new AttackTypeAOE();
        attTypeTable["Passive"]=new AttackTypePassive();
        attTypeTable["Ultimate"]=new AttackTypeUltimate();
	}

	public static function getValue(str:String){
		if(ath==null){
			ath= new AttackTypeHash();
		}
		return ath.attTypeTable[str];
	}
}