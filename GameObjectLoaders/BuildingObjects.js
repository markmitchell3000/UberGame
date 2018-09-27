import System.Collections.Generic;

public class BuildingObjects{
    public var buildings = new Hashtable();
    public var bldQuantities = new Hashtable();
    static private var bo:BuildingObjects;

/*
	private function makeBldObjLists(gB:GameBoard){
		//TOWN_TYPE{RESIDENTIAL, INDUSTRIAL, FARMMINE, MIL_BASE, GOV_OFFICES, BIG_CITY}
		var typeA:int=0;
		var typeB:int=0;
	    switch(gB.townType){
	    	case TOWN_TYPE.RESIDENTIAL:
	            typeA=0;
	            typeB=1;
	            break;
	    	case TOWN_TYPE.INDUSTRIAL:
	    	    typeA=2;
	            typeB=3;
	            break;
	    	case TOWN_TYPE.FARMMINE:
	    	    typeA=4;
	            typeB=5;
	            break;
	    	case TOWN_TYPE.MIL_BASE:
	    		typeA=6;
	            typeB=7;
	            break;
	    	case TOWN_TYPE.GOV_OFFICES:
	    		typeA=8;
	            typeB=9;
	            break;
	    	case TOWN_TYPE.BIG_CITY:
	    		typeA=10;
	            typeB=11;
	            break;
	    }
	    blds8X8_A=Resources.LoadAll("Model_Prefabs/Level_Models/"+gB.lMFolders[0]+"/"+gB.bldFolders[typeA]+"/8X8", GameObject);
	    blds8X8_B=Resources.LoadAll("Model_Prefabs/Level_Models/"+gB.lMFolders[0]+"/"+gB.bldFolders[typeB]+"/8X8", GameObject);
	}
*/

    public function BuildingObjects(){
    	for(var i=1;i<=2;i++){
			for(var j=1;j<=2;j++){
				addBuildings("Factory", i+"x"+j);
				addBuildings("Farm", i+"x"+j);
				addBuildings("Government", i+"x"+j);
				addBuildings("Home", i+"x"+j);
				addBuildings("Military", i+"x"+j);
				addBuildings("Mine", i+"x"+j);
				addBuildings("Public", i+"x"+j);
				addBuildings("Research", i+"x"+j);
				addBuildings("Store", i+"x"+j);
				addBuildings("Warehouse", i+"x"+j);
				addBuildings("Urban", i+"x"+j);
			}
	    }
    }

	private function addBuildings(s1: String, s2: String){
		var count: int=0;
		var structures: Object[] = Resources.LoadAll("Model_Prefabs/Building_Models/"+s1+"/"+s2, GameObject);
		for(var stucture: Object in structures){
			buildings[s1+s2+count]=stucture;
			count++;
		}
		bldQuantities[s1+s2]=count;
	}

	static public function getBuildObjs(){
        if(bo==null){
        	bo=new BuildingObjects();
        }
        return bo;
	}
}

/*
	create1x1Buildings("Home", 0, 0);
	create1x1Buildings("Home", 1, 0);
	create1x1Buildings("Factory", 0, 1);
	create1x1Buildings("Warehouse", 1, 1);
	create1x1Buildings("Store", 2, 0);
	create1x1Buildings("Store", 3, 0);
	create1x1Buildings("Government", 2, 1);
	create1x1Buildings("Government", 3, 1);
	create1x1Buildings("Public", 4, 0);
	create1x1Buildings("Public", 5, 0);
	create1x1Buildings("Research", 4, 1);
	create1x1Buildings("Military", 5, 1);
	create1x1Buildings("Mine", 6, 0);
	create1x1Buildings("Urban", 7, 0);*/
/*private function create1x1Buildings(s: String, xBlock: int, zBlock: int){
	var tempNum: int;
	var modelObject :GameObject;
	//move model loading to model bank
	var tempN2: int; 
	var bld: GameObject; 
	for(var bldCount = 0; bldCount<10; bldCount++){
		tempN2=Random.Range(0,bldQuantities[s+"1x1"]);
		bld=buildings[s+"1x1"+tempN2];
		modelObject=Instantiate(bld, transform.position, transform.rotation);
		modelObject.transform.position.z +=250 +200*bldCount+2250*zBlock;
		modelObject.transform.position.x +=175+575*xBlock;
		modelObject.transform.position.y += 103.5;
		modelObject.transform.eulerAngles = new Vector3(0, -90, 0);
		tempN2=Random.Range(0,bldQuantities[s+"1x1"]);
		bld=buildings[s+"1x1"+tempN2];
		modelObject=Instantiate(bld, transform.position, transform.rotation);
		modelObject.transform.position.z +=250 +200*bldCount+2250*zBlock;
		modelObject.transform.position.x +=375+575*xBlock;
		modelObject.transform.position.y += 103.5;
		modelObject.transform.eulerAngles = new Vector3(0, 90, 0);
	}
}*/