public class TeamStructureDoubling extends TeamStructure{
	//[0]=base, [1]=tower, [2]=bonus, [3]=civilian, [4]=zombie, [5]=titan,
    //[6]=guardian,[7]=hunter, [8]=lts, [9]=soldier
	private var doublingArr:int[]=[0,0,0,0,0,1,2,2,4,8];
	private var size:int=17;

	public function loadUnits (gp:GBGroup) {
        UnitLoader.getUL().loadMissionStyleUnits(gp);
	}
}