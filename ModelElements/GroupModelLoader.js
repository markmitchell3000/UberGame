public class GroupModelLoader{
	public static var gml:  GroupModelLoader;

	public static function getGML(){
		if(gml ==null){
		    gml = new GroupModelLoader();
	    }
	    return gml;
	}

    //returns array of models, number is used to select particular model
	public function getGroupModels(teamDir:String, unitType:String){
        return Resources.LoadAll(teamDir+"/"+unitType, GameObject);
	}
}

/*
// used to store these in hashtable once array was made so these could be retrieve via number???
	var modelBases : Object[]=Resources.LoadAll(s+"/Bases", GameObject);
	var modelCivilians : Object[]=Resources.LoadAll(s+"/Civilians", GameObject);
	var modelGuardians : Object[]=Resources.LoadAll(s+"/Guardians", GameObject);
	var modelHunters : Object[]=Resources.LoadAll(s+"/Hunters", GameObject);
	var modelLts : Object[]=Resources.LoadAll(s+"/Lts", GameObject);
	var modelSoldiers : Object[]=Resources.LoadAll(s+"/Soldiers", GameObject);
	var modelTitans : Object[]=Resources.LoadAll(s+"/Titans", GameObject);
	var modelTowers : Object[]=Resources.LoadAll(s+"/Towers", GameObject);*/