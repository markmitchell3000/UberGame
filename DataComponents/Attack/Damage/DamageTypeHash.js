
public class DamageTypeHash{
    private static var dth: DamageTypeHash;
    public var damTypeTable:HashTable;
    public var dtList:String[]=["Basic","Blades","Earth","Electric","Fire","Ice","Magic","Posion","Water","Wind"];

    public function DamageTypeHash(){
        damTypeTable[dtList[0]]= new DamageTypeBasic();
        damTypeTable[dtList[1]]= new DamageTypeBlades();
        damTypeTable[dtList[2]]= new DamageTypeEarth();
        damTypeTable[dtList[3]]= new DamageTypeElectric();
        damTypeTable[dtList[4]]= new DamageTypeFire();
        damTypeTable[dtList[5]]= new DamageTypeIce();
        damTypeTable[dtList[6]]= new DamageTypeMagic();
        damTypeTable[dtList[7]]= new DamageTypePosion();
        damTypeTable[dtList[8]]= new DamageTypeWater();
        damTypeTable[dtList[9]]= new DamageTypeWind();
    }

    public static function getValues(str:String){
        if(dth==null){
            dth= new DamageTypeHash();
        }
        return dth.damTypeTable[str];
    }

    public static function getDTString(val:int){
        if(dth==null){
            dth= new DamageTypeHash();
        }
        return dth.dtList[val];
    }
}