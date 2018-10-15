public function GBUnitNode(){
	public var last:GBUnitNode;
	public var next:GBUnitNode;
	private var data:GBUnit;

	public function GBUnitNode(unit:GBUnit){
		data=unit;
	}

	public function getData(){
		return data;
	}

    //node should be assumed to be without last and next
    public function insertNext(node:GBUnitNode){
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
    public function insertLast(node:GBUnitNode){
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