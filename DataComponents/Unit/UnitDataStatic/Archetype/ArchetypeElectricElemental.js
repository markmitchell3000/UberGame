public class ArchetypeElectricElemental extends Archetype{
	private static var aee:ArchetypeElectricElemental;

	public function ArchetypeElectricElemental(){
		super([2,2,2,23,2,2,2,2,2,2],"Electric","Ranged","Electric Elemental");
	}

    public static function getArch(){
		if(aee==null){
			aee=new ArchetypeElectricElemental();
		}
		return aee;
	}
}