public class UVGetAvatar implements UnitVisitor{
	
    private var av:GameObject;

    //called by unit
	public function visitUnit(unit:UnitInner){
		av = unit.avatar;
	}

    public function getAvatar(unit:Unit){
    	unit.acceptVisitor(this);
    	return av;
    }
}