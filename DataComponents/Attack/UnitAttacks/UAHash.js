public class UAHash{
	//used by UVAttackSelector for selecting which attack to perform
	public var attackPref:String;//what is the units primary attack, lesser attacks are not used by unit
	public var uats:Hashtable; //string keys should match attack pref and other possible strings
    public var passivePowers: Traits [];//can include defense, or healing
    //not sure if this is where attackpref are set

	public function acceptVisitor(v:Visitor){
		v.visit(itemInner);
	}

    public function UAHash(){
        uats= new Hashtable();
        uats["melee"]=new UATMelee();
        uats["ranged"]=new UATRanged();
        uats["blast"]=new UATBlast();
        uats["power"]=new UATPower();
        uats["aoe"]=new UATAoe();
        uats["ultimate"]=new UATUltimate();
        uats["passive"]=new UATPassive();//called every turn regardless of other attacks
    }
}

		// public var melee:int; //level of attack
		// public var meleeCooldown:int;//used as the template for the death counter when creating an attacktype
		// public var ranged:int;
		// public var rangedCooldown:int;
		// public var rangedDistance:int;
		// public var blast:int;
		// public var blastCooldown:int;
		// public var power:int;
		// public var powerCooldown:int;
		// public var aoe:int;
		// public var aoeCooldown:int;
		// public var ultimate:int;
		// public var ultimateCooldown:int;