public class GameManager{
	private var gameState: GameState;
	private var gameGUI: GameGUIState;

	public var updateGame(){
		if(gameState!=null){
			gameState.cycleState();
		}
		else{
			//start state
		}
		//pace cycles
	}

	public var changeState(gs:GameState){
		gameState=gs;
	}
	public var changeGUIState(gg:GameGUIState){
		gameGUI=gg;
	}
}