public class OverlayScreenState extends GameGUIState{
	public function display(){
		GUI.skin.GetStyle("label").fontSize = 9;
	    buttonStyle = GUI.skin.GetStyle("button");
	}
}
/*
import UnityEngine.SceneManagement;

enum VIEWSTATES {INGAME, INVENTORY, GLOBALMAP, LOCALMAP, PLAYERINFO, TEAMSTATS, SAVEQUIT, LOADHERO}
static var macroBar: Texture2D;
static var emptyPotion: Texture2D;
static var emptySpell: Texture2D;
static var emptyInventory: Texture2D;
static var emptyHelm: Texture2D;
static var emptyArmor: Texture2D;
static var emptyBelt: Texture2D;
static var emptyBoot: Texture2D;
static var emptyGlove: Texture2D;
static var emptyNecklace: Texture2D;
static var emptyRing: Texture2D;
static var emptyShoulder: Texture2D;
static var emptyBracer: Texture2D;
static var emptyWeapon: Texture2D;
static var emptyStatusBar: Texture2D;
static var healthBar: Texture2D;
static var manaBar: Texture2D;
static var xpBar: Texture2D;
static var globalMap: Texture2D;
static var localMap: Texture2D;
static var playerInfoScreen: Texture2D;
static var playerStatScreen: Texture2D;
static var teamIcon: Texture2D;
//mapIcons
static var playerGlobalIcon: Texture2D;
static var enemyGlobalIcon: Texture2D;
static var teamMapIcons: Hashtable = new Hashtable();

static var portrait: Texture2D;
static var frame: Texture2D;//portrait frame
static var figurePic: Texture2D;
static var teamSymbol: Texture2D;
static var backDrop01: Texture2D;
static var backDrop02: Texture2D;
static var backDrop03: Texture2D;
static var greenMiniMap: Texture2D;
static var worldMap: Texture2D;
static var buttonBack: Texture2D;
static var subBackground: Texture2D;
static var viewState: VIEWSTATES;
//variables for the menus location and size.
static var menusX: float;
static var menusY: float;
static var menusW: float;
static var menusH: float;
//variables for the macrobars location and size.
static var macroBarX: float;
static var macroBarY: float;
static var macroBarW: float;
static var macroBarH: float;
//slot information
static var invSlotSize: float;//height or width
static var slotSize: float;//height or width
static var slotX:float;
static var slotY:float;
static var barsY:float;
static var innerBarH: float;
static var innerBarW: float;
static var buttonStyle : GUIStyle;
static var scrollVector: Vector2 = Vector2.zero;
static var gridInt: int =0;
static var arrSize: int;
static var listNames : String [] = [""];

static var displayNation : int =0;
static var playerRef: Unit_Data; 
static var playerControlsRef: Player_Controls_002;
static var playerSetUp: Boolean = false;

static var curMapData: MapData;
static var teamData:TeamData;
static private var dm: DataManager=DataManager.getDataManager();

static function Awake () {
	viewState = VIEWSTATES.INGAME;
	portrait=Resources.Load("GUI/Portraits/"+dm.getPlayerData().portraitString, typeof(Texture2D));
	frame=Resources.Load("GUI/Portraits/frame", typeof(Texture2D));
	macroBar = Resources.Load("GUI/MacroBar/lavaMacroBar001", typeof(Texture2D));
	emptyPotion = Resources.Load("GUI/MacroBar/EmptyPotionSlot", typeof(Texture2D));
	emptySpell = Resources.Load("GUI/MacroBar/emptySpellSlot", typeof(Texture2D));
	emptyStatusBar = Resources.Load("GUI/MacroBar/emptyStatusBar001", typeof(Texture2D));
	healthBar = Resources.Load("GUI/MacroBar/healthStatusBar", typeof(Texture2D));
	manaBar = Resources.Load("GUI/MacroBar/manaStatusBar", typeof(Texture2D));
	xpBar = Resources.Load("GUI/MacroBar/xpStatusBar", typeof(Texture2D));
	backDrop01 = Resources.Load("GUI/Menu_Stuff/backdrop001", typeof(Texture2D));
	backDrop02 = Resources.Load("GUI/Menu_Stuff/backdrop002", typeof(Texture2D));
	backDrop03 = Resources.Load("GUI/Menu_Stuff/backdrop003", typeof(Texture2D));
	greenMiniMap = Resources.Load("GUI/Maps/MiniMap001", typeof(Texture2D));
	worldMap = Resources.Load("GUI/Maps/worldMap001", typeof(Texture2D));
	emptyInventory = Resources.Load("GUI/Inventory_Stuff/emptyInventorySlot", typeof(Texture2D));
	figurePic = Resources.Load("GUI/Inventory_Stuff/Figure_001", typeof(Texture2D));
	emptyHelm = Resources.Load("GUI/Inventory_Stuff/empty_HelmSlot", typeof(Texture2D));
	emptyArmor = Resources.Load("GUI/Inventory_Stuff/empty_ArmorSlot", typeof(Texture2D));
	emptyBelt = Resources.Load("GUI/Inventory_Stuff/empty_beltSlot", typeof(Texture2D));
	emptyBoot = Resources.Load("GUI/Inventory_Stuff/empty_bootSlot", typeof(Texture2D));
	emptyGlove = Resources.Load("GUI/Inventory_Stuff/empty_GloveSlot", typeof(Texture2D));
	emptyNecklace = Resources.Load("GUI/Inventory_Stuff/empty_necklaceSlot", typeof(Texture2D));
	emptyRing = Resources.Load("GUI/Inventory_Stuff/empty_ringSlot", typeof(Texture2D));
	emptyShoulder = Resources.Load("GUI/Inventory_Stuff/empty_ShouldersSlot", typeof(Texture2D));
	emptyBracer = Resources.Load("GUI/Inventory_Stuff/empty_BracerSlot", typeof(Texture2D));
	emptyWeapon = Resources.Load("GUI/Inventory_Stuff/empty_WeaponSlot", typeof(Texture2D));
	buttonBack = Resources.Load("GUI/Menu_Stuff/buttonBack", typeof(Texture2D));
	subBackground = Resources.Load("GUI/creation001", typeof(Texture2D));
	teamSymbol = Resources.Load("GUI/TeamSymbols/"+dm.getPlayerData().teamSymbolString, typeof(Texture2D));
	mapSymbolLoader();
	menusX = Screen.width/8;
	menusY = Screen.height/8;
	menusW = Screen.width - 2*menusX;
	menusH = Screen.height - 2*menusY;
	macroBarX = Screen.width/5;
	macroBarY = Screen.height-(Screen.height/5);
	macroBarW = Screen.width-(2*(Screen.width/5));
	macroBarH = Screen.height/5;
	invSlotSize = menusW/27;
	slotSize = macroBarW/27;
	slotX = macroBarX+(macroBarW/6);
	slotY = macroBarY+(macroBarH-macroBarH/8)- (.9*slotSize);
	barsY = macroBarY+macroBarH/8;
	innerBarH = (slotSize/2)-slotSize/5;
	innerBarW = (slotSize*10)-slotSize/5;
	Cursor.visible =true;
}

private static function mapSymbolLoader(){

	teamMapIcons[TEAM_NAME.ETERNIAN_REPUBLIC]= Resources.Load("GUI/Maps/symbols/MOTUMapIcon", typeof(Texture2D));
	teamMapIcons[TEAM_NAME.INITIATIVE]= Resources.Load("GUI/Maps/symbols/SHIELDMapIcon", typeof(Texture2D));
	teamMapIcons[TEAM_NAME.NIGHT_HORDE]= Resources.Load("GUI/Maps/symbols/DarkHordeMapIcon", typeof(Texture2D));
	teamMapIcons[TEAM_NAME.PANTHEON]= Resources.Load("GUI/Maps/symbols/GreekEmpireMapIcon", typeof(Texture2D));
	teamMapIcons[TEAM_NAME.SENTAI_CLAN]= Resources.Load("GUI/Maps/symbols/NeutrinosMapIcon", typeof(Texture2D));
	teamMapIcons[TEAM_NAME.SHADOW_EMPIRE]= Resources.Load("GUI/Maps/symbols/HydraMapIcon", typeof(Texture2D));
	teamMapIcons[TEAM_NAME.UNITED_LEAGUE]= Resources.Load("GUI/Maps/symbols/GIJoeMapIcon", typeof(Texture2D));
	teamMapIcons[TEAM_NAME.UTROM_SITH_ALLIANCE]= Resources.Load("GUI/Maps/symbols/GalacticEmpireMapIcon", typeof(Texture2D));
	playerGlobalIcon=Resources.Load("GUI/Maps/playerLocationIcon01", typeof(Texture2D));
}

public static function setUnitData(ref: Unit_Data){
	playerRef = ref;
	playerSetUp = true;
	teamIcon=GlobalArtBank.getTeamIcon(dm.getPlayerData().team);
}

public static function setPlayerControls(ref: Player_Controls_002){
	playerControlsRef= ref;
}

public static function stateChanger(state : VIEWSTATES){
	if(state == VIEWSTATES.GLOBALMAP){
		displayNation = getCurStateId();
		curMapData = dm.getMapData();
	}
	else if(state == VIEWSTATES.TEAMSTATS){
		teamData=dm.getMapData().getTeamData(dm.getPlayerData().team);
        teamData.updateStats();
	}
	viewState = state;
} 

public static function setGlobalMap(gMap: Texture2D){
	globalMap = gMap;
} 

public static function setLocalMap(lMap: Texture2D){
	localMap = lMap;
}

private static function getNationIcon(n: int){
	if(getCurStateId()!=n){
	    return teamMapIcons[curMapData.states[n].ruler];
    }
    else{
        return playerGlobalIcon;
    }
}

private static function getNationInfo(n: int, varN: int){
	if(varN==0){
		return curMapData.states[n].stateName;
	}
	else if(varN==1){
		return Global_Variables.teamNameToString(curMapData.states[n].ruler);
	}
	else if(varN>1&&varN<10){
		if(curMapData.states[n].adjacentStates.Count>(varN-2)){
			return "  "+curMapData.states[curMapData.states[n].adjacentStates[varN-2]].stateName;
		}
		else{
			return "";
		}
	}
}

private static function getCurStateId(){
	return dm.getMapData().curState.stateId;
}*/