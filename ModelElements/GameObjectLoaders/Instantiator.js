import System.Collections.Generic;

public class Instantiator extends MonoBehaviour{
	private var playerSpot : Vector3;
	
	private var yPos:float=13;//1.3;//4.24

	private var dm: DataManager=DataManager.getDataManager();

	public var camera_01: GameObject;
	public static var inst: Instantiator;

	public function Instantiator () {
		createPlayer();
        //setTilesObj();//might be build inside tiles
        buildGameBoard(DataManager.getDataManager().getGameBoard());
	}

	public static function getInst(){
		if(inst==null){
			new Instantiator();
		}
		return inst;
	}

	private function createPlayer(){		
		var modelObject :GameObject;
		playerObj = Instantiate(Global_Variables.hero_001,transform.position,transform.rotation);
		playerObj.transform.position.y= yPos;
		playerObj.GetComponent(Unit_Data).setHome(transform.position);

		var modelDir:String =dm.getPlayerData().modelString;
		var playerOptions: Object[] = Resources.LoadAll("Model_Prefabs/Player_Models/"+modelDir, GameObject);	
		modelObject=playerOptions[Random.Range(0,playerOptions.length)];
		playerObj.GetComponent(Unit_Data).setModel(modelObject);
		camera_01.GetComponent(Camera_MMOStyle).setTarget(playerObj.transform);
		camera_01.GetComponent(OverlayAndMenus).setUnitData(playerObj.GetComponent(Unit_Data));
		camera_01.GetComponent(OverlayAndMenus).setPlayerControls(playerObj.GetComponent(Player_Controls_002));
	}

	//function is used to load objects according to how the gameboard describes them.
	private function buildGameBoard(gB:GameBoard){
		var size=gB.sizeXY;
		var randomStart:boolean=dm.getRandomStart();
	    var playerPlaced =false;
	    for(var i=-20;i<(size+20);i++){
	    	for(var j=-20;j<(size+20);j++){
	    		var tempI:int=((i<0)?0:((i>=size)?(size-1):i));
	    		var tempJ:int=((j<0)?0:((j>=size)?(size-1):j));
	    		var spot:Tile=gB.getGG().getSpot(new Point(tempI,tempJ));
                spot.build(go, transform.position, transform.rotation, new Point(i,j));
	    	}
	    }
	    //for random placement
	    if(randomStart){
	    	while(!playerPlaced){
		    	var yVal = Random.Range(2,size-2);
		    	var xVal = Random.Range(2,size-2);
		    	var grd:boolean=gB.grid[yVal,xVal]==TILE_TYPE.GROUND;//isPassable
		    	var sdw:boolean=gB.grid[yVal,xVal]==TILE_TYPE.SIDEWALK;
		    	var asp:boolean=gB.grid[yVal,xVal]==TILE_TYPE.ASPHALT;
		    	if(grd||sdw||asp){
					playerPlaced =true;
					playerObj.transform.position.z = ObjectAdjuster.getOA().adjCoord(yVal);
					playerObj.transform.position.x = ObjectAdjuster.getOA().adjCoord(xVal);			   	
			    }
		    }
	    }
	    else{
	    	playerObj.transform.position.z = ObjectAdjuster.getOA().adjCoord(dm.getPlayerData().yCoord);
			playerObj.transform.position.x = ObjectAdjuster.getOA().adjCoord(dm.getPlayerData().xCoord);
	    }
	    playerObj.transform.position.y = yPos;
		//place units
		for(var gId=0;gId<gB.gbGroups.Count;gId++){
	        loadUnitModels(gB.gbGroups.Item[gId]);
	    }
	}

	private function loadUnitModels(gp:GBGroup){
		gp.teamStruct.LoadUnits(gp);
	}
}