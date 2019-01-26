/*Game state ends when a point of kill count is reached. Arenas are mostly for 
earning gold and xp.  These have a nation location but are not a stored 
gameboard, they are created everytime based on nations level and players 
level.*/
public class GameStateArena extends GameState{
	private var nextCheck:float;
	private var points:int;
    private var maxPoints:int;//points needed for victory
    private var isDefeated:boolean;
    private var isVictorious:boolean

	public function GameStateArena(playerData:PlayerData,gameboard:GameBoard){
    	//special Arena prep
    	nextCheck=3.0;
    	isDefeated=false;
    	isVictorious=false;
    	/*Establish spawners and set timer, board may track points or state 
    	might*/
    	super(playerData,gameboard);
    }

	public function cycleState(time:float){
		nextCheck-=time;
		if(!isDefeated&&!isVictorious){
		    if(nextCheck<=0){
                checkVictory();
                nextCheck=3.0;
            }
            super.cycleState(time);
        }
        else{
        	if(nextCheck<=0){
        		//call game manager to return home
        	}
        }
	}

    public function setMaxPoints(pnt:int){
    	maxPoints=pnt;
    }

	public function addPoints(pnt:int){
        points+=pnt;
	}

	public function playerDied(){
        isDefeated=true;
        nextCheck=10.0;
	}

	private function checkVictory(){
		if(points>=maxPoints){
			isVictorious=true;
			nextCheck=10.0;
			//give player bonus gold and xp
		}
	}
}