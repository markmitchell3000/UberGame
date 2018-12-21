public class ArchetypeWindElemental extends Archetype{
	private static var as:ArchetypeWindElemental;
	
	public function ArchetypeWindElemental(){
		super([2,2,2,2,2,2,2,2,2,23],"Wind","Ranged","Wind Elemental");
	}

    public static function getArch(){
		if(awe==null){
			awe=new ArchetypeWindElemental();
		}
		return awe;
	}
}