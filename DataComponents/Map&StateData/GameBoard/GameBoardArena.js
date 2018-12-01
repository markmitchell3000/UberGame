public class GameBoardArena extends GameBoard{
    public function GameBoardArena(size:int){
    	super(size);
    	super.frameGameBoard();
    	arenaLayout();
    }

    private function arenaLayout(){
        var pO:ProceduralObjects=new ProceduralObjects(this, true);
        pO.placeOutsideObjects();
        generateQuadrantsUnits();
    }
}
