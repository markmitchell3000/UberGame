/*
Unit is at the center of 3x3 grid, the attack either orginates at the center 
of the grid or directly in front of the unit, this is handled by the AttackData 
class.  Each attack has a radius and a length, melee has a radius of 0 (meaning
it is a single square) and length of 0 (length represent magnitude in the 
direction of the vector), ranged has the same, aoe/ultimate/passive have a 
radius of 1 or more (centered on player plus a tileor 2 or 3 at most in any 
direction), blast and power have a 0 radius with a length of some size 
essentially making them a vector which takes damage.
*/
/*Attack is pairing of the game object for the attack and the data that the 
attack is made from.*/
public class Attack{
    public var attObject : GameObject;
    private var attStats: AttackStats;//

    public function Attack(as:AttackStats,tf:Transform){
    	attStats=as;
        var attModel= AttackTypeHash.getValue(as.type).getAttackObject(as.mainDamage);
        Instantiate(bld, tf.position, tf.rotation);
        AttackCollection.getAC().addAttackNode(new AttackNode(this));//adds the attack into the collection
    }

    public function updateAttack(){
        //placeholder
        //move transform
        //update location in map
        //count down the death counter
    }
 
    //removes object
    public function destroyObject(){
        Destroy(attObject);
        //Destroy(this.gameObject);//maybe requires different method of referencing object
    }


    //******TO DO ******
        //called by blast and ranged, maybe others...  may not be here, may be extended
    protected function getForwardVector(fireAttackSpeed: float, v3: Vector3){
        return (v3.forward * fireAttackSpeed) ;
        //myTransform.transform.Translate(Vector3.forward * fireAttackSpeed);
    }

    //checks for collision with enemy
    public function checkStatus(t:Team){
        t2= attStats.getTeam();//attacks team of origin
        //check if attack is colliding with an enemy team unit
    }

}