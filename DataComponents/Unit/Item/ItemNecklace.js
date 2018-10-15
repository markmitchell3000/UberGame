public class ItemNecklace extends Item{
	public function ItemNecklace(){
		super("necklace");
	} 

	public function acceptVisitor(v:Visitor){
		super.acceptVisitor(v);
	}
}