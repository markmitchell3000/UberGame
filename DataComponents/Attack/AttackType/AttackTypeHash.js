public class AttackTypeHash{
	private static var ath:AttackTypeHash;
	private var attTypeTable:HashTable;
	public var atList:String[]=["Melee","Ranged","Blast","Power","Area of Effect","Passive","Ultimate"];

	public function AttackTypeHash(){
        attTypeTable[atList[0]]=new AttackTypeMelee();
        attTypeTable[atList[1]]=new AttackTypeRanged();
        attTypeTable[atList[2]]=new AttackTypeBlast();
        attTypeTable[atList[3]]=new AttackTypePower();
        attTypeTable[atList[4]]=new AttackTypeAOE();
        attTypeTable[atList[5]]=new AttackTypePassive();
        attTypeTable[atList[6]]=new AttackTypeUltimate();
	}

	public static function getValue(str:String){
		if(ath==null){
			ath= new AttackTypeHash();
		}
		return ath.attTypeTable[str];
	}

	public static function getATString(val:int){
        if(ath==null){
            ath= new AttackTypeHash();
        }
        return ath.atList[val];
    }
}