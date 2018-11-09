public class GameGrid{
	private var grid: Tile[,];//collection of static tile objects

	public function GameGrid(size:int){
        grid = new Tile[size,size];
	}

    public function setSpot(loc:Point, tile:Tile){
    	grid[loc.y, loc.x]=tile;
    }

    public function getSpot(loc:Point){
        return grid[loc.y, loc.x]
    }
}