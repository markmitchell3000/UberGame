/*class is extended for specialty unit factories that 
load different sets of models, such as combat, war, 
town, zombies etc...  Purpose of the class is to initialize
the GBUnits from a team structure as models that are handed 
*/
public class UnitModelFactory{
    /*Real unit groups and real units need the model information, GBGroups and 
    units are just the template that is used to save and load*/
    public function loadUnitModels(gp: SubteamGroup, umf: UnitModelFactory){
    	var gpArr:ArrayList=gp.loadUnits();
    	for(var uId=0;uId<gpArr.Count;uId++){
			var tempUnit:GBUnit=gpArr.Item[uId];
                        tempUnit.modelNumber//stuff
			var unitObj : GameObject;
			//getModelArr varies by unit type and will ask its particular unit model factory for its array.
	        unitObj = unitObjSelector(tempUnit, tempUnit.getModelArr(umf));
			modelObject=Instantiate(unitObj, transform.position, transform.rotation);
			posObj(modelObject, tempUnit.yCoord, tempUnit.xCoord, 0);
		}
    }

	protected function unitObjSelector(tempUnit:UnitData, modelArr:Object[]){
		var objNum:int;
		if(tempUnit.modelNumberSet){
	        objNum=tempUnit.modelNumber;
		}
		else{
			objNum=Random.Range(0,modelArr.length-1);
			tempUnit.modelNumber=objNum;
			tempUnit.modelNumberSet=true;
		}
	    return modelArr[objNum];
	}

} 
