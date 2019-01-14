/*
    Idle is Just like it sounds, the unit animates standing still and scans for 
    enemies once a second.  Bases and towers use this state constantly.
*/
public class UnitABStateIdle extends UnitABState{

    public function UnitABStateIdle(){
    	super("Idle", 1.0);
    }

    public function update(unit:Unit,time:float){
        //do nothing
    }
    
}