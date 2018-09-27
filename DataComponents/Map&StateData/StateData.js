public class StateData{
	public var stateName: String;
	public var stateId:int;
	//public var ruler: TEAM_NAME; this is handled by StateControlHash
	//public var rulerLookup:StateControlHash;//Might be handled at higher level
	public var strength: int=1;
	public var adjacentStates = new ArrayList();
	//public var areaGameBoards: Hashtable = new Hashtable();//as player visits each game board, tile values are generated.
	public function StateData(nm:String, id:int, arr:int[]){

	}
}