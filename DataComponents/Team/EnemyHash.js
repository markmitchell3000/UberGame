public class EnemyHash{
	private var teamWar : Hashtable;
	private static var eh:EnemyHash;

	public function EnemyHash(){
		teamWar=new Hashtable
	}

	static public function getEH(){
		if(eh==null){
			eh=new EnemyHash();
		}
		return eh;
	}

	public function setState(t1:String, t2:String, atWar:Boolean){
        teamWar[t1+","+t2]= atWar;
        teamWar[t2+","+t1]= atWar;
	}

	public function checkState(t1:String, t2:String){
        return teamWar[t1+","+t2];
	}
}