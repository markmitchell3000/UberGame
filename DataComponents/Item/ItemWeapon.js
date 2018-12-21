public class ItemWeapon extends Item{
	public function ItemWeapon(){
		super("weapon");
	} 

	public function acceptVisitor(v:Visitor){
		super.acceptVisitor(v);
	}
}