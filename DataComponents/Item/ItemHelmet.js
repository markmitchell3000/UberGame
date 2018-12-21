public class ItemHelmet extends Item{
	public function ItemHelmet(){
		super("helmet");
	} 

	public function acceptVisitor(v:Visitor){
		super.acceptVisitor(v);
	}
}