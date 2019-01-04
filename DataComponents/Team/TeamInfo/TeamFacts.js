//Team Facts are stored and loaded for a given world
public class TeamFacts{
	public var name:String;
	public var level:int;
	public var wealth:int;
	public var taxRate:int;//Team wealth per minute
	public var numRegions:int;
	public var capital:String;//Selected from team StateControlHash 
	public var highLords:HighLords;//there is an emperor and  4 leaders (N,E,S,W)
	public var ranking:int;//Set later based on number of regions, wealth, level and value of traits
	public var traits:HashTable;//Maybe set values at random, bonus damage given to units
	public var isDefeated:boolean;//

	public function TeamFacts(nm:String,cp:String){
        name=nm;
        level=1;
        wealth=0;
        taxRate=1000;
        numRegions=4;
        capital=cp;
        if(TeamHash.getValue(nm).hasLeader()){
            highLords=new HighLords(nm);
        }
        else{
        	highLords=null;//not sure if this is needed.
        }
        ranking=8;//Default value civilians, workers and zombies are excluded, this is the lowest a team can be at current
        generateBaseTraits();
        isDefeated=false;
	}

	private function generateBaseTraits(){
//basic, blades, earth, electric, fire, ice, magic, poison, water, wind
        traits=new HashTable();
        traits["Basic"]=new Traits("Basic");
        traits["Blades"]=new Traits("Blades");
        traits["Earth"]=new Traits("Earth");
        traits["Electric"]=new Traits("Electric");
        traits["Fire"]=new Traits("Fire");
        traits["Ice"]=new Traits("Ice");
        traits["Magic"]=new Traits("Magic");
        traits["Poison"]=new Traits("Poison");
        traits["Water"]=new Traits("Water");
        traits["Wind"]=new Traits("Wind");
	}
}