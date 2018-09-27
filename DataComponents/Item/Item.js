public class Item{
	protected var itemInner:ItemInner;

	public function Item(str:String){
		itemInner=new ItemInner(str);
	} 

	public function acceptVisitor(v:Visitor){
		v.visit(itemInner);
	}

	class ItemInner{
		public var itemType:String;
		public var icon:String;//string used to load icon image
        public var traits: Traits [];
        public var levelReq:int;
        public var baseStats:BaseStats;
        public function ItemInner(s:String){
        	itemType=s;
        }
	}
}