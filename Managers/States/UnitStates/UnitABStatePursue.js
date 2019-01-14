/*
    Similar to run but since the target is moving rescan every half second
*/ 
public class UnitABStatePursue extends UnitABState{

    public function UnitABStatePursue(){
    	super("Pursue",0.5);
    }

    public function update(unit:Unit,time:float){
        if(UnitCollection.getUC().unitIsDead(((BotData)unit).targetHashId)){
            unit.unitData.setState("Scan");//unit being chases is dead so rescan
        }
        else{
            runToTarget(unit,time);
        }
    }


    /*Unit moves walks/runs (handled by speed value provided) the target, first 
      rotation is handled then the target moves.  ---RULE--- Units that walk 
      will have no turret, tanks etc roll to target*/ 
    protected function runToTarget(unit:Unit time:float){
        rotateToTarget(unit, time*1.5);
        moveToTarget(unit, time*1.5);//running acts the same a walking but the speed up is handled as though more time has passed relative to everything else
    }
}