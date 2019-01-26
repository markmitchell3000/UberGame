/*No combat, exiting state is based on player input.  Big castle with lots of 
loot to show off.  May have civilians or workers but mostly just loops players 
actions*/
public class GameStateHome extends GameState{

	public function GameStateHome(playerData:PlayerData,gameboard:GameBoard){
    	//special home prep
    	/*Very little to do at home at the moment, saves happen on timer*/
    	super(playerData,gameboard,"Map");
    }

	public function cycleState(time:float){
		super.cycleState(time);
	}
}