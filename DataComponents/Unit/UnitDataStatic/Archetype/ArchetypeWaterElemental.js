public class ArchetypeWaterElemental extends Archetype{
	private static var as:ArchetypeWaterElemental;
	
	public function ArchetypeWaterElemental(){
		super([2,2,2,2,2,2,2,2,23,2],"Water","Ranged","Water Elemental");
	}

    public static function getArch(){
		if(awe==null){
			awe=new ArchetypeWaterElemental();
		}
		return awe;
	}
}