public class StartChooseWorldState extends StartScreenState{
	public function display(){
		curWorld ="";
		if(GUI.Button (Rect (buttonStartX,buttonStartY,buttonW,buttonH), "New World",buttonStyle)){
			menuState = MENUSTATES.SELECTDIFFICULTY;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*1.1),buttonW,buttonH), "Load World",buttonStyle)){
			worldData = dm.LoadWorlds();
			wlen = worldData.worldNames.Count;
			if(wlen==0){
				curWorld="Nowhere";
                numNations=NUMBER_NATIONS.FOUR_NATIONS;
                difficulty=DIFFICULTY.MEDIUM;
                worldData.addItem(curWorld, numNations, difficulty);
				wlen=1;
			}
			wNames = new Array(wlen);
			for(var j=0;j<wlen;j++){
				wNames[j]=worldData.worldNames.Item[j];
			}
    		menuState = MENUSTATES.LOADWORLD;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*2.2),buttonW,buttonH), "Back",buttonStyle)){
			menuState = MENUSTATES.START;
		}
	}
}