/*This is where teamfacts data is accessed.  When saved data is loaded these 
values are set, otherwise the team facts are created.  This requires access to 
the leader tuples provided by each team.*/
public class TeamFactsHash{
    private static var tfh:TeamFactsHash;
    public var factTable:HashTable;//Collection of TeamFacts where the name is the key

    public function TeamFactsHash(){
    	factTable=new HashTable();
    	factTable["Eternian Republic"]=new TeamFacts("Eternian Republic","not yet supported");
    	factTable["Night Horde"]=new TeamFacts("Night Horde","not yet supported");
    	factTable["Initiative"]=new TeamFacts("Initiative","not yet supported");
    	factTable["Pantheon"]=new TeamFacts("Pantheon","not yet supported");
    	factTable["Sentai Clan"]=new TeamFacts("Sentai Clan","not yet supported");
    	factTable["Shadow Empire"]=new TeamFacts("Shadow Empire","not yet supported");
    	factTable["United League"]=new TeamFacts("United League","not yet supported");
    	factTable["Utrom Sith Alliance"]=new TeamFacts("Utrom Sith Alliance","not yet supported");
    	factTable["Civilians"]=new TeamFacts("Civilians","not yet supported");
    	factTable["Zombies"]=new TeamFacts("Zombies","not yet supported");
    	factTable["Workers"]=new TeamFacts("Workers","not yet supported");
    }

    /*This is where and individual teams facts are referenced.  These are often 
    loaded by groups and then used to overwrite stored data as teams upgrade or 
    change leadership.*/
	public static function getValue(str:String){
        if(tfh==null){
            tfh=new TeamFactsHash();
        }
        return (TeamFacts)tfh.factTable[str];
	}
}