public class ArchetypeDarkDweller extends Archetype{
    private static var add:ArchetypeDarkDweller;

	public function ArchetypeDarkDweller(){
		super([4,3,3,3,5,11,3,5,3,3],"Ice","Melee","Dark Dweller");
	}

    public static function getArch(){
		if(add==null){
			add=new ArchetypeDarkDweller();
		}
		return add;
	}
}