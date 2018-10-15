/* This class is used for the placement of builings(static objects) as well as 
the placement of asphalt and side walks.  Future plans may include some 
procedural structures being called.*/
public class ProceduralTown{
	private var gB:GameBoard;
    public var byRow:boolean;

	public function ProceduralTown(gB:GameBoard){
        this.gB=gB;
	}

	public function buildTown(){
        buildEdges();
		//build by row or by column
		byRow= (Random.value >= 0.5);
		//12X12 fills up a 200X200 map with edges
        var rowColSize=(gB.sizeXY-8)/16;
		for(var i=0;i<rowColSize;i++){
			/*pick zoning, in all but the last row 16 sized buildings will build
			  the front block as well with road, meaning the i will increment*/
			var zoneSize:int=3;//Random.Range(0,10);
			var zoneType:int=Random.Range(0,2);//2 per town type, residential, commercial etc. represented as numbers  
			for(var j=0;j<rowColSize;j++){
                var yVal:int=byRow?((i*16)+3):((j*16)+3);
                var xVal:int=byRow?((j*16)+3):((i*16)+3);
				if(zoneSize<5){
					eightByEightBuilding(yVal,xVal, byRow, zoneType);
				}
                else if(zoneSize<7){
                    eightBySixteenBuilding(yVal,xVal, byRow, zoneType);
                }
                else{
                	sixteenBySixteenBuilding(yVal,xVal, byRow, zoneType);
                }
			}
		}
	}

    private function buildEdges(){
        for(var i=1;i<(gB.sizeXY-2);i++){
            gB.grid[1,i]=TILE_TYPE.ASPHALT;
            gB.grid[2,i]=TILE_TYPE.ASPHALT;
            gB.grid[i,1]=TILE_TYPE.ASPHALT;
            gB.grid[i,2]=TILE_TYPE.ASPHALT;
            gB.grid[gB.sizeXY-2,i]=TILE_TYPE.ASPHALT;
            gB.grid[gB.sizeXY-3,i]=TILE_TYPE.ASPHALT;
            gB.grid[i,gB.sizeXY-2]=TILE_TYPE.ASPHALT;
            gB.grid[i,gB.sizeXY-3]=TILE_TYPE.ASPHALT;
        }
    }
    
    private function eightByEightBuilding(yVal:int,xVal:int, byRow:boolean, type:int){
    	for(var i=0;i<16;i++){
    		for(var j=0;j<16;j++){
    			var tile:TILE_TYPE=(byRow?gB.grid[yVal+i,xVal+j]:gB.grid[yVal+j,xVal+i]);
                if((i>=7)&&(i<=14)&&(j>=4)&&(j<=11)){
                    tile=TILE_TYPE.STATIC_OBJ;
                }
                else if((i==4)||(i==15)){
                    tile=TILE_TYPE.SIDEWALK;
                }
                else if((i>=0)&&(i<4)){
                	tile=TILE_TYPE.ASPHALT;
                }
                if(byRow){
					gB.grid[yVal+i,xVal+j]=tile;
                }
                if(!byRow){
					gB.grid[yVal+j,xVal+i]=tile;
                }
    		}
    	}
    	var gbo:GBObject=new GBObject();
    	gbo.modelString=getZoneTypeModel(type);
        gbo.xWidth=8;
        gbo.yHeight=8;
        gbo.byRow=byRow;
        gbo.destroyable=false;
        gbo.under=TILE_TYPE.SIDEWALK;
    	if(byRow){
    		gbo.xCoord=(xVal+4);
    		gbo.yCoord=(yVal+7);
    		gB.staticObjs[(yVal+7)+","+(xVal+4)]=gbo;
    	}
    	else{
    		gbo.xCoord=(xVal+7);
    		gbo.yCoord=(yVal+4);
    		gB.staticObjs[(yVal+4)+","+(xVal+7)]=gbo;
    	}
    }
    
    //models are 8 in rows and 16 in cols, rotate them if by column
    private function eightBySixteenBuilding(yVal:int, xVal:int, byRow:boolean, type:int){

    }

    private function sixteenBySixteenBuilding(yVal:int, xVal:int, byRow:boolean, type:int){

    }
    
    //sizes are 0=8X8, 1=8x16, 2=16X8, 3=16x16
    private function getZoneTypeModel(type:int){
        //may switch to building objects that contain the strings and possibly size data
        //enum BUILDING{HOME, STORE, FACTORY, WAREHOUSE, FARM, MINE, MILITARY, RESEARCH, GOVERNMENT, PUBLIC, URBAN, MISC};
        var base:int=0;//type is added to it to reference the correct building string
        switch(gB.townType){
            case TOWN_TYPE.RESIDENTIAL:
                base=0;
            case TOWN_TYPE.INDUSTRIAL:
                base=2;
            case TOWN_TYPE.FARMMINE:
                base=4;
            case TOWN_TYPE.MIL_BASE:
                base=6;
            case TOWN_TYPE.GOV_OFFICES:
                base=8;
            case TOWN_TYPE.BIG_CITY:
                base=10;
        }
    	return gB.bldFolders[base+type];//two buildings types belong to each town type
    }

}
