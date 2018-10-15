public class StartFirstState extends StartScreenState{
	public function display(){
		curHero ="";
		if(GUI.Button (Rect (buttonStartX,buttonStartY,buttonW,buttonH), "New Hero",buttonStyle)){
			menuState = MENUSTATES.TEAMSELECT;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*1.1),buttonW,buttonH), "Load Hero",buttonStyle)){
			data = dm.LoadHeroesList();
			arrSize = data.heroNames.Count;
			if(arrSize==0){
                 data.addItem("Finn MacCool", "Mossman", TEAM_NAME.ETERNIAN_REPUBLIC);
                 arrSize=1;
			}
    		listNames = new Array(arrSize);
    		for(var i=0;i<arrSize;i++){
    			listNames[i]=data.heroNames.Item[i];
    		}
	    	menuState = MENUSTATES.LOADHERO;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*2.2),buttonW,buttonH), "Options",buttonStyle)){
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*3.3),buttonW,buttonH), "Back",buttonStyle)){
		    menuState = MENUSTATES.MULTIPLAYER;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*4.4),buttonW,buttonH), "Exit",buttonStyle)){
		    Application.Quit();
		}
	}
}