public class UnitTypeHash{
    private static var uth:UnitTypeHash;
    private var unitTypeTable:HashTable;
    public var utList:String[]=["Civilian","Worker","Zombie","Soldier","Lt","Hunter","Bonus","Guardian","Tower","Titan","Base"];

    public function UnitTypeHash(){
        unitTypeTable[utList[0]]=new UnitTypeCivilian(0,0);
        unitTypeTable[utList[1]]=new UnitTypeWorker(1,0);
        unitTypeTable[utList[2]]=new UnitTypeZombie(2,3);
        unitTypeTable[utList[3]]=new UnitTypeSoldier(3,2);
        unitTypeTable[utList[4]]=new UnitTypeLt(4,3);
        unitTypeTable[utList[5]]=new UnitTypeHunter(5,4);
        unitTypeTable[utList[6]]=new UnitTypeBonus(6,0);
        unitTypeTable[utList[7]]=new UnitTypeGuardian(7,2);
        unitTypeTable[utList[8]]=new UnitTypeTower(8,0);
        unitTypeTable[utList[9]]=new UnitTypeTitan(9,2);
        unitTypeTable[utList[10]]=new UnitTypeBase(10,0);
    }

    public static function getValue(str:String){
        if(uth==null){
            uth= new UnitTypeHash();
        }
        return uth.unitTypeTable[str];
    }

    public static function getValue(val:int){
        if(uth==null){
            uth= new UnitTypeHash();
        }
        return uth.unitTypeTable[getUTString(val)];
    }

    public static function getUTString(val:int){
        if(uth==null){
            uth= new UnitTypeHash();
        }
        return uth.utList[val];
    }
}