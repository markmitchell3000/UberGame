/*This game state is for towns, forests etc. where the different lands of each 
nation are mapped out*/
public class GameStateMap extends GameState{
    public function GameStateMap(playerData:PlayerData,gameboard:GameBoard){
    	//special Map prep
    	/*There are no victory conditions but maps may have some spawners. Saves
    	happen on a timer.*/
    	super(playerData,gameboard,"Map");//Maps are often transistioned across to other maps
    }

	public function cycleState(float:time){
	}
}