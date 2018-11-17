public class ArchetypeStormbreaker extends Archetype{
	private static var as:ArchetypeStormbreaker;
	
	public function ArchetypeStormbreaker(){
		super([4,3,3,11,3,3,3,3,5,3],"Electric","Ranged","Storm Breaker");
	}

    public static function getArch(){
		if(as==null){
			as=new ArchetypeStormbreaker();
		}
		return as;
	}
}