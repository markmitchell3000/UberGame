/*The war game state is ended when when the bases of one set of allies remains.
At this point the units remaining are all set to idle and player input only
affect the gui state but have no control over the unit.  Gui state can set the
game state to the players home or a map or another state/*/
public class GameStateWar extends GameState{
	private var isDefeated:boolean;
	private var isVictorious:boolean;
	private var nextCheck:float;
	private var points:int;//used for bonus money and xp in victory or defeat
	private var nextSpawn:float;

    public function GameStateWar(playerData:PlayerData,gameboard:GameBoard){
    	//special war prep
    	isDefeated=false;
    	isVictorious=false;
    	nextCheck=3.0;
    	points=0;
        nextSpawn=90.0;//90 seconds per spawn
    	/*Establish spawners and set timer, establish victory check timer*/
    	super(playerData,gameboard);
    }

	public function cycleState(time:float){
		nextCheck-=time;
		if(!isDefeated&&!isVictorious){
			nextSpawn-=time;
		    if(nextCheck<=0){
                checkVictory();
                nextCheck=3.0;
            }
            if(nextSpawn<=0){
            	spawnUnits();
            	nextSpawn=90.0;
            }
		    super.cycleState(time);
		}
		else{
        	if(nextCheck<=0){
        		//call game manager to return home
        	}
        }
	}

    public function addPoints(pnt:int){
    	points+=pnt;
    }

	private function spawnUnits(){
        //each team spawns units
	}

    /*Scan all enemy subgroups to see if enemies are defeated or ally is 
    defeated.  This is used to detect victory or defeat.*/
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

    /*Set victory screen and distribute xp and wealth*/
	private function victoryDist(){

	}

	/*Set defeat screen and distribute xp and wealth*/
	private function defeatDist(){

	}
}