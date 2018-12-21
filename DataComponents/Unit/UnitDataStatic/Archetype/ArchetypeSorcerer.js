public class ArchetypeSorcerer extends Archetype{
	private static var as:ArchetypeSorcerer;
	
	public function ArchetypeSorcerer(){
		super([4,3,3,5,3,3,11,3,3,3],"Magic","Ranged","Sorcerer");
	}

    public static function getArch(){
		if(as==null){
			as=new ArchetypeSorcerer();
		}
		return as;
	}
}