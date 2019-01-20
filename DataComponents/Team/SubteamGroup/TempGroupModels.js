/*Used for loading a subteams model folders when units are being initialized.  
When next groups models are being created this can be thrown away unless there 
is a spawning cycle in the game then these are kept.*/
public class TempGroupModels{
	private mainFilePath:String;
	private modelHash:HashTable;//Object[]
	/*Game object collection is stored for each type as an array.  A number is 
	given by units and the individual models are selected.  Civilians,zombies 
	and workers can randomly select subfolders (as they are added, i.e. 
	civilians001 civilians002 etc) since they do not at current have seperate 
	unittypes.*/
 
    public function TempGroupModels(filepath:String){
    	modelHash= new HashTable();
    	mainFilePath=filepath;
    }

    /*UnitType String is used for subfolder*/
	public function getValue(unitType:String,modelNum:int){
        var modelArr:Object[];
        if(modelHash.ContainsKey(unitType)){
        	modelArr=(Object[])modelHash[unitType];
        }
        else{
        	modelArr = Resources.LoadAll(mainFilePath+unitType, GameObject);
        	modelHash[unitType]=modelArr;
        }
        return modelArr[modelNum];
	}

    public function getArrSize(unitType:String){
        var modelArr:Object[];
        if(modelHash.ContainsKey(unitType)){
            modelArr=(Object[])modelHash[unitType];
        }
        else{
            modelArr = Resources.LoadAll(mainFilePath+unitType, GameObject);
            modelHash[unitType]=modelArr;
        }
        return modelArr.length;
    }
}