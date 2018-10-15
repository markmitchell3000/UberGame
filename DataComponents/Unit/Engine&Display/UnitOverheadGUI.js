public class UnitOverheadGUI{
    private var statusBarYOffset : int=0;

	public function OnGUI(v3:Vector3){
		var ps: Vector3= v3;
		if(transform.position.x<ps.x+100&&transform.position.x>ps.x-100&&
			transform.position.z<ps.z+100&&transform.position.z>ps.z-100&&!isPlayer)
		{
	    	var targetPos: Vector3;
	    	targetPos = Camera.main.WorldToScreenPoint (transform.position);
	       	var perHealth:float=0.0;
	       	if(unitData.maxHealth>0){
	       	 perHealth=unitData.curHealth/unitData.maxHealth;
	       	}
			var perMana:float=0.0;
			if(unitData.maxMana>0){
				perMana=unitData.curMana/unitData.maxMana;
			}
	    	//GUI.Box(new Rect(targetPos.x, targetPos.y, 60, 20), curHealth + "/" + maxHealth);
	    	GUI.DrawTexture(Rect(targetPos.x-60,targetPos.y-statusBarYOffset,120,5),OverlayAndMenus.emptyStatusBar);
	    	GUI.DrawTexture(Rect(targetPos.x-60,targetPos.y-statusBarYOffset,120*perHealth,5),OverlayAndMenus.healthBar);
	    	GUI.DrawTexture(Rect(targetPos.x-60,targetPos.y+7-statusBarYOffset,120,5),OverlayAndMenus.emptyStatusBar);
	    	GUI.DrawTexture(Rect(targetPos.x-60,targetPos.y+7-statusBarYOffset,120*perHealth,5),OverlayAndMenus.manaBar);
		}
    }
}