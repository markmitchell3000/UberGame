public class StartNameHeroState extends StartScreenState{
	public function display(){
		var isNew: boolean=true;
		GUILayout.BeginArea(Rect (buttonStartX,buttonStartY+(buttonH*1.1),buttonW,buttonW));
		curHero = GUILayout.TextArea (curHero, 50);
		GUILayout.EndArea ();
		data= dm.LoadHeroesList();
		arrSize = data.heroNames.Count;
		for( i=0;i<arrSize;i++){
			if(data.heroNames.Item[i].Equals(curHero)){
				isNew=false;
			}
		}
		if(!isNew){
			GUI.DrawTexture(Rect (buttonStartX,buttonStartY+(buttonH*4.4),buttonW,buttonH),nameExists);
		}
		GUI.Label(Rect(buttonStartX,buttonStartY,buttonW,buttonH), "Enter Name");
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*2.2),buttonW,buttonH), "Set Name",buttonStyle)){
			if(isNew){
				data.addItem(curHero, curModelString, team);
				menuState = MENUSTATES.CHOOSEWORLD;
			}
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*3.3),buttonW,buttonH), "Back",buttonStyle)){
    		menuState = MENUSTATES.START;
		}
	}
}