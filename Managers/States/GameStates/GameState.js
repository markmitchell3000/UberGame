public class GameState{
	/*Attacks are cycled and as damage is applied, locations are updated and 
	attacks are vanished.  Attacks are similar to objects or units but so quick 
	and efferal that they are not save with the other game data.*/

    protected var player:Unit;
    /*Game board stores all data that can be stored and loaded from saved game 
    such as units and objects.*/
    protected var gameBoard:GameBoard;
    protected var stateAfterLoad:String;//Load state is a transition, what comes after matters

    /*Gameboards might be created right before this or loaded from a file.*/
    public function GameState(playerData:PlayerData,gB:GameBoard,next:String){
        stateAfterLoad=next;//state after load
        initHelp(playerData,gB);
    }

    public function GameState(playerData:PlayerData,gB:GameBoard){
        stateAfterLoad="Home";
        initHelp(playerData,gB);
    }

    private function initHelp(playerData:PlayerData,gB:GameBoard){
        playerData.instantiatePlayerUnit();//creates unit from data and adds to collection
        player=unitCollection.getUC().getUnit(playerData.hashid);//retrieve unit from collection
        gameboard=gB;
        /*Initialize gameboard models for grid objects, map objects and units. 
        Game board should be in a ready location at this point*/
        gameboard.createRuntimeGB()
    }
    /*Init creates or loads the gameboard, during init the player is loaded or 
    created.  Load will generate or load the gameboard data and has the 
    playerdata, this is not loaded until the next game state however.*/
    public function GameState(){
        stateAfterLoad="Home";
    }

    /*Most states Return home, but map and home can go to many states.  Should 
    be changed before next state is created.*/
    public function changeStateAfterLoad(next:String){
        stateAfterLoad=next;
    }
    
    /*Used when playerdata is set during the state, such as in init, could be 
    done for player swaping midgame*/
    public function setPlayerData(data:PlayerData){
       //do nothing in parent class
    }

    /*Used when playerdata is set during the state, such as in init, could be 
    done for player swaping midgame*/
    public function setGameBoard(gb:GameBoard){
       gameboard=gb;
    }

    /*Used to load next state, should be done from uninitialized gameboard*/
    public function createNextState(){
        /*Not implemented from most states, init and load have stored gameboards
         used in the next state*/
    }

    /*Given a state and a gamboard create the next game state*/
    public function createNextState(gb:GameBoard){
        return createNextState(stateAfterLoad,gb,(PlayerData)player.unitData);
    }

    /*Used to load next state, given an uninitialized gameboard and playerData*/
    public function createNextState(gb:GameBoard, pd:PlayerData){
        //call save data
        return new GameStateLoad(stateAfterLoad,gb,next);//load state should be between all states
    }

    /*updates to attacks and gameboard are handled here. Each child should have 
    there own steps and then call super.cycleState*/
	public function cycleState(time:float){
		//update all bots
        gameboard.updateGroups(time)
        //update player, maybe override so a different update is used
        player.unitData.updateUnit(time);//controller changes states of player
        //update attacks in the collection
        AttackCollection.getUC().update(time);
	}

}
