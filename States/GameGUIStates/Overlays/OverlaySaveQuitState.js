public class OverlaySaveQuitState extends OverlayScreenState{
	public function display(){
		GUI.DrawTexture(Rect(menusX*3, menusY*3, menusW/3, menusH/1.5), backDrop01);
		GUI.DrawTexture(Rect(menusX*3+menusW/12,menusY*3+menusH/24,menusW/6,menusH/12), buttonBack);
		if(GUI.Button (Rect (menusX*3+menusW/12,menusY*3+menusH/24,menusW/6,menusH/12), "Save",buttonStyle)){
	    	//saves the game and prints location of save game file.
	    	playerRef.savePlayer();
	    	viewState=VIEWSTATES.INGAME;
		}
		GUI.DrawTexture(Rect(menusX*3+menusW/12,menusY*3+2*menusH/12,menusW/6,menusH/12), buttonBack);
		if(GUI.Button (Rect (menusX*3+menusW/12,menusY*3+2*menusH/12,menusW/6,menusH/12), "Load Hero",buttonStyle)){
			data = dm.LoadHeroesList();
			arrSize = data.heroNames.Count;
			listNames = new Array(arrSize);
			for(var j=0;j<arrSize;j++){
				listNames[j]=data.heroNames.Item[j];
			}
			viewState=VIEWSTATES.LOADHERO;
		}
		GUI.DrawTexture(Rect(menusX*3+menusW/12,menusY*3+7*menusH/24,menusW/6,menusH/12), buttonBack);
		if(GUI.Button (Rect (menusX*3+menusW/12,menusY*3+7*menusH/24,menusW/6,menusH/12), "Exit Battle",buttonStyle)){
		    //load base level, calculate battle result if single player
		    //Application.LoadLevel("HomeBase");
		    SceneManager.LoadScene("HomeBase");
		}
		GUI.DrawTexture(Rect(menusX*3+menusW/12,menusY*3+5*menusH/12,menusW/6,menusH/12), buttonBack);
		if(GUI.Button (Rect (menusX*3+menusW/12,menusY*3+5*menusH/12,menusW/6,menusH/12), "Quit Game",buttonStyle)){
		   //exit to start game level 
		   //Application.LoadLevel("StartMenu");
		   SceneManager.LoadScene("StartMenu");
		}
		GUI.DrawTexture(Rect(menusX*3+menusW/12,menusY*3+13*menusH/24,menusW/6,menusH/12), buttonBack);
		if(GUI.Button (Rect (menusX*3+menusW/12,menusY*3+13*menusH/24,menusW/6,menusH/12), "Back",buttonStyle)){ 
		   viewState=VIEWSTATES.INGAME;
		}
	}
}