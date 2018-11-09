public function Node(){
	public var last:Node;
	public var next:Node;
    //children have data

	public function getData(){
	}

    //node should be assumed to be without last and next
    public function insertNext(node:Node){
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
    public function insertLast(node:Node){
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