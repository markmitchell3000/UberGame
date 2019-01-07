public class EnemyHash{
	public var teamWar : Hashtable;
	private static var eh:EnemyHash;

	public function EnemyHash(){
		teamWar=new Hashtable
	}

	public static function setState(t1:String, t2:String, atWar:Boolean){
		if(eh==null){
			eh=new EnemyHash();
		}
        eh.teamWar[t1+","+t2]= atWar;
        eh.teamWar[t2+","+t1]= atWar;
	}

	public static function checkState(t1:String, t2:String){
		if(eh==null){
			eh=new EnemyHash();
		}
		var key:String =t1+","+t2;
		if(eh.teamWar.ContainsKey(key)){
            return eh.teamWar[key];
        }
        else{
        	return false;
        }
	}
}