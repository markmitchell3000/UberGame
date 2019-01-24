public class GameStateMission extends GameState{

    public function GameStateMission(playerData:PlayerData,gameboard:GameBoard){
    	//special mission prep
    	/*Establish victory check timer and goal locations. Saves may happen on 
    	a timer.  Upon victory or maybe defeat the save game is deleted for this
    	map*/
    	super(playerData,gameboard);
    }

	public function cycleState(time:float){
	}
}