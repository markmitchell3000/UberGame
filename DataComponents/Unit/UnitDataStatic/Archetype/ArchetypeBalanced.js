public class ArchetypeBalanced extends Archetype{
    private static var ab:ArchetypeBalanced;

	public function ArchetypeBalanced(){
		super([5,4,4,4,4,4,4,4,4,4],"Basic","Ranged","Balanced");
	}

	public static function getArch(){
		if(ab==null){
			ab=new ArchetypeBalanced();
		}
		return ab;
	}
}