/*Identical to UnitNode except this stores only data of GBUnit type.*/
public class GBUnitNode extends Node(){
	private var data:GBUnit;

	public function GBUnitNode(unit:GBUnit){
		data=unit;
	}

	public function getData(){
		return data;
	}

    //node should be assumed to be without last and next
    public function insertNext(node:GBUnitNode){
        super.insertNext(node);
    }

    //node should be assumed to be without last and next
    public function insertLast(node:GBUnitNode){
        super.insertLast(node);
    }
}