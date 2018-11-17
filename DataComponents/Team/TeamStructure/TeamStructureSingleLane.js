public class TeamStructureSingleLane extends TeamStructure{
	private static var ts:TeamStructureSingleLane;//singleton

    public function TeamStructureSingleLane(){
    	super([1,4,1,0,0,1,2,2,5,10,0],26);
    }

	public function loadUnits (gp:GBGroup) {
        UnitLoader.getUL().loadWarStyleUnits(gp);
	}

	public static function getTs(){
        if(ts==null){
            ts=new TeamStructureSingleLane();
        }
        return ts;
    }
}