public class TeamStructureZombie extends TeamStructure{
	//[0]=base, [1]=tower, [2]=bonus, [3]=civilian, [4]=zombie, [5]=titan,
    //[6]=guardian,[7]=hunter, [8]=lts, [9]=soldier
	private var zombieArr:int[]=[0,0,0,0,25,0,0,0,0,0];
	private var size:int=25;
    private static var ts:TeamStructureZombie;//singleton

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