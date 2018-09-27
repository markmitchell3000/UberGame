public class UnitObjects{
	static private uo: UnitObjects;

	public var turret_001 : GameObject;
	public var building_001 : GameObject;
	public var building_002 : GameObject;
	public var minion_001 : GameObject;
	public var civilian_001 : GameObject;
	public var hero_001 : GameObject;
	public function UnitObjects(){
		turret_001 = Resources.Load("Unit_Prefabs/Turret_001") as GameObject;

		building_001 = Resources.Load("Unit_Prefabs/Building_001") as GameObject;
		building_002 = Resources.Load("Unit_Prefabs/Building_002") as GameObject;

		minion_001 = Resources.Load("Unit_Prefabs/Minion_001") as GameObject;
		civilian_001 = Resources.Load("Unit_Prefabs/Civilian_001") as GameObject;

		hero_001 = Resources.Load("Unit_Prefabs/Player_001") as GameObject;
	}

	static public getUO(){
		if(uo==null){
			uo= new UnitObjects();
		}
		return uo;
	}
}