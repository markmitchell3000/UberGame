public class TeamStructureZombie extends TeamStructure{
    private static var ts:TeamStructureZombie;//singleton

    public function TeamStructureZombie(){
        super([0,0,0,0,25,0,0,0,0,0,0],25,"zombie",false);
    }

    public function getUnitPlacement(quadrant:int){
       var up = new UnitPlacementsCivOrZomb(quadrant);
       return up;
    }

	public static function getTs(){
        if(ts==null){
            ts=new TeamStructureZombie();
        }
        return ts;
    }
}
