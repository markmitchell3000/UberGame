public class Leader{
	public var name:String;
	public var modelNumber:int;//use the team/main_001/Titan to select leaders and highlords
	public var location:String;
	public var levelBonus:int;//this number is added to team level, teamLevel+levelbonus=leaderlevel
	public var bonusXp:int;//xp received upon defeating this enemy

	public function Leader(nm:String,num:int,loc:String,bonus:int,xp:int){
        name=nm;
        modelNumber=num;
        location=loc;
        levelbonus=bonus;
        bonusXp=xp;
	}
}