public class PriorityQueue{
	var isMaxHeap: boolean;
	var pqBST: List.<NodeObject> =new List.<NodeObject>();
	public function PriorityQueue(isMaxHeap: boolean){
		this.isMaxHeap = isMaxHeap;
	}

	public function poll(){
		var tempHead: NodeObject = pqBST[0];
		var size = pqBST.Count;
        pqBST[0] = pqBST[size-1];
        pqBST.RemoveAt(size-1);
		swapRootToLeaf();
		return tempHead;
	}

	public function peek(){
		return pqBST[0];
	}

	public function add(newNode: NodeObject){
		pqBST.Add(newNode);
		swapLeafToRoot();
    }

    private function swapRootToLeaf(){
        var index =0;
        var size = pqBST.Count;
        while(index<(size-1)){
        	var tempIdx = (index*2)+1;
        	if(tempIdx<size){
                if((tempIdx+1)>size){
                    if(isMaxHeap){
                    	if(pqBST[tempIdx].value<pqBST[tempIdx+1].value){
                    		compareSwap(index, tempIdx+1);
                    		index = tempIdx+1;
                    	}
                    	else{
                    		compareSwap(index, tempIdx);
                    		index = tempIdx;
                    	}
                    }
                    else{
                    	if(pqBST[tempIdx].value>pqBST[tempIdx+1].value){
                    		compareSwap(index, tempIdx+1);
                    		index = tempIdx+1;
                    	}
                    	else{
                    		compareSwap(index, tempIdx);
                    		index = tempIdx;
                    	}
                    }
                }
                else{
                	compareSwap(index, tempIdx);
                    break;
                }
            }
            else{
            	break;
            }
        }
    }

    private function swapLeafToRoot(){
        var index = pqBST.Count-1;
        while(index>0){
        	var tempIdx: int = (index-1)/2;
        	if(compareSwap(tempIdx, index)){
        		index=tempIdx;
        	}
        	else{
        		break;
        	}
        }
    }

    //performs swap if the conditions are met and returns true if a swap 
    //occurs, otherwise returns false if no swap occurs.
    private function compareSwap(index1: int, index2: int){
    	var temp1= pqBST[index1];
    	var temp2= pqBST[index2];
    	if(isMaxHeap){
    		if(temp1.value<temp2.value){
    			pqBST[index1]=temp2;
    			pqBST[index2]=temp1;
    			return true;
    		}
    		else{
    			return false;
    		}
    	}
    	else{
    		if(temp1.value>temp2.value){
    			pqBST[index1]=temp2;
    			pqBST[index2]=temp1;
    			return true;
    		}
    		else{
    			return false;
    		}
    	}
    }
}

