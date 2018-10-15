public class OverlayGlobalMapState extends OverlayScreenState{
	public function display(){
	    var stateButtonSize=.9*invSlotSize;
	    var stateFlagSize=.9*invSlotSize;
		GUI.Label(Rect(menusX+menusW/2.25,menusY,invSlotSize*10,invSlotSize), "World Map");
		GUI.DrawTexture(Rect(menusX+.2*menusW, menusY+.1*menusH, .6*menusW, .8*menusH), worldMap);
		//nation info
		GUI.skin.GetStyle("label").fontSize = 12;
		GUI.Label(Rect(menusX+.025*menusW, menusY+.1*menusH, invSlotSize*8, invSlotSize/1.5), "Nation:  "+ getNationInfo(displayNation,0));
		GUI.Label(Rect(menusX+.025*menusW, menusY+.1*menusH+invSlotSize/1.5, invSlotSize*8, invSlotSize/1.5), "Ruler:  "+ getNationInfo(displayNation,1));
		GUI.Label(Rect(menusX+.025*menusW, menusY+.1*menusH+2*invSlotSize/1.5, invSlotSize*8, invSlotSize/1.5), "Border Nations: ");
		for(var next=1;next<=10;next++){
			GUI.Label(Rect(menusX+.025*menusW, menusY+.1*menusH+((2+next)*invSlotSize/1.5), invSlotSize*8, invSlotSize/1.5), getNationInfo(displayNation,next+1));
		}
		if(GUI.Button(Rect(menusX+.025*menusW, menusY+.1*menusH+14*invSlotSize/1.5, menusW/10, menusY/2), "Travel",buttonStyle)){
			if(displayNation!=getCurStateId()){
				dm.getMapData().setCurState(displayNation,0,0);
				dm.setRandomStart(true);
				SceneManager.LoadScene("ProceduralLevel001");	
			}
		}
		if(displayNation==getCurStateId()){
			GUI.Label(Rect(menusX+.025*menusW, menusY+.1*menusH+16*invSlotSize/1.5, invSlotSize*8, invSlotSize/1.5), "Current Location");
		}
		//nation 001 team icon
		if(GUI.Button(Rect(menusX+.273*menusW, menusY+.266*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=0;
		}
		GUI.DrawTexture(Rect(menusX+.273*menusW, menusY+.266*menusH, stateFlagSize, stateFlagSize), getNationIcon(0));
		//nation 002 team icon
		if(GUI.Button(Rect(menusX+.273*menusW, menusY+.400*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=1;
		}
		GUI.DrawTexture(Rect(menusX+.273*menusW, menusY+.400*menusH, stateFlagSize, stateFlagSize), getNationIcon(1));
		//nation 003 team icon
		if(GUI.Button(Rect(menusX+.260*menusW, menusY+.543*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=2;
		}
		GUI.DrawTexture(Rect(menusX+.260*menusW, menusY+.543*menusH, stateFlagSize, stateFlagSize), getNationIcon(2));
		//nation 004 team icon
		if(GUI.Button(Rect(menusX+.315*menusW, menusY+.593*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=3;
		}
		GUI.DrawTexture(Rect(menusX+.315*menusW, menusY+.593*menusH, stateFlagSize, stateFlagSize), getNationIcon(3));
		//nation 005 team icon
		if(GUI.Button(Rect(menusX+.305*menusW, menusY+.513*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=4;
		}
		GUI.DrawTexture(Rect(menusX+.305*menusW, menusY+.513*menusH, stateFlagSize, stateFlagSize), getNationIcon(4));
		//nation 006 team icon
		if(GUI.Button(Rect(menusX+.315*menusW, menusY+.440*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=5;
		}
		GUI.DrawTexture(Rect(menusX+.315*menusW, menusY+.440*menusH, stateFlagSize, stateFlagSize), getNationIcon(5));
		//nation 007 team icon
		if(GUI.Button(Rect(menusX+.335*menusW, menusY+.390*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=6;
		}
		GUI.DrawTexture(Rect(menusX+.335*menusW, menusY+.390*menusH, stateFlagSize, stateFlagSize), getNationIcon(6));
		//nation 008 team icon
		if(GUI.Button(Rect(menusX+.325*menusW, menusY+.310*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=7;
		}
		GUI.DrawTexture(Rect(menusX+.325*menusW, menusY+.310*menusH, stateFlagSize, stateFlagSize), getNationIcon(7));
		//nation 009 team icon
		if(GUI.Button(Rect(menusX+.325*menusW, menusY+.229*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=8;
		}
		GUI.DrawTexture(Rect(menusX+.325*menusW, menusY+.229*menusH, stateFlagSize, stateFlagSize), getNationIcon(8));
		//nation 010 team icon
		if(GUI.Button(Rect(menusX+.385*menusW, menusY+.340*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=9;
		}
		GUI.DrawTexture(Rect(menusX+.385*menusW, menusY+.340*menusH, stateFlagSize, stateFlagSize), getNationIcon(9));
		//nation 011 team icon
		if(GUI.Button(Rect(menusX+.360*menusW, menusY+.513*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=10;
		}
		GUI.DrawTexture(Rect(menusX+.360*menusW, menusY+.513*menusH, stateFlagSize, stateFlagSize), getNationIcon(10));
		//nation 012 team icon
		if(GUI.Button(Rect(menusX+.370*menusW, menusY+.598*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=11;
		}
		GUI.DrawTexture(Rect(menusX+.370*menusW, menusY+.598*menusH, stateFlagSize, stateFlagSize), getNationIcon(11));
		//nation 013 team icon
		if(GUI.Button(Rect(menusX+.440*menusW, menusY+.553*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=12;
		}
		GUI.DrawTexture(Rect(menusX+.440*menusW, menusY+.553*menusH, stateFlagSize, stateFlagSize), getNationIcon(12));
		//nation 014 team icon
		if(GUI.Button(Rect(menusX+.430*menusW, menusY+.410*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=13;
		}
		GUI.DrawTexture(Rect(menusX+.430*menusW, menusY+.410*menusH, stateFlagSize, stateFlagSize), getNationIcon(13));
		//nation 015 team icon
		if(GUI.Button(Rect(menusX+.450*menusW, menusY+.256*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=14;
		}
		GUI.DrawTexture(Rect(menusX+.450*menusW, menusY+.256*menusH, stateFlagSize, stateFlagSize), getNationIcon(14));
		//nation 016 team icon
		if(GUI.Button(Rect(menusX+.510*menusW, menusY+.296*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=15;
		}
		GUI.DrawTexture(Rect(menusX+.510*menusW, menusY+.296*menusH, stateFlagSize, stateFlagSize), getNationIcon(15));
		//nation 017 team icon
		if(GUI.Button(Rect(menusX+.490*menusW, menusY+.430*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=16;
		}
		GUI.DrawTexture(Rect(menusX+.490*menusW, menusY+.430*menusH, stateFlagSize, stateFlagSize), getNationIcon(16));
		//nation 018 team icon
		if(GUI.Button(Rect(menusX+.540*menusW, menusY+.553*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=17;
		}
		GUI.DrawTexture(Rect(menusX+.540*menusW, menusY+.553*menusH, stateFlagSize, stateFlagSize), getNationIcon(17));
		//nation 019 team icon
		if(GUI.Button(Rect(menusX+.550*menusW, menusY+.653*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=18;
		}
		GUI.DrawTexture(Rect(menusX+.550*menusW, menusY+.653*menusH, stateFlagSize, stateFlagSize), getNationIcon(18));
		//nation 020 team icon
		if(GUI.Button(Rect(menusX+.570*menusW, menusY+.733*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=19;
		}
		GUI.DrawTexture(Rect(menusX+.570*menusW, menusY+.733*menusH, stateFlagSize, stateFlagSize), getNationIcon(19));
		//nation 021 team icon
		if(GUI.Button(Rect(menusX+.610*menusW, menusY+.673*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=20;
		}
		GUI.DrawTexture(Rect(menusX+.610*menusW, menusY+.673*menusH, stateFlagSize, stateFlagSize), getNationIcon(20));
		//nation 022 team icon
		if(GUI.Button(Rect(menusX+.660*menusW, menusY+.678*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=21;
		}
		GUI.DrawTexture(Rect(menusX+.660*menusW, menusY+.678*menusH, stateFlagSize, stateFlagSize), getNationIcon(21));
		//nation 023 team icon
		if(GUI.Button(Rect(menusX+.635*menusW, menusY+.573*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=22;
		}
		GUI.DrawTexture(Rect(menusX+.635*menusW, menusY+.573*menusH, stateFlagSize, stateFlagSize), getNationIcon(22));
		//nation 024 team icon
		if(GUI.Button(Rect(menusX+.590*menusW, menusY+.493*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=23;
		}
		GUI.DrawTexture(Rect(menusX+.590*menusW, menusY+.493*menusH, stateFlagSize, stateFlagSize), getNationIcon(23));
		//nation 025 team icon
		if(GUI.Button(Rect(menusX+.570*menusW, menusY+.410*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=24;
		}
		GUI.DrawTexture(Rect(menusX+.570*menusW, menusY+.410*menusH, stateFlagSize, stateFlagSize), getNationIcon(24));
		//nation 026 team icon
		if(GUI.Button(Rect(menusX+.635*menusW, menusY+.385*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=25;
		}
		GUI.DrawTexture(Rect(menusX+.635*menusW, menusY+.385*menusH, stateFlagSize, stateFlagSize), getNationIcon(25));
		//nation 027 team icon
		if(GUI.Button(Rect(menusX+.635*menusW, menusY+.256*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=26;
		}
		GUI.DrawTexture(Rect(menusX+.635*menusW, menusY+.256*menusH, stateFlagSize, stateFlagSize), getNationIcon(26));
		//nation 028 team icon
		if(GUI.Button(Rect(menusX+.625*menusW, menusY+.181*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=27;
		}
		GUI.DrawTexture(Rect(menusX+.625*menusW, menusY+.181*menusH, stateFlagSize, stateFlagSize), getNationIcon(27));
		//nation 029 team icon
		if(GUI.Button(Rect(menusX+.715*menusW, menusY+.236*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=28;
		}
		GUI.DrawTexture(Rect(menusX+.715*menusW, menusY+.236*menusH, stateFlagSize, stateFlagSize), getNationIcon(28));
		//nation 030 team icon
		if(GUI.Button(Rect(menusX+.690*menusW, menusY+.440*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=29;
		}
		GUI.DrawTexture(Rect(menusX+.690*menusW, menusY+.440*menusH, stateFlagSize, stateFlagSize), getNationIcon(29));
		//nation 031 team icon
		if(GUI.Button(Rect(menusX+.705*menusW, menusY+.588*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=30;
		}
		GUI.DrawTexture(Rect(menusX+.705*menusW, menusY+.588*menusH, stateFlagSize, stateFlagSize), getNationIcon(30));
		//nation 032 team icon
		if(GUI.Button(Rect(menusX+.715*menusW, menusY+.688*menusH, stateButtonSize, stateButtonSize), "",buttonStyle)){
			displayNation=31;
		}
		GUI.DrawTexture(Rect(menusX+.715*menusW, menusY+.688*menusH, stateFlagSize, stateFlagSize), getNationIcon(31));
	}
}