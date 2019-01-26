/*Largely does nothing but the gameboard is selected here or intiantiated, and 
the same is true of the playerdata.  This can be used to build the next state.  
Similar to the load state but data creation and selection is core to this role.*/
public class GameStateInit extends GameState{
    public var playerData:PlayerData;//used to populate next state

	public function cycleState(time:float){
	}

	public function setPlayerData(data:PlayerData){
        playerData=data;
	}

	public function loadNextState(next:String){
        
	}


}