/*This game state is a load screen between states, cycles largely do nothing.
During this time player actions affect the GUI which in turn can select the 
next game state.*/
public class GameStateLoad extends GameState{

	//likely does nothing, somehow level is loaded here
	public function cycleState(time:float){
	}


	/*Used to load next state, given an uninitialized gameboard and playerData*/
    public function createNextState(next:String, gb:GameBoard, pd:PlayerData){
        var gameState:GameState;
        //call save data
        /*Switch block was the best I could think of*/
        switch(next){
            case "War":
                gameState= new GameStateWar(gb,pd);
                break;
            case "Mission":
                gameState= new GameStateMission(gb,pd);
                break;
            case "Map":
                gameState= new GameStateMap(gb,pd);
                break;
            case "Load":
                gameState= new GameStateLoad(gb,pd);
                break;
            case "Init":
                gameState= new GameStateInit();//
                break;
            case "Home":
                gameState= new GameStateHome(gb,pd);
                break;
            case "Arena":
                gameState= new GameStateArena(gb,pd);
                break;
            default:
                Debug.Log(next+" is not a real game state.");
                break;
        }
        return gameState;
    }
}