public class ItemShoulders extends Item{
	public function ItemShoulders(){
		super("shoulders");
	} 

	public function acceptVisitor(v:Visitor){
		super.acceptVisitor(v);
	}
}