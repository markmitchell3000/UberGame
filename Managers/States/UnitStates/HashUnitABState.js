public class HashUnitABState{
	public unitABStates:HashTable;
    private static stateHash:HashUnitABState;

    public function TeamHash(){
        unitABStates["Walk"]=UnitABStateWalk.getABState();
        unitABStates["Scan"]=UnitABStateScan.getABState();
        unitABStates["Run"]=UnitABStateRun.getABState();
        unitABStates["RightStrafe"]=UnitABStateRightStrafe.getABState();
        unitABStates["LeftStrafe"]=UnitABStateLeftStrafe.getABState();
        unitABStates["Pursue"]=UnitABStatePursue.getABState();
        unitABStates["Idle"]=UnitABStateIdle.getABState();
        unitABStates["Flee"]=UnitABStateFlee.getABState();
        unitABStates["Dead"]=UnitABStateDead.getABState();
        unitABStates["Capture"]=UnitABStateCapture.getABState();
        unitABStates["BackWalk"]=UnitABStateBackwalk.getABState();
        unitABStates["BackRun"]=UnitABStateBackrun.getABState();
        unitABStates["Attack"]=UnitABStateAttack.getABState();//may be extended further for kinds of attacks
    }

	public static function getValue(str:String){
        if(stateHash==null){
            stateHash=new HashUnitABState();
        }
        return stateHash.unitABStates[str];
	}

}