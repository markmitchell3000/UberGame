public class DamageType{
	
    public function getMeleeObj(att: String){
        return Resources.Load("Attack_Prefabs/"+att+"_Melee") as GameObject;
    }
    public function getRangedObj(att: String){
    	return Resources.Load("Attack_Prefabs/"+att+"_Ranged") as GameObject;
    }
    public function getPassiveObj(att: String){
    	return Resources.Load("Attack_Prefabs/"+att+"_Passive") as GameObject;
    }
    public function getBlastObj(att: String){
    	return Resources.Load("Attack_Prefabs/"+att+"_Blast") as GameObject;
    }
    public function getPowerObj(att: String){
    	return Resources.Load("Attack_Prefabs/"+att+"_Power") as GameObject;
    }
    public function getUltimateObj(att: String){
    	return Resources.Load("Attack_Prefabs/"+att+"_Ultimate") as GameObject;
    }
    public function getAOEObj(att: String){
    	return Resources.Load("Attack_Prefabs/"+att+"_AOE") as GameObject;
    }
}