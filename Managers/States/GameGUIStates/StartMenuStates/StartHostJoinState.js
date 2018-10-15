public class StartHostJoinState extends StartScreenState{
	public function display(){
		if(GUI.Button (Rect (buttonStartX,buttonStartY,buttonW,buttonH), "Host Game",buttonStyle)){
			//menuState = MENUSTATES.NAMEGAME;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*1.1),buttonW,buttonH), "Join Game",buttonStyle)){
    		//menuState = MENUSTATES.JOIN;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*2.2),buttonW,buttonH), "Back",buttonStyle)){
			//menuState = MENUSTATES.MULTIPLAYER;
		}
	}
}