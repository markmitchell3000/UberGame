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

    
    public function update(timeChange:float){
        //move all attacks and check for collisions, issue damage
        //if attack has aged past its limit destroy the attack and remove from list
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