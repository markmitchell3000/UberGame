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
    public var attStats: AttackStats;//

    public function Attack(as:AttackStats,tf:Transform){
    	attStats=as;
        var attModel= AttackTypeHash.getValue(as.type).getAttackObject(as.mainDamage);
        Instantiate(bld, tf.position, tf.rotation);
        AttackCollection.getAC().addAttackNode(new AttackNode(this));//adds the attack into the collection
    }

    public function updateAttack(timeChange:float){
        if(attStats.speed>0){
            moveAttack(timeChange);//move transform
        }
        var ids: List.<String>=UnitLocation.getUnitLocHash().getAttackCollisions(this);
        for(var id: String in ids){
            issueDamage(id);//if the unit is an enemy issue damage
        }
        attStats.lifespan-=timeChange;//shorten lifespan   
    }
 
     protected function moveAttack(time:float){
        var attackTF=attObject.transform;
        var speed=unit.unitData.unitStats.moveSpeed;
        attackTf.position += attackTf.forward * attStats.speed * time;
    }

    //removes object
    public function destroyObject(){
        Destroy(attObject);
        //Destroy(this.gameObject);//maybe requires different method of referencing object
    }


    //checks for collision with enemy, issue damage
    public function issueDamage(unitId:String){
        var otherTeam:String=((Unit)UnitCollection.getUC().getUnit(unitId)).unitData.team;
        if(EnemyHash.checkState(attStats.team, otherTeam){

        }
    }

}