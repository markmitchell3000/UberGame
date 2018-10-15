public class UnitData{
	private var udInner:UDInner;

	public function Team(){
		udInner=new UDInner();
	} 

	public function acceptVisitor(v:Visitor){
		v.visit(udInner);
	}

        /*melee attacks are in 4x4 square, pursue is 6x6 square, pursue range is
         the limit that unit will chase before retargeting.  Pursuers get a 
         speed boost to prevent simply drawing units away while avoiding attacks
         */
	class UDInner{
                public var archetype:Archetype;
                public var team:Team;
                public var unitName:String;
                public var modelString:String;
                public var portraitString:String;
                public var pursueRange:int; //max, as the crow flies, distance that unit will pursue
                public var unitStats:UnitStats; 
                public var traits:Traits[];
                public var unitAttacks:UnitAttacks;
                public var killFacts:UnitKillFacts;
                public var pointLoc:Point; //current x and y location, integer estimate of transforms location relative to gameboard
                public var missionList:Mission[];//probably an arraylist of missions
                public var wornItems:Item[];//on unit, able to give them stat/trait boosts
                public var inventory:Item[];//inventory
	}

}
