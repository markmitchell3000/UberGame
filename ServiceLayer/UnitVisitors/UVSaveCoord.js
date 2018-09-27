/*This vistor is used to translate the unitTransforms location 
with a location(s) in grid space (usually 4 locations). If the unit is a player and goes
off the grid, the location is reset and a new map is loaded.  If the unit
is not a player then they are reset but the map is not loaded or saved. */
public class UVSaveCoord implements UnitVisitor
{
    private static var saveCoord:TrVSaveCoord;
    private var point:Point;
    private var isPlayer:Boolean;
    
   public function visitUnit(unit:UnitInner){
        isPlayer=unit.isPlayer;
        unit.UnitTransform.acceptVisitor(this);
    }

    public function visitUnit(unitTrans:UnitTransform){
    	unitTrans.acceptVisitor(saveCoord);
    }

    public function visitUnit(go:GameObject){
        helperSetCoord(go.transform.x, go.transform.y);
    }

    private function helperSetCoord(xVal: float, yVal:float){
        var xCoord=parseInt((xVal+inst.getOffset())/inst.getMultiplier());//remove offsets from placement 
        var yCoord=parseInt((yVal+inst.getOffset())/inst.getMultiplier());
        var eastWestLimit:boolean=((xCoord==0)||(xCoord==(GameBoard.sizeXY-1)));
        var northSouthLimit:boolean=((yCoord==0)||(yCoord==(GameBoard.sizeXY-1)));
        if(eastWestLimit||northSouthLimit){
        	var mapX:int;
        	var mapY:int;
        	if(xCoord==0){
        		xCoord=(GameBoard.sizeXY-3);
                if(isPlayer){mapX=(dm.getGameBoard().xLoc)-1;}//move west
        	}
        	else if(xCoord==(GameBoard.sizeXY-1)){
        		xCoord=2;
        		if(isPlayer){mapX=(dm.getGameBoard().xLoc)+1;}//move east
        	}
        	else if(yCoord==0){
        		yCoord=(GameBoard.sizeXY-3);
        		if(isPlayer){mapY=(dm.getGameBoard().yLoc)+1;}//upperleft is 0,0 then 0 would be north
        	}
        	else{
        		yCoord=2;
        		if(isPlayer){mapY=(dm.getGameBoard().yLoc)-1;}//move south
        	}
            if(isPlayer){
            	dm.getMapData().setCurState(dm.getMapData().curState.stateId,mapY,mapX);
            	dm.setRandomStart(false);
            	SceneManager.LoadScene("ProceduralLevel001");
            }
        }
        pointUpdate(xCoord,yCoord);
    }

    private static function pointUpdate(xCoord:int, yCoord:int){
        /*update grid hash location, removing old grid hash and adding new grid 
        hash, should be 4 points.  Finally store this so that the transform 
        the old location stores */ 
    }

	public static function saveCoord(unitTrans:UnitTransform){
		if(saveCoord ==null){
		    saveCoord = new TrVSaveCoord();
	    }
	    saveCoord.visitUnit(UnitTransform);
	}
}