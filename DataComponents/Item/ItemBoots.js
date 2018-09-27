public class ItemBoots extends Item{
	public function ItemBoots(){
		super("boots");
	} 

	public function acceptVisitor(v:Visitor){
		super.acceptVisitor(v);
	}
}