public class StartMakeWorldState extends StartScreenState{
	public function display(){
		GUI.Label(Rect(buttonStartX,buttonStartY,buttonW,buttonH), "Name World");
		GUILayout.BeginArea(Rect (buttonStartX,buttonStartY+(buttonH*1.1),buttonW,buttonW));
		curWorld = GUILayout.TextArea (curWorld, 50);
		GUILayout.EndArea ();
  		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*3.3),buttonW,buttonH), "Create",buttonStyle)){
  			if(!curWorld.Equals("")){
  				worldData=dm.LoadWorlds();
  				worldData.addItem(curWorld, numNations, difficulty);
				menuState = MENUSTATES.LOADING;
			}
		}
	    if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*4.4),buttonW,buttonH), "Back",buttonStyle)){
			menuState = MENUSTATES.SELECTWORLD;
		}
	}
}