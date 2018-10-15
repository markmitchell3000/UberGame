public class StartSelectDifficultyState extends StartScreenState{
	public function display(){
	    if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*1.1),buttonW,buttonH), "Easy",buttonStyle)){
  			difficulty= DIFFICULTY.EASY;
  			menuState = MENUSTATES.SELECTWORLD;
		}
	    if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*2.2),buttonW,buttonH), "Medium",buttonStyle)){
  			difficulty= DIFFICULTY.MEDIUM;
  			menuState = MENUSTATES.SELECTWORLD;
		}
	    if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*3.3),buttonW,buttonH), "Hard",buttonStyle)){
  			difficulty= DIFFICULTY.HARD;
  			menuState = MENUSTATES.SELECTWORLD;
		}
	    if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*4.4),buttonW,buttonH), "Back",buttonStyle)){
			menuState = MENUSTATES.CHOOSEWORLD;
		}
	}
}