public class TeamStructureCivilian extends TeamStructure{
	private static var ts:TeamStructureCivilian;//singleton

    public function TeamStructureCivilian(){
        super([0,0,0,25,0,0,0,0,0,0,0],25,"civilian", false);
    }

    public function getUnitPlacement(quadrant:int){
       var up = new UnitPlacementsCivOrZomb(quadrant);
       return up;
    }

	public static function getTs(){
        if(ts==null){
            ts=new TeamStructureCivilian();
        }
        return ts;
    }


}
