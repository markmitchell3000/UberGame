/*
Unit is at the center of 3x3 grid, the attack either orginates at the center 
of the grid or directly in front of the unit.  Each attack has a radius and a 
length, melee has a radius of 0 (meaning it is a single square) and length of 
1, ranged has the same, aoe/ultimate/passive have a radius of 1 or more 
(centered on player plus a tile or 2 or 3 at most in any direction), blast and
power have a 0 radius with a length of some size essentially making them a 
vector which takes damage.
*/
public class AttackType{
    private var attRange:int;
    private var unitCentered:Boolean;
    private var deathCounter: int;

	public function AttackType(ar:int, uc:Boolean, cnt:int){
        attRange=ar;
        unitCentered=uc;
        deathCounter=cnt;
	}

	//called by blast and ranged, maybe others
	protected function getForwardVector(fireAttackSpeed: float, v3: Vector3){
        return (v3.forward * fireAttackSpeed) ;
		//myTransform.transform.Translate(Vector3.forward * fireAttackSpeed);
	}

    //children call super and maybe move or other things
    protected function updateAtt(){
        deathCounter-=1;
    }

    public function getAttObject(dam: DamageType){
        //abstract function designed to get a melee, passive, etc. att object
    }
}