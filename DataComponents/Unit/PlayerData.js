public class PlayerData extends UnitData{
	public var killfacts:UnitKillFacts;
	public var inventory:Item[];
	public var modelStringFolder:String;

	public function instantiatePlayerUnit(){
		var tempGroupModels=new TempGroupModels(modelStringFolder);
		super.instantiateUnit(tempGroupModels);
	}
}