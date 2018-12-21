public class ItemRing extends Item{
	public function ItemRing(){
		super("ring");
	} 

	public function acceptVisitor(v:Visitor){
		super.acceptVisitor(v);
	}
}