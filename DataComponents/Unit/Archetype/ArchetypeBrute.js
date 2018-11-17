public class ArchetypeBrute extends Archetype{
    private static var ab:ArchetypeBrute;

	public function ArchetypeBrute(){
		super([15,3,3,3,5,3,3,3,3,3],"Basic","Melee","Brute");
	}

    public static function getArch(){
		if(ab==null){
			ab=new ArchetypeBrute();
		}
		return ab;
	}
}