public class GBGroup{
    public var groupId:int;
	public var powerLevel:int =1;
	public var teamStruct:TeamStructure;
	public var bonusTitan:boolean=false;
	public var size:int=0;//when brought down to 0 group can be removed.
	public var groupName:String;
	public var modelStringFolder:String;//helps build reference for the GBUnits, Units track the number that the are 
	public var teamName:TeamString;//Holds name and folder string
	private var units:GBUnitCollection;//holds GBUnits, id is key and unit is value.

	public function GBGroup(ts: TEAM_STRUCTURE, bt:boolean, lvl:int, ts:TeamString){
        teamStruct=ts;
        bonusTitan=bt;
        powerLevel=lvl;//in all cases except arena and mission, teams level is used, otherwise a level relative to the player.
        units= new GBUnitCollection();
        teamName=ts;
	}
    
    //call this after team is set 
    public function setStringFolder(folderName: String){
        modelStringFolder=teamName.getFolder(folderName);
    }

    //only main teams should be selected for single lane and triple lane
    public function generateUnits(){
        teamStruct.generate(units);      
    }

    //For retrieve head of list
    public function loadUnits(){
        units.getListHead();
    }
}

