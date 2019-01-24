/*The war game state is ended when when the bases of one set of allies remains.
At this point the units remaining are all set to idle and player input only
affect the gui state but have no control over the unit.  Gui state can set the
game state to the players home or a map or another state/*/
public class GameStateWar extends GameState{

    public function GameStateWar(playerData:PlayerData,gameboard:GameBoard){
    	//special war prep
    	/*Establish spawners and set timer, establish victory check timer*/
    	super(playerData,gameboard);
    }

	public function cycleState(time:float){
		//on certain frame groups may spawn units
		//spawnUnits();
	}

	private function spawnUnitss(){
        //each team spawns units
	}

	private function checkVictory(){
		/*var isVictory : boolean;
		for(var i = 0; i<numOfTeams; i++){
			if (teamAlive[i]){
				for(var j=i+1;j<numOfTeams;j++){
					if(teamAlive[j]){
						if(Global_Variables.teamRelation(i+1, j+1)){
							return;
						}
						else{
							Debug.Log("victory");
						}
					}
				}
			}
		}*/
	}
}