public class TeamStructureQuadrupling extends TeamStructure{
	private static var ts:TeamStructureQuadrupling;//singleton

    public function TeamStructureQuadrupling(){
    	super([0,0,0,0,0,2,4,4,16,64,0],89,"quadrupling");
    }

	public static function getTs(){
        if(ts==null){
            ts=new TeamStructureQuadrupling();
        }
        return ts;
    }
}
