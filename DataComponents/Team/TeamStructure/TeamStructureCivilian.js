public class TeamStructureCivilian extends TeamStructure{
	//[0]=base, [1]=tower, [2]=bonus, [3]=civilian, [4]=zombie, [5]=titan,
    //[6]=guardian,[7]=hunter, [8]=lts, [9]=soldier
	private var civilianArr:int[]=[0,0,0,25,0,0,0,0,0,0];
	private var size =25;

	public function loadUnits (gp:GBGroup) {
        UnitLoader.getUL().loadCivZomStyleUnits(gp);
	}
}