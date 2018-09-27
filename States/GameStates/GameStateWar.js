public class GameStateWar extends GameState{
	public function cycleState(){
		spawnUnits();
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