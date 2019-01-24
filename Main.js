public var game:Game;

function Awake(){
	DontDestroyOnLoad (transform.gameObject);
    game = Game.getGame();
}

function update(){
	var time:float=Time.deltaTime;
	game.gm.updateGame(time);
}

public class Game{
	public var dm:DataManager;
	public var gm:GameManager;
    public static var game: Game;

	public function Game(){
        dm = new DataManager();
        //dm = dm.dm;
        gm = new GameManager();
	}

	public static function getGame(){
		if(game ==null){
		    game = new Game();
	    }
	    return game;
	}
}


