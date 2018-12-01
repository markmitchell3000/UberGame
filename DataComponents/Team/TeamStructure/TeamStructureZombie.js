public class TeamStructureZombie extends TeamStructure{
    private static var ts:TeamStructureZombie;//singleton

    public function TeamStructureZombie(){
        super([0,0,0,0,25,0,0,0,0,0,0],25,"zombie");
    }

	public static function getTs(){
        if(ts==null){
            ts=new TeamStructureZombie();
        }
        return ts;
    }
}
