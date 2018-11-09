public class UnitABStateScan extends UnitABState{

    public function UnitABStateScan(){
    	super("scan");
    }

    //Unit is scanning, effectively idle but checking every frame called
    public function UnitABStateScan(t:int){
    	super("scan", t);
    }

    public function update(){
    	//scan();//update should be give access to unit
    }

    /*Given a unit detect targets to pursue.  If unit is in pursuit of a target 
      units exact distance can be calculated.  This function is only used for 
      acquiring new targets*/
    private function scan(unitId: String, range:int){
        //queries the grid hash table with a preset range of 1,2,3, or 4 
        //1 is a 3x3 grid(9 checks), i.e. unit at center target is 1 tile away
        //2 is a 5x5 grid(25 checks), i.e. unit at center target is 2 tiles away
        //3 is a 7x7 grid(49 checks) and 4 is a 9x9(81 checks)
	    var hmol :HMObjLocation= HMObjLocation.getHMOL();
	    hmol.updateLoc(unitTf, unitHash);//maybe this should only be called when moving
	    var centerArr=hmol.getObjLoc(unitHash);
	    /*check center, loop around the first value in array automatically 
	    assume x+1,y - x, y+1, and x+1, y+1*/
	    for(var i=0;i<4;i++){
	        var objList:ArrayList=(ArrayList)hmol.checkSpot((Point)centerArr[i]);
            var enemy:GameObject=getEnemyObj(objList);
	        if(enemy!=null){
	            settarget(enemy));
                break;
	        }
	    }
	    //check dist 1
	    //dist 2 ... etc
    }
    
    /*Given an array of hashids, grab the first  */
    private function getEnemyObj(hashArr:ArrayList){
        for(var hasdId: String in hashArr){
        	/*Uses hashid to retrieve enemydata, if enemy is member of enemy 
        	team, then return the obj.  If the entire collection is cycled and 
        	no enemy is found return null*/
        	//if(isEnemy(enemyteam, unitTeam)){return GameObject of enemy unit}
        }
        return null;
    }

    /**/
    private function setTarget(go:GameObject){
    	if(go!=null){
    		//set target to game object
    	}
    	//else do nothing
    }
}