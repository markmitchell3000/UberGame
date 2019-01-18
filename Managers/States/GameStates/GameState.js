public class GameState{
	/*Attacks are cycled and as damage is applied, locations are updated and 
	attacks are vanished.  Attacks are similar to objects or units but so quick 
	and efferal that they are not save with the other game data.*/
    protected var attacks:AttackCollection;//singleton class
    protected var subTeamList:SubteamGroupNode;//linked list of groups on map
    protected var player:Unit;
    /*Game board stores all data that can be stored and loaded from saved game 
    such as units and objects.*/
    protected var gameBoard:GameBoard;
    
    //updates to attacks and gameboard are handled here.
	public function cycleState(){
        //abstract function
	}

	public function cycleState(time:float){
		var curGroup:SubteamGroupNode=subTeamList;
		//update all bots
        while(curGroup!=null){
            ((SubteamGroup)curGroup.getData()).updateUnits(time);
            curGroup=curGroup.next;
        }
        //update player, maybe override so a different update is used
        player.unitData.updateUnit(time);//controller changes states of player
        //update attacks in the collection
        attacks.update(time);
	}

}
