public class AttackData{
	private var powerLevel : int;
    private var team : Team;
    private var att : AttackType;
    private var dam : DamageType;

    public function AttackData(lvl:int,t:Team,a:AttackType,d:DamageType){
    	powerLevel=30 + 4*lvl;
    	team=t;
    	att=a;
    	dam=d;
    }
    
    //checks for collision with enemy
    public function checkStatus(t:Team){
        //placeholder
    }

    public function getAttObject(){
        return att.getAttObject(dam);
    }
}