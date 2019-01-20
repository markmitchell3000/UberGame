/*used to iterate through all attacks and will remove them as they die.*/
public class AttackNode extends Node{
	private var data:Attack;

	public function AttackNode(att:Attack){
		data=att;
	}

	public function getData(){
		return data;
	}

}