public class ArchetypeKnight extends Archetype{
	private static var ak:ArchetypeKnight;

	public function ArchetypeKnight(){
		super([4,11,3,3,3,3,5,3,3,3],"Blades","Melee","Knight");
	}

    public static function getArch(){
		if(ak==null){
			ak=new ArchetypeKnight();
		}
		return ak;
	}
}