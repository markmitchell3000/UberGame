public class AttackCollection{
	private var listHead:AttackNode;
    private static var ac:AttackCollection

    public function AttackCollection(){
    }

    public static function getAC(){
        if(ac==null){
            ac=new AttackCollection();
        }
        return ac;
    }

    /*Move all attacks and check for collisions, issue damage.
      If attack has aged past its limit destroy the attack and remove from 
      list*/
    public function update(timeChange:float){
        var curNode:AttackNode=listHead;
        while(!(curNode==null)){
            ((Attack)curNode.getData()).updateAttack(timeChange);
            if(((Attack)curNode.getData()).attStats.lifespan<=0){
                var temp:AttackNode=curNode.next;
                curNode.removeSelf();
                curNode=temp;
            }
        }
    }

    public function addAttackNode(newNode:AttackNode){
        if(listHead==null){
            listHead=newNode;
        }
        else {
            listHead.insertLast(newNode);
        }
    }

}