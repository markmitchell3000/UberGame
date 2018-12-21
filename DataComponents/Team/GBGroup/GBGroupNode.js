/*Used to store the GBGroups of a particular gameboard*/
public function GBGroupNode extends Node(){
	private var data:GBGroup;

	public function GBGroupNode(group:GBGroup){
		data=group;
	}

	public function getData(){
		return data;
	}

    //node should be assumed to be without last and next
    public function insertNext(node:GBGroupNode){
        super.insertNext(node);
    }

    //node should be assumed to be without last and next
    public function insertLast(node:GBGroupNode){
        super.insertLast(node);
    }
}