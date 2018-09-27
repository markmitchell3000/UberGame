public class OverlayLoadHeroState extends OverlayScreenState{
	public function display(){
		GUI.DrawTexture(Rect(menusX*3, menusY*3, menusW/3, menusH/1.5), backDrop01);
		GUI.Label(Rect(menusX*3+menusW/12,menusY*3+menusH/24,menusW/6,menusH/12), "Select Hero");
    	GUI.DrawTexture(Rect(menusX*3+menusW/12, menusY*3+menusH/6, menusW/6, menusH/4), subBackground);
    	scrollVector=GUI.BeginScrollView (Rect (menusX*3+menusW/12, menusY*3+menusH/6, menusW/6, menusH/4), 
    	scrollVector, Rect (0, 0, menusW/6*.8, (25*arrSize)+200),false,true);
    	gridInt= GUI.SelectionGrid (Rect (10, 10, menusW/6*.8, (menusH/36)*arrSize), gridInt, listNames, 1);
			GUI.EndScrollView(); 
			var curHero: String = listNames[gridInt];
		GUI.DrawTexture(Rect(menusX*3+menusW/12,menusY*3+5*menusH/12,menusW/6,menusH/12), buttonBack);
		if(GUI.Button (Rect (menusX*3+menusW/12,menusY*3+5*menusH/12,menusW/6,menusH/12), "Load Hero",buttonStyle)){
			//Load Hero
			dm.setPlayerData(curHero, "",TEAM_NAME.NIGHT_HORDE);
			playerControlsRef.unitReset();
			viewState = VIEWSTATES.INGAME;
		}
		GUI.DrawTexture(Rect(menusX*3+menusW/12,menusY*3+13*menusH/24,menusW/6,menusH/12), buttonBack);
		if(GUI.Button (Rect (menusX*3+menusW/12,menusY*3+13*menusH/24,menusW/6,menusH/12), "Back",buttonStyle)){ 
		   viewState=VIEWSTATES.SAVEQUIT;
		}
	}
}