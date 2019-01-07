/*Units are accessed directly by hashid*/
public class UnitCollection{
	private var units:Hashtable;//unithashids in unit data can access the all units, these are model and data.  
    
    private static var uc:UnitCollection;//only one unit collection per gameboard

    public function UnitCollection(){
    	units= new Hashtable();
    }

    public static getUC(){
        if(uc==null){
            uc=new UnitCollection();
        }
        return uc;
    }

    /*When unit reaches 0 hp (or negative if possible), the unit is removed.  
    This is usually done when an attack collides with the unit and the unit 
    takes damage.  This is usually a hashtable that finds the unit that takes 
    damage.  Remove the unit from the hash table then next iteration through the 
    units, a check is done first that will remove the unit from the list.*/
    public function removeUnit(hashid:string){
        if(units.ContainsKey(hashid)){
    	    units.Remove(hashid);
        }
        else{
        	Debug.Log("Attempting to remove untracked unit");
        }
    }

    /*Unit is in list, as it is being iterated over use this to check if the 
    unit has removed from hashtable, if so remove node by joining parent to 
    child in the list(handled by node)*/
    public function unitIsDead(hashid:String){
        if(units.ContainsKey(hashid)){
            return false;
        }
        else{
            return true;
        }
    }

    public function addUnit(unit:Unit){
        units[unit.unitData.hashid]=unit;
    }

    //grab a particular unit to do stuff with, used for updates and issuing damage etc.
    public function getUnit(hashid:String){
        return units[hashid];
    }
}
