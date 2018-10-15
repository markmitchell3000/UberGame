public class Controller extends MonoBehaviour{
	public var unitState:UnitStateInfo;//current animation/behavior state
	public var isAnimated:boolean;//some units are not animated, so don't call animation controller
	public var unit:Unit;//Unit managed by controller
    private var target:GameObject;//this is where unit will walk to,escort, collect or attack if in range.
    protected var rotationSpeed:float=2.0;//unsure what this should be but this should be true of all units
    
    public function Controller(unt:Unit, animated:boolean){
        unit=unt;
        isAnimated=animated;
    }
    //
    //public var targetInRange(unitLoc:Vector3){}

    /*Bot or player selects an attack data which stores attacktype, damagetype,
     location, vector, team and power.  The controller creates an attack which
     is the pair of data and an actual game object.  This object can then be 
     moved or destroyed based on its data*/
	public function createAttack (attData:Attack) {
	    var childObject : GameObject;
		//yield WaitForSeconds(attackSpellSpeed/4);
		var uvGetAvatar:UVGetAvatar=new UVGetAvatar();
		var tempAvatar:GameObject=uvGetAvatar.getAvatar(unit);
		var tempPos = tempAvatar.transform.position;
		var tempRot = tempAvatar.transform.rotation;
		tempPos.y += 5;
        childObject = Instantiate(attData.getAttObject(),tempPos,tempRot);
        return new Attack(childObject, attData);
        /*
		begins the cooldown timer on the attack for the unit and adds 
		attack object to the scene, attacks are then managed independently 
		*/
	}

    //gets the attack string based on what is the attack that has cooled down
	private function selectAttack(){
		var tempUVAS=new UVAttackSelecter();
		return tempUVAS.getAttackString(unit);//used to creat attacks, might be used only by bots
	}
}



