public class StartNameGameState extends StartScreenState{
	public function display(){
		GUILayout.BeginArea(Rect (buttonStartX,buttonStartY+(buttonH*1.1),buttonW,buttonH));
		curWorld = GUILayout.TextArea (curWorld, 50);
		GUILayout.EndArea ();
		GUI.Label(Rect(buttonStartX,buttonStartY,buttonW,buttonH), "Game Name");
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*2.2),buttonW,buttonH), "Create",buttonStyle)){
			menuState = MENUSTATES.START;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*3.3),buttonW,buttonH), "Back",buttonStyle)){
    		menuState = MENUSTATES.MULTIPLAYER;
		}
	}
}