public class ItemArmor extends Item{
	public function ItemArmor(){
		super("armor");
	} 

	public function acceptVisitor(v:Visitor){
		super.acceptVisitor(v);
	}
}