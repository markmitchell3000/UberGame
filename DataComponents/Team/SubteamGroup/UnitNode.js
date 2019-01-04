/*Linked list of unitdata, units (the pairing of unitdata and models) are stored
in hashtable according to their unique hashid stored in the unitdata class*/
public function UnitNode extends Node(){
	private var data:UnitData;

	public function UnitNode(unit:UnitData){
		data=unit;
	}

	public function getData(){
		return data;
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