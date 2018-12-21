public class ArchetypeEarthElemental extends Archetype{
	private static var aee:ArchetypeEarthElemental;

	public function ArchetypeEarthElemental(){
		super([2,2,23,2,2,2,2,2,2,2],"Earth","Melee","Earth Elemental");
	}

	public static function getArch(){
		if(aee==null){
			aee=new ArchetypeEarthElemental();
		}
		return aee;
	}
}