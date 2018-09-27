public class TeamFacts{
	private var tfInner:TFInner;

	public function TeamFacts(){
		tfInner=new TFInner();
	} 

	public function acceptVisitor(v:Visitor){
		v.visit(tfInner);
	}

	class TFInner{
		public var level:int;
		public var wealth:int;
		public var taxRate:int;
		public var numRegions:int;
		public var capital:String;//Selected from team StateControlHash 
		public var emperor:Leader;
		public var highLords:Leader[];
		public var ranking:int;
	}
}