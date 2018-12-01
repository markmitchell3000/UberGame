public class TeamStructureTripling extends TeamStructure{
	private static var ts:TeamStructureTripling;//singleton

    public function TeamStructureTripling(){
    	super([0,0,0,0,0,1,3,3,9,27,0],43,"tripling");
    }

	public static function getTs(){
        if(ts==null){
            ts=new TeamStructureTripling();
        }
        return ts;
    }
}
