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
	protected function move(fireAttackSpeed: float){
		myTransform.transform.Translate(Vector3.forward * fireAttackSpeed);
	}

    //children call super and maybe move or other things
    protected function updateAtt(){
        deathCounter-=1;
    }

    public function getAttObject(dam: DamageType){
        //abstract function designed to get a melee, passive, etc. att object
    }
}