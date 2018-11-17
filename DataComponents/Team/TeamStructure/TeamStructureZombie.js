public class TeamStructureZombie extends TeamStructure{
    private static var ts:TeamStructureZombie;//singleton

    public function TeamStructureZombie(){
        super([0,0,0,0,25,0,0,0,0,0,0],25);
    }

	public function loadUnits (gp:GBGroup) {
        UnitLoader.getUL().loadCivZomStyleUnits(gp);
	}

	public static function getTs(){
        if(ts==null){
            ts=new TeamStructureZombie();
        }
        return ts;
    }
}