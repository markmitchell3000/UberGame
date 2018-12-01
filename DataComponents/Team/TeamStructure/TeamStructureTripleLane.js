public class TeamStructureTripleLane extends TeamStructure{
	private static var ts:TeamStructureTripleLane;//singleton

    public function TeamStructureTripleLane(){
    	super([1,6,3,0,0,2,3,3,10,30],57,"triple lane");
    }

	public static function getTs(){
        if(ts==null){
            ts=new TeamStructureTripleLane();
        }
        return ts;
    }
}
