public class ArchetypeGolem extends Archetype{
	private static var as:ArchetypeGolem;

	public function ArchetypeGolem(){
		super([23,2,2,2,2,2,2,2,2,2],"Basic","Melee","Golem");
	}

	public static function getArch(){
		if(awe==null){
			awe=new ArchetypeGolem();
		}
		return awe;
	}
}