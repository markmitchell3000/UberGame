public class StartTeamSelectState extends StartScreenState{
	public function display(){
        GUI.Label(Rect(buttonStartX,buttonStartY,buttonW,buttonH), "Select Nation");
	    if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*4.95),buttonW,buttonH*.5), "Eternian Republic",buttonStyle)){
	    	team=TEAM_NAME.ETERNIAN_REPUBLIC;
	    	modNames=Team_StaticVariables.erModelNames;
	    	modelArrSize=modNames.Length;
	    	menuState = MENUSTATES.MODELSELECT;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*1.1),buttonW,buttonH*.5), "Initiative",buttonStyle)){
			team=TEAM_NAME.INITIATIVE;
			modNames=Team_StaticVariables.inModelNames;
			modelArrSize=modNames.Length;
			menuState = MENUSTATES.MODELSELECT;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*1.65),buttonW,buttonH*.5), "Night Horde",buttonStyle)){
			team=TEAM_NAME.NIGHT_HORDE;
			modNames=Team_StaticVariables.nhModelNames;
			modelArrSize=modNames.Length;
			menuState = MENUSTATES.MODELSELECT;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*2.2),buttonW,buttonH*.5), "Pantheon",buttonStyle)){
			team=TEAM_NAME.PANTHEON;
			modNames=Team_StaticVariables.paModelNames;
			modelArrSize=modNames.Length;
			menuState = MENUSTATES.MODELSELECT;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*2.75),buttonW,buttonH*.5), "Sentai Clan",buttonStyle)){
			team=TEAM_NAME.SENTAI_CLAN;
			modNames=Team_StaticVariables.scModelNames;
			modelArrSize=modNames.Length;
			menuState = MENUSTATES.MODELSELECT;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*3.3),buttonW,buttonH*.5), "Shadow Empire",buttonStyle)){
			team=TEAM_NAME.SHADOW_EMPIRE;
			modNames=Team_StaticVariables.seModelNames;
			modelArrSize=modNames.Length;
			menuState = MENUSTATES.MODELSELECT;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*3.85),buttonW,buttonH*.5), "United League",buttonStyle)){
			team=TEAM_NAME.UNITED_LEAGUE;
			modNames=Team_StaticVariables.ulModelNames;
			modelArrSize=modNames.Length;
			menuState = MENUSTATES.MODELSELECT;
		}
		if(GUI.Button (Rect (buttonStartX,buttonStartY+(buttonH*4.4),buttonW,buttonH*.5), "Utrom Sith Alliance",buttonStyle)){
			team=TEAM_NAME.UTROM_SITH_ALLIANCE;
			modNames=Team_StaticVariables.usModelNames;
			modelArrSize=modNames.Length;
			menuState = MENUSTATES.MODELSELECT;
		}
	}
}