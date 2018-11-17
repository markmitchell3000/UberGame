public class ArchetypeIceElemental extends Archetype{
	private static var aie:ArchetypeIceElemental;

	public function ArchetypeIceElemental(){
		super([2,2,2,2,2,23,2,2,2,2],"Ice","Melee","Ice Elemental");
	}

    public static function getArch(){
		if(aie==null){
			aie=new ArchetypeIceElemental();
		}
		return aie;
	}
}