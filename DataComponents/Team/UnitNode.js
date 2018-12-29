/*Identical to GBUnitNode except this stores only data of Unit type.*/
public function UnitNode extends Node(){
	private var data:Unit;

	public function GBUnitNode(unit:Unit){
		data=unit;
	}

	public function getData(){
		return data;
	}

    public function getHashId(){
        var unitHash=new UVGetUnitHashLoc()
        return unitHash.getHashId(data)
    }

    //node should be assumed to be without last and next
    public function insertNext(node:UnitNode){
        super.insertNext(node);
    }

    //node should be assumed to be without last and next
    public function insertLast(node:UnitNode){
        super.insertLast(node);
    }
}