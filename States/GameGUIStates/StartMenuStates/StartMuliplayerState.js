public class StartMutiplayerState extends StartScreenState{
	public function display(){
            if(GUI.Button (Rect (buttonStartX,buttonStartY,buttonW,buttonH), "Single Player",buttonStyle)){
    	    	//multiPlayer = false;
				//menuState = MENUSTATES.START;
			}
			if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*1.1),buttonW,buttonH), "Multiplayer",buttonStyle)){
				//multiPlayer = true;
	    		//menuState = MENUSTATES.HOSTJOIN;
			}
			if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*3.3),buttonW,buttonH), "Exit",buttonStyle)){
			    //Application.Quit();
			}
	}
}