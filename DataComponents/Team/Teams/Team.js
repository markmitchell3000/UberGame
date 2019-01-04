/*This is the static data about any given team, the fact data can be retrieve by
 using the team name.*/
public class Team{
    public var name:String;
    public var symbol:String;//TeamSymbol key
    public var subteams:ArrayList;//used for getting names and folders of each of the subteams
    //public var stateLookup:StateControlHash;//controlled at higher level

    public function Team(nm:String, symString:String,st:ArrayList){
        name=nm;
        symbol=symString;//new TeamSymbol(symString);
        TeamSymbolHash.setValue(symString);
        subteams=st;
    }

    public static function getTeam(){
        //abstract method implemented by children, the different teams
    }

    public function hasLeaders(){
        return true;//overridden for zombies, civilians, workers for now.
    }

    public function isEnemy(team0:String){
        //ensure that relationships are initialized
        return EnemyHash.getEH().checkState(name,team0);
    }
    
    //used for making and updating TeamFacts
    public function getRandomLeaderTuple(){
        //Leader Tuples have name and model number, loaded from team/main_001/titan 
    }

    public function getTeamFacts(){
        return TeamFactsHash.getValue(name);
    }

    public function getSymbol(){
        var sym =TeamSymbolHash.getValue();
        if(sym==null){
            sym=TeamSymbolHash.setValue(symbol);//should only happen if symbol is lost or never set.
        }
        return sym;
    }
}