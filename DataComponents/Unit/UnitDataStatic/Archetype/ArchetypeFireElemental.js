public class ArchetypeFireElemental extends Archetype{
	private static var afe:ArchetypeFireElemental;

	public function ArchetypeFireElemental(){
		super([2,2,2,2,23,2,2,2,2,2],"Fire","Ranged","Fire Elemental");
	}

    public static function getArch(){
		if(afe==null){
			afe=new ArchetypeFireElemental();
		}
		return afe;
	}
}