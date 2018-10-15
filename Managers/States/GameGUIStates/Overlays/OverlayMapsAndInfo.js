public class OverlayMapsAndInfo extends OverlayScreenState{
    public function display(){
    	super.display();
    	//option bar & backdrop
		GUI.skin.GetStyle("label").fontSize = 18;
		GUI.DrawTexture(Rect(menusX, menusY/2, menusW, menusY/2), backDrop03);
		if(GUI.Button(Rect(menusX+menusW/20, menusY/2, menusW/10, menusY/2), "Inventory",buttonStyle)){
			stateChanger(VIEWSTATES.INVENTORY);
		}
		if(GUI.Button(Rect(menusX+2.5*menusW/10, menusY/2, menusW/10, menusY/2), "Area Map",buttonStyle)){
			stateChanger(VIEWSTATES.LOCALMAP);
		}
		if(GUI.Button(Rect(menusX+4.5*menusW/10, menusY/2, menusW/10, menusY/2), "World Map",buttonStyle)){
			stateChanger(VIEWSTATES.GLOBALMAP);
		}
		if(GUI.Button(Rect(menusX+6.5*menusW/10, menusY/2, menusW/10, menusY/2), "Team Info",buttonStyle)){
			stateChanger(VIEWSTATES.TEAMSTATS);
		}
		if(GUI.Button(Rect(menusX+8.5*menusW/10, menusY/2, menusW/10, menusY/2), "Player Info",buttonStyle)){
			stateChanger(VIEWSTATES.PLAYERINFO);
		}
		GUI.DrawTexture(Rect(menusX, menusY, menusW, menusH), backDrop03);
    }
}