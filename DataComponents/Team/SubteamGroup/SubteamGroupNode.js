/*Used to store the SubteamGroups of a particular gameboard*/
public function SubteamGroupNode extends Node(){
	private var data:SubteamGroup;

	public function SubteamGroupNode(group:SubteamGroup){
		data=group;
	}

	public function getData(){
		return data;
	}

    //node should be assumed to be without last and next
    public function insertNext(node:SubteamGroupNode){
        super.insertNext(node);
    }

    //node should be assumed to be without last and next
    public function insertLast(node:SubteamGroupNode){
        super.insertLast(node);
    }

    //remove self in parent class.
}