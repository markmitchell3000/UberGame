public class TeamStructureQuadrupling extends TeamStructure{
	//[0]=base, [1]=tower, [2]=bonus, [3]=civilian, [4]=zombie, [5]=titan,
    //[6]=guardian,[7]=hunter, [8]=lts, [9]=soldier
	private var quadruplingArr:int[]=[0,0,0,0,0,1,4,4,16,64];
	private var size:int=89;

	public function loadUnits (gp:GBGroup) {
        UnitLoader.getUL().loadMissionStyleUnits(gp);
	}
}