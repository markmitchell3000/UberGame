
public class DamageTypeHash{
    private static var dth: DamageTypeHash;
    private var damTypeTable:HashTable;

    public function DamageTypeHash(){
        damTypeTable["Basic"]=new DamageTypeBasic();
        damTypeTable["Blades"]= new DamageTypeBlades();
        damTypeTable["Earth"]=new DamageTypeEarth();
        damTypeTable["Electric"]= new DamageTypeElectric();
        damTypeTable["Fire"]=new DamageTypeFire();
        damTypeTable["Ice"]= new DamageTypeIce();
        damTypeTable["Posion"]=new DamageTypePosion();
        damTypeTable["Water"]= new DamageTypeWater();
        damTypeTable["Wind"]= new DamageTypeWind();
    }

    public static function getValues(str:String){
        if(dth==null){
            dth= new DamageTypeHash();
        }
        return dth.damTypeTable[str];
    }
}