/*Cycles through state but also manages the world interations such as which 
nations are fighting and how nations are leveling.*/
public class GameManager{
	private var gameState: GameState;
	private var gameGUI: GameGUIState;
	/*Need some kind of way to update world state, i.e. nations 
	fighting/changing territory and teams leveling up*/

	public var updateGame(time:float){
		if(gameState!=null){
			gameState.cycleState(time);
		}
		else{
			gameState=new GameStateHome();
		}
		//pace cycles
	}

	public var changeState(gs:GameState){
		gameState=gs;
	}
	public var changeGUIState(gg:GameGUIState){
		gameGUI=gg;
	}

	public var setPlayerData(data:PlayerData){

	}

	
}