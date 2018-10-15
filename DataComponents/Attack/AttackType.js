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
public class AttackType{
    private var deathCounter: int;
    private var attRadius: int;
    private var attLength: int;

	public function AttackType(cnt:int, rd: int, lth:int){
        deathCounter=cnt;
        attRadius=rd;
        attLength=lth;
	}

	//called by blast and ranged, maybe others...  may not be here, may be extended
	protected function getForwardVector(fireAttackSpeed: float, v3: Vector3){
        return (v3.forward * fireAttackSpeed) ;
		//myTransform.transform.Translate(Vector3.forward * fireAttackSpeed);
	}

    //children call super and maybe move or other things
    protected function updateAtt(){
        deathCounter-=1;
    }

    //maybe should just be boolean check if 0 or less
    public function getDeathCnt(){
        return deathCounter;
    }

    public function getAttRadius(){
        return attRadius;
    }

    public function getAttLength() {
        return attLength;
    }

    public function getAttObject(dam: DamageType){
        //abstract function designed to get a melee, passive, etc. att object
    }
}