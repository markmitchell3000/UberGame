public class ArchetypeNomad extends Archetype{
	private static var an:ArchetypeNomad;

	public function ArchetypeNomad(){
		super([4,3,11,3,3,5,3,3,3,3],"Earth","Melee","Nomad");
	}

    public static function getArch(){
		if(an==null){
			an=new ArchetypeNomad();
		}
		return an;
	}
}