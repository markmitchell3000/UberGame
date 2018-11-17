/*Each unit group is a collection of units for a particular team/group, each 
runtime gameboard has a collection of these UnitGroups that it updates*/
public class UnitGroup{
	private var loadStoreVersion:GBGroup;//holds GBUnits, loaded or templated data for units.
    private var units:UnitCollection;//units created for realtime use from loaded or generated data

	public function UnitGroup(lsv:GBGroup){
        loadStoreVersion=lsv;
	}
    
    //call this after team is set 
    public function setStringFolder(folderName: String){
        modelStringFolder=teamName.getFolder(folderName);
    }

    public function generateUnits(){
       //     
    }

    //For retrieve head of list
    public function loadUnits(){
        units.getListHead();
    }
}