public class UnitTypeHash{
	private static var uth:UnitTypeHash;
	private var unitTypeTable:HashTable;

	public function UnitTypeHash(){
        unitTypeTable["Base"]=new UnitTypeBase();
        unitTypeTable["Tower"]=new UnitTypeTower();
        unitTypeTable["Bonus"]=new UnitTypeBonus();
        unitTypeTable["Civilian"]=new UnitTypeCivilian();
        unitTypeTable["Worker"]=new UnitTypeWorker();
        unitTypeTable["Zombies"]=new UnitTypeZombie();
        unitTypeTable["Soldier"]=new UnitTypeSoldier();
        unitTypeTable["Lt"]=new UnitTypeLt();
        unitTypeTable["Hunter"]=new UnitTypeHunter();
        unitTypeTable["Guardian"]=new UnitTypeGuardian();
        unitTypeTable["Titan"]=new UnitTypeTitan();
	}

	public static function getValue(str:String){
		if(uth==null){
			uth= new UnitTypeHash();
		}
		return uth.unitTypeTable[str];
	}
}