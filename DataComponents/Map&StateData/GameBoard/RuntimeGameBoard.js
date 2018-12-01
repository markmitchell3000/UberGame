public class RuntimeGameBoard{
	//Each unit group references a GBGroup that it can update maybe
	private var listHeadUGN:UnitGroupNode;//List used for iterating over UnitGroups
	//maybe a tail
	private var unitGroups:Hashtable; //Groups can be referenced by name
	private gameBoard:GameBoard;//used for saving and loading, updated frequently 
	public function RuntimeGameBoard(gb:GameBoard){

	}

        public function loadFromGameBoard(){
        }

        public function saveStateToGameBoard(){
        }
}
