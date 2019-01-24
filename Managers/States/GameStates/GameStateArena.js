/*Game state ends when a point of kill count is reached. Arenas are mostly for 
earning gold and xp.  These have a nation location but are not a stored 
gameboard, they are created everytime based on nations level and players 
level.*/
public class GameStateArena extends GameState{
	public function GameStateArena(playerData:PlayerData,gameboard:GameBoard){
    	//special Arena prep
    	/*Establish spawners and set timer, board may track points or state 
    	might*/
    	super(playerData,gameboard);
    }
	public function cycleState(time:float){
	}
}