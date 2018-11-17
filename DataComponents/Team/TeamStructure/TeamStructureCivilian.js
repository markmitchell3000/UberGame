public class TeamStructureCivilian extends TeamStructure{
	private static var ts:TeamStructureCivilian;//singleton

    public function TeamStructureCivilian(){
        super([0,0,0,25,0,0,0,0,0,0,0],25);
    }

    //
	public function loadUnits (gp:GBGroup) {
        UnitLoader.getUL().loadCivZomStyleUnits(gp);
	}

	public static function getTs(){
        if(ts==null){
            ts=new TeamStructureCivilian();
        }
        return ts;
    }


}