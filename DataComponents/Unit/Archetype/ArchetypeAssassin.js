public class ArchetypeAssassin extends Archetype{
    private static var aa:ArchetypeAssassin;

	public function ArchetypeAssassin(){
		super([4,5,3,3,3,3,3,11,3,3],"Poison", "Melee", "Assassin");
	}

	public static function getArch(){
		if(aa==null){
			aa=new ArchetypeAssassin();
		}
		return aa;
	}
}
