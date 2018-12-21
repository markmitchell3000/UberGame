public class ItemBracers extends Item{
	public function ItemBracers(){
		super("bracers");
	} 

	public function acceptVisitor(v:Visitor){
		super.acceptVisitor(v);
	}
}