public class UnitTransform{
    private var childAvatar : GameObject;
    private var oldPnts: Point[];//4 squares unit is estimated to occupy last frame
    //private var home: Vector3;//home might uses a transform object that can be queried

    //verify that position and rotation are vector3 values
	public function setModel(newModel: GameObject, position:Vector3, rotation:Vector3){
		var childModel: GameObject = newModel;
		var Pn:PrefabNormalizer= PrefabNormalizer.getPN();
		Pn.modelSetup(childModel);
	    childAvatar= Instantiate(childModel,transform.position,transform.rotation);
	    //childAvatar.transform.parent = this.transform;//this might not work inside a class
    }

    public function getLocation(){
	    return childAvatar.transform.transform.position;
    }

    public function moveTransform(xMove:float,yMove:float){
    	//add of subtract from vector3 of transform

    }

    public function destroyUnit(){
	    Destroy(childAvatar);
    }

    /*retrieve old points from grid hash to remove first.
    Then update the grid hash and pnts storage*/
    public function updatePnts(pnts:Point[]){
    	oldPnts=pnts;
    }

    public function getOldPnts(){
    	return oldPnts;
    }

    //Called in conjunction with resetting units health and mana 
    //unitData.curHealth = unitData.maxHealth;unitData.curMana = unitData.maxMana;
    public function reSpawnModel(home:Vector3){
		var renderers : Component[];
		renderers = childAvatar.GetComponentsInChildren(Renderer);
		transform.position = home;
		renderers = transform.GetComponentsInChildren(Renderer);
		for(var r : Renderer in renderers)
		{
	    	r.enabled = false;
		}
		yield WaitForSeconds(3);
		for(var v : Renderer in renderers)
		{   
	   		v.enabled = true;
		}  
    }
}
