public class UnitData{
	private var udInner:UDInner;

	public function Team(){
		udInner=new UDInner();
	} 

	public function acceptVisitor(v:Visitor){
		v.visit(udInner);
	}

	class UDInner{
                public var archetype:Archetype;
                public var team:Team;
                public var unitName:String;
                public var modelString:String;
                public var portraitString:String;
                public var unitStats:UnitStats;
                public var pursueRange:int;//maxed at a finite point but may scale some, attacks are 1 for melee 3 for ranged, maybe more
                public var traits:Traits[];
                public var unitAttacks:UnitAttacks;
                public var killFacts:UnitKillFacts;
                public var pointLoc:Point; //current x and y location, integer estimate of transforms location relative to gameboard
                public var missionList:Mission[];//probably an arraylist of missions
                public var wornItems:Item[];//on unit, able to give them stat/trait boosts
                public var inventory:Item[];//inventory
	}

}
