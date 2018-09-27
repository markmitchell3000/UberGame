public class UnitAttacks{
	private var uaInner:UAInner;

	public function Item(){
		uaInner=new UAInner();
	} 

	public function acceptVisitor(v:Visitor){
		v.visit(itemInner);
	}

	class UAInner{
		public var attackPref:String;//what is the units primary attack, lesser attacks are not used by unit
		public var melee:int;
		public var meleeCooldown:int;
	    public var meleeMaxCd:int;
		public var ranged:int;
		public var rangedCooldown:int;
		public var rangedMaxCd:int;
		public var blast:int;
		public var blastCooldown:int;
		public var blastMaxCd:int;
		public var power:int;
		public var powerCooldown:int;
		public var powerMaxCd:int;
		public var aoe:int;
		public var aoeCooldown:int;
		public var aoeMaxCd:int;
		public var ultimate:int;
		public var ultimateCooldown:int;
        public var ultimateMaxCd:int;
        public var passivePowers: Traits [];//can include defense, or healing
	}
}