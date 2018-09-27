public class StartSelectWorldState extends StartScreenState{
	public function display(){
	    if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*1.1),buttonW,buttonH), "2 Nation Map",buttonStyle)){
  			numNations= NUMBER_NATIONS.TWO_NATIONS;
  			menuState = MENUSTATES.MAKEWORLD;
		}
	    if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*2.2),buttonW,buttonH), "4 Nation Map",buttonStyle)){
  			numNations= NUMBER_NATIONS.FOUR_NATIONS;
  			menuState = MENUSTATES.MAKEWORLD;
		}
	    if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*3.3),buttonW,buttonH), "8 Nation Map",buttonStyle)){
  			numNations= NUMBER_NATIONS.EIGHT_NATIONS;
  			menuState = MENUSTATES.MAKEWORLD;
		}
	    if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*4.4),buttonW,buttonH), "Back",buttonStyle)){
			menuState = MENUSTATES.SELECTDIFFICULTY;
		}
	}
}