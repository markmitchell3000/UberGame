public class GameState{
	/*Attacks are cycled and as damage is applied, locations are updated and 
	attacks are vanished.  Attacks are similar to objects or units but so quick 
	and efferal that they are not save with the other game data.*/

    protected var player:Unit;
    /*Game board stores all data that can be stored and loaded from saved game 
    such as units and objects.*/
    protected var gameBoard:GameBoard;

    /*Gameboards might be created right before this or loaded from a file.*/
    public function GameState(playerData:PlayerData,gB:GameBoard){
        playerData.instantiatePlayerUnit();//creates unit from data and adds to collection
        player=unitCollection.getUC().getUnit(playerData.hashid);//retrieve unit from collection
        gameboard=gB;
        //initialize gameboard units and models
    }


    /*Init creates or loads the gameboard, during init the player is loaded or 
    created.  Load will generate or load the gameboard data and has the 
    playerdata, this is not loaded until the next game state however.*/
    public function GameState(){
        
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
