//used to iterate through all attacks and will remove them as they die.
//should probably share parent with GBUnitNode
public function AttackNode(){
	public var last:AttackNode;
	public var next:AttackNode;
	private var data:Attack;

	public function AttackNode(att:Attack){
		data=att;
	}

	public function getData(){
		return data;
	}

    //node should be assumed to be without last and next
    public function insertNext(node:AttackNode){
    	if(next==null){
    		next=node;
    	}
    	else{
    		next.last=node;
    		node.next=next;
    		node.last=this;
    		next=node;
    	}
    }

    //node should be assumed to be without last and next
    public function insertLast(node:AttackNode){
    	if(last==null){
    		last=node;
    	}
    	else{
    		last.last=node;
    		node.next=this;
    		node.last=last;
    		last=node;
    	}
    }

    public function removeSelf(){
    	if(last !=null){
    		last.next=next;
    	}
    	if(next !=null){
    		next.last=last;
    	}	
    }
}