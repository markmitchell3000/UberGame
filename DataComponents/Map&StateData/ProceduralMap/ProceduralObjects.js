/*class is used to fill portions of the grid with random or selective static and
 temporary objects*/
public class ProceduralObjects{
	private var gB:GameBoard;
	private var byRow:boolean;

	public function ProceduralObjects(gB:GameBoard, byRow:boolean){
        this.gB=gB;
        this.byRow=byRow;
	}

	public function placeTownObjects(){
		var sz:int=gB.sizeXY;
		var halfSZ:int=sz/2;
		var qtrSZ:int=halfSZ/2;
		var ethSZ:int=qtrSZ/2;
        placeVehicles(ethSZ,qtrSZ);//loosely bases around number of buildings
        placeRocks(qtrSZ,halfSZ);//1x1 props
        placePlants(qtrSZ,halfSZ);//1x1 props for now
        placeBarrelsBoxes(ethSZ,qtrSZ, TILE_TYPE.GROUND);//1x1 props for now
        placeStatues(5,10);
	}

	public function placeOutsideObjects(){
		var sz:int=gB.sizeXY;
		var halfSZ:int=sz/2;
		placeRocks(halfSZ/2,halfSZ);//1x1 props
        placePlants(halfSZ/2,halfSZ);//1x1 props for now
	}

	public function placeMissionObjects(){
		placeBarrelsBoxes(50,75, TILE_TYPE.FLOOR);//1x1 props for now
		placeEquipment(50,75);//1x1 props for now
	}

	private function placeVehicles(lower:int, higher:int){
		var vehicleCnt:int=Random.Range(lower,higher);
		var under=new ArrayList();
		under.Add(TILE_TYPE.ASPHALT);
		var wide:int=byRow?4:2;
		var high:int=byRow?2:4;
		var modelStr:String=gB.stcFolders[2];
        randomPlacer(vehicleCnt, under, wide,high, modelStr,true);
	}

	private function placeRocks(lower:int, higher:int){
		var rockCnt:int=Random.Range(lower,higher);
		var under=new ArrayList();
		under.Add(TILE_TYPE.GROUND);
		var wide:int=1;
		var high:int=1;
		var modelStr:String=gB.stcFolders[0];
        randomPlacer(rockCnt, under, wide,high, modelStr,true);
	}

	private function placePlants(lower:int, higher:int){
		var plantCnt:int=Random.Range(lower,higher);
		var under=new ArrayList();
		under.Add(TILE_TYPE.GROUND);
		var wide:int=1;
		var high:int=1;
		var modelStr:String=gB.stcFolders[1];
        randomPlacer(plantCnt, under, wide,high, modelStr,true);
	}

	private function placeBarrelsBoxes(lower:int, higher:int, tt:TILE_TYPE){
		var boxCnt:int=Random.Range(lower,higher);
		var under=new ArrayList();
		under.Add(tt);
		var wide:int=1;
		var high:int=1;
		var modelStr:String=gB.tmpFolders[0];
        randomPlacer(boxCnt, under, wide,high, modelStr,false);
	}

	private function placeEquipment(lower:int, higher:int){
		var eqpCnt:int=Random.Range(lower,higher);
		var under=new ArrayList();
		under.Add(TILE_TYPE.FLOOR);
		var wide:int=1;
		var high:int=1;
		var modelStr:String=gB.tmpFolders[1];
        randomPlacer(eqpCnt, under, wide,high, modelStr,false);
	}

	private function placeStatues(lower:int, higher:int){
		var staCnt:int=Random.Range(lower,higher);
		var under=new ArrayList();
		under.Add(TILE_TYPE.GROUND);
		var wide:int=1;
		var high:int=1;
		var modelStr:String=gB.tmpFolders[3];
        randomPlacer(staCnt, under, wide,high, modelStr,false);
	}

    private function randomPlacer(cnt:int, arr:ArrayList, wide:int, high:int, s:String, isStatic:boolean){
    	for(var i=0;i<cnt;i++){
			var notplaced=true;
			var tempCnt:int=0;
			//trys 20 times to place item
			while((notplaced)&&(tempCnt<20)){
				var row:int =Random.Range(3,gB.sizeXY-4);
				var col:int =Random.Range(3,gB.sizeXY-4);
				if(groundSafeChecker(arr, row, col)){
					placementHelper(row,col,wide,high,arr,s,isStatic);
				}
				tempCnt++;
			}
		}
    }

	private function placementHelper(row:int,col:int,wide:int, high:int, under: ArrayList, s:String, isStatic:boolean){
		var tempBool=true;
		for(var j=row-1;j<row+(high+1);j++){
			for(var k=col-1;k<col+(wide+1);k++){
				//examine edges
                if((j==row-1)||(j==row+high)||(k==col-1)||(k==col+wide)){
                	var bool1:boolean=gB.grid[j,k]!=TILE_TYPE.WALL;
                	var bool2:boolean=gB.grid[j,k]!=TILE_TYPE.STATIC_OBJ;
                	var bool3:boolean=gB.grid[j,k]!=TILE_TYPE.TEMP_OBJ;
                	tempBool=tempBool&&bool1&&bool2&&bool3;
                }
                else{
                    tempBool=(tempBool&&(groundSafeChecker(under, j, k)));
                }
                if(!tempBool){
                	j=row+(high+1);
                	break;
                }
			}
		}
		if(tempBool){
			notplaced=false;
			//place it
			for(var l=row;l<row+high;l++){
				for(var m=col;m<col+wide;m++){
					gB.grid[l,m]=TILE_TYPE.STATIC_OBJ;
				}
			}
			var gbo:GBObject=new GBObject();
			gbo.modelString=s;
			gbo.xWidth=wide;
			gbo.yHeight=high;
			gbo.under=under.Item[0];
			gbo.byRow=byRow;
			gbo.xCoord=col;
			gbo.yCoord=row;
			if(isStatic){
				gbo.destroyable=false;
				gB.staticObjs[row+","+col]=gbo;
			}
			else{
				gbo.destroyable=true;
				gB.tempObjs[row+","+col]=gbo;
			}
		}
    }

    private function groundSafeChecker(arr:ArrayList, j:int,k:int):boolean{
    	var isSafe:boolean=false;
    	for(var i=0;i<arr.Count;i++){
    		var temp:TILE_TYPE=arr.Item[i];
    		isSafe=(isSafe||(gB.grid[j,k]==temp));
    	}
        return isSafe;
    }
}