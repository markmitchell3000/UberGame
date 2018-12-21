public class ArchetypeBladeElemental extends Archetype{
    private static var abe:ArchetypeBladeElemental;

	public function ArchetypeBladeElemental(){
		super([2,23,2,2,2,2,2,2,2,2],"Blades","Melee","Blade Elemental");
	}

	public static function getArch(){
		if(abe==null){
			abe=new ArchetypeBalanced();
		}
		return abe;
	}
}