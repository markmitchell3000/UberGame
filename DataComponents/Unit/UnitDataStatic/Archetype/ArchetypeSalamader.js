public class ArchetypeSalamander extends Archetype{
	private static var as:ArchetypeSalamander;

	public function ArchetypeSalamader(){
		super([4,3,5,3,11,3,3,3,3,3],"Fire","Ranged","Salamander");
	}

    public static function getArch(){
		if(as==null){
			as=new ArchetypeSalamander();
		}
		return as;
	}
}