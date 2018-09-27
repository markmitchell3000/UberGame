public class StartStatSelectState extends StartScreenState{
	public function display(){
	    if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*4.4),buttonW,buttonH), "Back",buttonStyle)){
			menuState = MENUSTATES.TYPESELECT;
		}
	}
}