public class Team{
    public var name:String;
    public var symbol:TeamSymbol;
    public var isDefeated:boolean=false;
    public var traits:Traits[];//possible hashmap by strin of fire, ice etc.
    public var teamFacts:TeamFacts;
    public var enemyHash:EnemyHash;
    //public var stateLookup:StateControlHash;//controlled at higher level
    
    public function Team(nm:String, symString:String){
        name=nm;
        symbol=new TeamSymbol(symString);
        enemyHash=EnemyHash.getEH();
    }
}