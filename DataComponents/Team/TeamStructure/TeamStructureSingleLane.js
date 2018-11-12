public class TeamStructureSingleLane extends TeamStructure{
	//[0]=base, [1]=tower, [2]=bonus, [3]=civilian, [4]=zombie, [5]=titan,
    //[6]=guardian,[7]=hunter, [8]=lts, [9]=soldier
	private var singleLaneArr:int[]=[1,4,1,0,0,1,2,2,5,10];
	private var size:int=26;
	private static var ts:TeamStructureSingleLane;//singleton
	
	public function loadUnits (gp:GBGroup) {
        UnitLoader.getUL().loadWarStyleUnits(gp);
	}

	public static function getTs(){
        if(ts==null){
            ts=new TeamStructureSingleLane();
        }
        return ts;
    }
}