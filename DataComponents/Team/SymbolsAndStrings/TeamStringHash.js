public class TeamStringHash{
	private static var tsh:TeamStringHash;
    public var teamString:Hashtable;

    public function TeamStringHash(){
    	teamStrings=new Hashtable();
    }

	public static function getModelString(subteam:String){
		if(tsh==null){
			tsh=new TeamStringHash()
		}
		return ((TeamString)tsh.teamString[subteam]).getFilePath();
	}

	public static function setTeamString(ts:TeamString){
		if(tsh==null){
			tsh=new TeamStringHash()
		}
		tsh[ts.getSubTeam()]=ts;
	}
}