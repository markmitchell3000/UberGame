public class UVGetUnitHashLoc implements UnitVisitor{
	
    private var locations:Point[];

    //called by unit
	public function visitUnit(unit:UnitInner){
		av = unit.avatar;
	}

    public function getHashLocations(unit:Unit){
    	unit.acceptVisitor(this);
    	return locations;
    }
}