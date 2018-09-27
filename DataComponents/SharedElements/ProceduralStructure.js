public class ProceduralStructure{
	private var grid: GameGrid;
	private var minDis: int;//= 5;
	private var maxDis: int;//= minDis*3;

	public function ProceduralStructure(startPnt:Point, endPnt:Point, minSize:int, gGrid: GameGrid){
		minDis = minSize;
		maxDis = minDis*3;
		grid = gGrid;
		buildFloor(startPnt, endPnt);
		buildLevel(startPnt, endPnt);
	}

	//fix the range
	private function buildFloor(startY:int, startX:int, endY:int, endX:int){
		var modelObject :GameObject;
		for(var i=startY; i<(endY+1); i++){
			for(var j=startX;j<(endX+1);j++){
				grid.setPoint(new Point(i, j), TILE_TYPE.FLOOR);
		    }
		}
	}

    private function roomTooSmall(startPnt: Point, endPnt: Point){
    	var isMinWidth:boolean= (endPnt.x-startPnt.x)<=minDis;
    	var isMinHeight:boolean= (endPnt.y-startPnt.y)<=minDis;
    	return (isMinHeight||isMinWidth);
    }
	//start X and Y and end X and Y
	private function buildLevel(sPnt, ePnt:Point){
		//test if size is too small
		if(roomTooSmall(sPnt,ePnt)){return;}
		//Build container walls
		buildWalls(sPnt,ePnt);
		var xSmall = ((ePnt.x-sPnt.x)<=(minDis*2));
		var ySmall = ((ePnt.y-sPnt.y)<=(minDis*2));
		/*Small case means that the container can only be partitioned a single direction, 
		this is like offices going down a hallway*/
		if(xSmall||ySmall){
			smallLvlCase(sPnt, ePnt, xSmall, ySmall);
			return;
		}
		var startX: int=sPnt.x+ (Random.Range(minDis,maxDis));
		var startY: int=sPnt.y+ (Random.Range(minDis,maxDis));

		var sameSide =0;
		//Ensure gap of at least 5
		if(((startX-minDis)<=sPnt.x)||(startX>(ePnt.x-minDis))){
			startX=sPnt.x; 
			sameSide++;
		}
		if(((startY-minDis)<=sPnt.y)||(startY>(ePnt.y-minDis))){
			startY=sPnt.y; 
			sameSide++;
		}
		//calculate end x & y
		var endX  : int= startX + (Random.Range (minDis,maxDis-minDis));
		var endY  : int= startY + (Random.Range (minDis,maxDis-minDis));
		//Ensure gap of at least 5
		if((endX+minDis)>=ePnt.x){
			endX=ePnt.x; 
			sameSide++;
		}
		if((endY+minDis)>=ePnt.y){
			endY=ePnt.y; 
			sameSide++;
		}
		//room matches container so return or room too small
		if(sameSide==4){
			return;
		}
	    //construct walls from 3d bricks for room
	    buildWalls(new Point(startX,startY),new Point(endX,endY));
	    //sets up 1 to 4 sections to be divided
	    var isVert = new boolean[4];
	    var corners= new int[8];
	    //room either splits by drawing vertical lines from
	    //each corner or by drawing horizontal lines.
		isVert[0]=(Random.value >= 0.5);
		isVert[1]=(Random.value >= 0.5);
		isVert[2]=(Random.value >= 0.5);
		isVert[3]=(Random.value >= 0.5);

		corners[0]=(isVert[0] ? startX : sPnt.x);
		corners[1]=(isVert[0] ? ePnt.y : endY);
		corners[2]=(isVert[1] ? endX : ePnt.x);
		corners[3]=(isVert[1] ? ePnt.y : endY);
		corners[4]=(isVert[2] ? endX : ePnt.x);
		corners[5]=(isVert[2] ? sPnt.y : startY);
		corners[6]=(isVert[3] ? startX : sPnt.x);
		corners[7]=(isVert[3] ? sPnt.y : startY);

	    //
	    if((endY<ePnt.y)&&(corners[0]<corners[2])){
	        buildLevel(new Point(corners[0],endY), new Point(corners[2],ePnt.y));
	    }
	    if((endX<ePnt.x)&&(corners[5]<corners[3])){
	        buildLevel(new Point(endX,corners[5]), new Point(ePnt.x,corners[3]);
	    }
	    if((sPnt.y<startY)&&(corners[6]<corners[4])){
	        buildLevel(new Point(corners[6],sPnt.y), new Point(corners[4],startY));
	    }
	    if((sPnt.x<startX)&&(corners[7]<corners[1])){
	        buildLevel(new Point(sPnt.x,corners[7]), new Point(startX,corners[1]));
	    }
	}

	private function smallLvlCase(sPnt: Point, ePnt: Point, xSmall: boolean, ySmall: boolean){
		if(xSmall&&ySmall){
			return;}
		else if(xSmall){
			var tempsPntY = sPnt.y;
			while(tempsPnt.y<(ePnt.y-(3*minDis))){
	            buildWalls(new Point(sPnt.x,tempsPnt.y), new Point(ePnt.x,tempsPntY+minDis));
	            tempsPntY +=minDis;
			}
		}
		else{
			var tempsPntX = sPnt.x;
			while(tempsPntX<(ePnt.x-minDis)){
	            buildWalls(new Point(tempsPntX, sPnt.y), new Point(tempsPntX+minDis, ePnt.y));
	            tempsPntX +=minDis;
			}
		}
	}

	private function buildWalls(sPnt: Point, ePnt: Point){
		var modelObject :GameObject;
		//Build top North and south walls
		var temp1 = Random.Range(sPnt.x+1,ePnt.x-1);
		var temp2 = Random.Range(sPnt.x+1,ePnt.x-1);
		var temp3 = Random.Range(sPnt.y+1,ePnt.y-1);
		var temp4 = Random.Range(sPnt.y+1,ePnt.y-1);
	    if(grid.getPoint(new Point(sPnt.y,sPnt.x))==TILE_TYPE.DOOR){
	    	if(grid.getPoint(new Point(sPnt.y,sPnt.x+1))==TILE_TYPE.FLOOR){grid.setPoint(new Point(sPnt.y,sPnt.x+1),TILE_TYPE.DOOR);}
	    	if(grid.getPoint(new Point(sPnt.y+1,sPnt.x))==TILE_TYPE.FLOOR){grid.setPoint(new Point(sPnt.y+1,sPnt.x),TILE_TYPE.DOOR);}
	    }
	    if(grid.getPoint(new Point(ePnt.y,sPnt.x))==TILE_TYPE.DOOR){
	    	if(grid.getPoint(new Point(ePnt.y,sPnt.x+1))==TILE_TYPE.FLOOR){grid.setPoint(new Point(ePnt.y,sPnt.x+1),TILE_TYPE.DOOR);}
	    	if(grid.getPoint(new Point(ePnt.y-1,sPnt.x))==TILE_TYPE.FLOOR){grid.setPoint(new Point(ePnt.y-1,sPnt.x),TILE_TYPE.DOOR);}
	    }
	    if(grid.getPoint(new Point(sPnt.y,ePnt.x))==TILE_TYPE.DOOR){
	    	if(grid.getPoint(new Point(sPnt.y,ePnt.x-1))==TILE_TYPE.FLOOR){grid.setPoint(new Point(sPnt.y,ePnt.x-1),TILE_TYPE.DOOR);}
	    	if(grid.getPoint(new Point(sPnt.y+1,ePnt.x))==TILE_TYPE.FLOOR){grid.setPoint(new Point(sPnt.y+1,ePnt.x),TILE_TYPE.DOOR);}
	    }
	    if(grid.getPoint(new Point(ePnt.y,ePnt.x))==TILE_TYPE.DOOR){
	    	if(grid.getPoint(new Point(ePnt.y,ePnt.x-1))==TILE_TYPE.FLOOR){grid.setPoint(new Point(ePnt.y,ePnt.x-1),TILE_TYPE.DOOR);}
	    	if(grid.getPoint(new Point(ePnt.y-1,ePnt.x))==TILE_TYPE.FLOOR){grid.setPoint(new Point(ePnt.y-1,ePnt.x),TILE_TYPE.DOOR);}
	    }
	    for(var i=sPnt.x;i<=ePnt.x;i++){
	    	if(grid.getPoint(new Point(sPnt.y, i))==TILE_TYPE.FLOOR){
	    		if(i!=temp1){
			    	grid.setPoint(new Point(sPnt.y, i),TILE_TYPE.WALL);
			    }
			    else{
			    	grid.setPoint(new Point(sPnt.y, i),TILE_TYPE.DOOR);
			    }
		    }
		    if(grid.getPoint(new Point(ePnt.y, i)==TILE_TYPE.FLOOR){
		    	if(i!=temp2){
					grid.setPoint(new Point(ePnt.y, i),TILE_TYPE.WALL);
			    }
			    else{
			    	grid.setPoint(new Point(ePnt.y, i),TILE_TYPE.DOOR);
			    }
		    }
	    }
	    //Build east and west walls
	    for(var j=(sPnt.y+1);j<=(ePnt.y-1);j++){
	    	if(grid.getPoint(new Point(j, sPnt.x)==TILE_TYPE.FLOOR){
	    		if(j!=temp3){
			    	grid.setPoint(new Point(j, sPnt.x),TILE_TYPE.WALL);
			    }
			    else{
			    	grid.setPoint(new Point(j, sPnt.x),TILE_TYPE.DOOR);
			    }
		    }
		    if(grid.getPoint(new Point(j, ePnt.x)==TILE_TYPE.FLOOR){
		    	if(j!=temp4){
					grid.setPoint(new Point(j, ePnt.x),TILE_TYPE.WALL);
			    }
			    else{
			    	grid.setPoint(new Point(j, ePnt.x),TILE_TYPE.DOOR);
			    }
		    }
	    }
	}
}







