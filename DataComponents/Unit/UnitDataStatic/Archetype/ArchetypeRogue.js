public class ArchetypeRogue extends Archetype{
 	private static var ar:ArchetypeRogue;

	public function ArchetypeRogue(){
		super([9,3,3,3,3,3,3,3,3,11],"Wind","Ranged","Rogue");
	}

    public static function getArch(){
		if(ar==null){
			ar=new ArchetypeRogue();
		}
		return ar;
	}
}