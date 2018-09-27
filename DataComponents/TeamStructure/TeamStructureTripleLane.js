public class TeamStructureTripleLane extends TeamStructure{
	//[0]=base, [1]=tower, [2]=bonus, [3]=civilian, [4]=zombie, [5]=titan,
    //[6]=guardian,[7]=hunter, [8]=lts, [9]=soldier
	private var tripleLaneArr:int[]=[1,6,3,0,0,1,3,3,10,30];
	private var size:int=57;

	public function loadUnits (gp:GBGroup) {
        UnitLoader.getUL().loadWarStyleUnits(gp);
	}
}