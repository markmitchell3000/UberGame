public class TeamStructureDoubling extends TeamStructure{
	private static var ts:TeamStructureDoubling;//singleton

    public function TeamStructureDoubling(){
    	super([0,0,0,0,0,1,2,2,4,8,0],17);
    }

	public function loadUnits (gp:GBGroup) {
        UnitLoader.getUL().loadMissionStyleUnits(gp);
	}

	public static function getTs(){
        if(ts==null){
            ts=new TeamStructureDoubling();
        }
        return ts;
    }
}