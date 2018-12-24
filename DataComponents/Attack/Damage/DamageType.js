/*Extended classes are all static, given an attack type each extention returns a
 gameObject*/
public class DamageType{
    private var att:String;

    public function DamageType(a:String){
        att=a;
    }

    public static function getDT(){
        //abstract class returns a singleton of each damagetype.
    }	

    public function getMeleeObj(){
        return Resources.Load("Attack_Prefabs/"+att+"_Melee") as GameObject;
    }
    public function getRangedObj(){
    	return Resources.Load("Attack_Prefabs/"+att+"_Ranged") as GameObject;
    }
    public function getPassiveObj(){
    	return Resources.Load("Attack_Prefabs/"+att+"_Passive") as GameObject;
    }
    public function getBlastObj(){
    	return Resources.Load("Attack_Prefabs/"+att+"_Blast") as GameObject;
    }
    public function getPowerObj(){
    	return Resources.Load("Attack_Prefabs/"+att+"_Power") as GameObject;
    }
    public function getUltimateObj(){
    	return Resources.Load("Attack_Prefabs/"+att+"_Ultimate") as GameObject;
    }
    public function getAOEObj(){
    	return Resources.Load("Attack_Prefabs/"+att+"_AOE") as GameObject;
    }
}