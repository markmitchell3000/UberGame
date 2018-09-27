public class StartLoadingState extends StartScreenState{
	public function display(){
		GUI.DrawTexture(Rect (Screen.width/3,Screen.height/2,Screen.width/4,Screen.height/4),loadingScreen);
		if(dm.mapNotSet){
			dm.setPlayerData(curHero, curModelString, team);
			dm.setMapData(curWorld, numNations, difficulty);
			dm.setRandomStart(true);
			SceneManager.LoadScene("ProceduralLevel001");
			dm.mapNotSet=false;
		}
	}
}