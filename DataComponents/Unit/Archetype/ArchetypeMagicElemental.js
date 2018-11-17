public class ArchetypeMagicElemental extends Archetype{
	private static var ame:ArchetypeMagicElemental;

	public function ArchetypeMagicElemental(){
		super([2,2,2,2,2,2,23,2,2,2],"Magic","Ranged","Magic Elemental");
	}

    public static function getArch(){
		if(ame==null){
			ame=new ArchetypeMagicElemental();
		}
		return ame;
	}
}