/*Used for tracking the name of the group and how to load the models*/
public class TeamString{
    private var team:String;
    private var subteam:String;
    private var filepath:String;

    public function TeamString(t:String, st: String, fp:String){
        team = t;
        subteam = st;
        filepath = fp;
    }

    public function getTeam(){
        return team;
    }

    public function getSubTeam(){
        return subteam;
    }

    public function getFilePath(){
        return filepath
    }
}    

