public class StartScreenState extends GameGUIState{
	protected var mySkin : GUISkin;
	protected var buttonStyle : GUIStyle;
	protected var menuBack : Texture2D;
	protected var loadingScreen : Texture2D;
	protected var nameExists : Texture2D;
	protected var subBackground: Texture2D;
	protected var buttonStartX: float;
	protected var buttonStartY: float;
	protected var buttonW: float;
	protected var buttonH: float;
	protected var multiPlayer: boolean;
	protected var arrSize: int;
	protected var modelArrSize: int;
	protected var wlen: int;
    protected var titleX:int;//not sure why these two are here
    protected var titleY:int;

	public function StartScreenState(){
		//menuState = MENUSTATES.MULTIPLAYER;
		//lastState = menuState;
		mySkin = Resources.Load("GUI/BasicSkin", typeof(GUISkin));
		loadingScreen = Resources.Load("GUI/loading", typeof(Texture2D));
		nameExists = Resources.Load("GUI/NameExists", typeof(Texture2D));
		subBackground = Resources.Load("GUI/creation001", typeof(Texture2D));
		loadBackground();
		Cursor.visible =true;
		GUI.skin = mySkin;   
		buttonStyle = GUI.skin.GetStyle("button");
		//try to pull these out
	    buttonW=Screen.width/5;
	    buttonH=Screen.height/10;
	    buttonStartX=(Screen.width/2)-(buttonW/2);
	    buttonStartY=(Screen.height/3);
	    titleX= Screen.width/4;
	    titleY= Screen.height/10;
		

	    GUI.DrawTexture(Rect (0,0,Screen.width,Screen.height),menuBack);
	    GUI.skin.GetStyle("label").fontSize = 50;
	    GUI.Label(Rect(titleX,titleY,2*titleX,2*titleY), "Beyond \n the Breach");
	    GUI.skin.GetStyle("label").fontSize = 25;
	}

	private function loadBackground(){
		var backgrounds: Object[]= Resources.LoadAll("BackgroundImages", typeof(Texture2D)) ;
		var n : int;
		n = Mathf.Floor(Random.Range(0,backgrounds.length));
		menuBack = backgrounds[n];
	}

    //call in all child states
	public function display(){
		GUI.skin = mySkin;   
		buttonStyle = GUI.skin.GetStyle("button");
		//try to pull these out
	    buttonW=Screen.width/5;
	    buttonH=Screen.height/10;
	    buttonStartX=(Screen.width/2)-(buttonW/2);
	    buttonStartY=(Screen.height/3);
	    var titleX= Screen.width/4;
	    var titleY= Screen.height/10;
		

	    GUI.DrawTexture(Rect (0,0,Screen.width,Screen.height),menuBack);
	    GUI.skin.GetStyle("label").fontSize = 50;
	    GUI.Label(Rect(titleX,titleY,2*titleX,2*titleY), "Beyond \n the Breach");
	    GUI.skin.GetStyle("label").fontSize = 25;
	}
}
/*
private var listNames : String [] = [""];//player names
private var wNames : String [] = [""];//world names
private var modNames : String [] = [""];//world names
private var scrollVector: Vector2 = Vector2.zero;
private var gridInt: int =0;
private var modelGridInt: int =0;
private var wGridInt: int =0;
*/