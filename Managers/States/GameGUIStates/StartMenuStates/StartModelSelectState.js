public class StartModelSelectState extends StartScreenState{
	public function display(){
	    GUI.Label(Rect(buttonStartX,buttonStartY,buttonW,buttonH), "Select Hero");
        GUI.DrawTexture(Rect(buttonStartX, buttonStartY+(buttonH*1.1), buttonW, buttonH*3), subBackground);
        scrollVector=GUI.BeginScrollView (Rect (buttonStartX, buttonStartY+(buttonH*1.1), buttonW, buttonH*3), 
        	scrollVector, Rect (0, 0, buttonW*.8, (25*modelArrSize)+200),false,true);
        modelGridInt= GUI.SelectionGrid (Rect (10, 10, buttonW*.8, (buttonH/3)*modelArrSize), modelGridInt, modNames, 1);
  		GUI.EndScrollView(); 
  		curModelString = modNames[modelGridInt];
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*4.4),buttonW,buttonH/2), "Select",buttonStyle)){
			menuState = MENUSTATES.NAMEHERO;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*4.95),buttonW,buttonH/2), "Back",buttonStyle)){
			menuState = MENUSTATES.TEAMSELECT;
		}
	}
}