public class ArchetypePoisonElemental extends Archetype{
    private static var ape:ArchetypePoisonElemental;

	public function ArchetypePoisonElemental(){
		super([2,2,2,2,2,2,2,23,2,2],"Poison","Melee","Poison Elemental");
	}

    public static function getArch(){
		if(ape==null){
			ape=new ArchetypePoisonElemental();
		}
		return ape;
	}
}