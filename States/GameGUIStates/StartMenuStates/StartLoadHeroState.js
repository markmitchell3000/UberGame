public class StartLoadHeroState extends StartScreenState{
	public function display(){
		GUI.Label(Rect(buttonStartX,buttonStartY,buttonW,buttonH), "Select Hero");
        GUI.DrawTexture(Rect(buttonStartX, buttonStartY+(buttonH*1.1), buttonW, buttonH*3), subBackground);
        scrollVector=GUI.BeginScrollView (Rect (buttonStartX, buttonStartY+(buttonH*1.1), buttonW, buttonH*3), 
        	scrollVector, Rect (0, 0, buttonW*.8, (25*arrSize)+200),false,true);
        gridInt= GUI.SelectionGrid (Rect (10, 10, buttonW*.8, (buttonH/3)*arrSize), gridInt, listNames, 1);
  		GUI.EndScrollView(); 
  		curHero = listNames[gridInt];
  		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*4.4),buttonW,buttonH), "Load",buttonStyle)){
    		menuState = MENUSTATES.CHOOSEWORLD;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*5.5),buttonW,buttonH), "Back",buttonStyle)){
    		menuState = MENUSTATES.START;
		}
	}
}