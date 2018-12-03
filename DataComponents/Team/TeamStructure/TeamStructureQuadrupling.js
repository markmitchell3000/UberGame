public class TeamStructureQuadrupling extends TeamStructure{
	private static var ts:TeamStructureQuadrupling;//singleton

    public function TeamStructureQuadrupling(){
    	super([0,0,0,0,0,2,4,4,16,64,0],89,"quadrupling",false);
    }

    public function getUnitPlacement(quadrant:int){
       var up = new UnitPlacementsQuadrupling(quadrant);
       return up;
    }

	public static function getTs(){
        if(ts==null){
            ts=new TeamStructureQuadrupling();
        }
        return ts;
    }
}
