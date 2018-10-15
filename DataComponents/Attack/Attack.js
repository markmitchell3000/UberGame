 public class Attack{
	private var attGO : GameObject;
	//private var obj : AttackObjects;
	private var data: AttackData;

	public function Attack(aGo:GameObject, dt: AttackData){
        attGO=aGo;
        dt=data;
	}

	public function updateAttack(){
		//placeholder
		//move transform
		//update location in map
		//count down the death counter
	}
 
    //removes object
	public function destroyObject(){
		Destroy(attGO);
	    //Destroy(this.gameObject);//maybe requires different method of referencing object
    }

    public function getAttData(){
    	return data;
    }

    public function getLocation(){
    	//uses transform to update location in grid.
    }

}