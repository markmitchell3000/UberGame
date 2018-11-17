public class ArchetypeSeaSentinel extends Archetype{
	private static var as:ArchetypeSeaSentinel;
	
	public function ArchetypeSeaSentinel(){
		super([4,3,3,3,3,3,3,3,11,5],"Water","Ranged","Sea Sentinel");
	}

    public static function getArch(){
		if(as==null){
			as=new ArchetypeSeaSentinel();
		}
		return as;
	}
}