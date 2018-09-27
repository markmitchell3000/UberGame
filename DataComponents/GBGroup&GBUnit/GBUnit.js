/*compressed version of unit data that holds a basic description of of the unit 
that stores better on disk, this is not used for the player data since that is
highly customized, other units can be created based on stored archetypes. */
public class GBUnit{
	public var unitName:String;
	public var unitID: int;
	public var xCoord:int;//leftmost spot, whole numbers representing tile location
    public var yCoord:int;//uppermost spot, whole numbers representing tile location
    //public var modelString:String;
    public var modelNumber:int;//array id from the resources .load
    public var modelNumberSet:boolean=false;
    public var hpPenalty:int=0;//damaged units can subtract this from maxHp when reloaded.
    public var unitType:UnitType; 
    public var archeType:ARCHETYPE=ARCHETYPE.BALANCED;
    public function getModelArr(umf: UnitModelFactory){
        //based on the type call the model group from its respect factory.
        return unitType.getModelArr(umf);
    }
}