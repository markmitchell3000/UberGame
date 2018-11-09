public class UVGetUnitHashId implements UnitVisitor{
	
    private var hashid:String;

    //called by unit
	public function visitUnit(unit:UnitInner){
		av = unit.hashid;
	}

    public function getHashId(unit:Unit){
    	unit.acceptVisitor(this);
    	return hashid;
    }
}