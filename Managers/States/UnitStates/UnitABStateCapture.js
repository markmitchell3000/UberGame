//capture is like pursue, however typically target is item.  Acquisition is usually simple contact with no violence.
public class UnitABStateCapture extends UnitABState{

    //unit may will capture an item, unit or some kind of target.  Typically another event is chained to this.
    public function UnitABStateCapture(){
    	super("capture");
    }

    //Unit is attempting to capture for a certain timeframe
    public function UnitABStateCapture(t:int){
    	super("capture", t);
    }
}