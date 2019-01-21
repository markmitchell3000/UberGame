public class GameBoardWar extends GameBoard{
    public function GameBoardWar(size:int){
    	super(size);
    	super.frameGameBoard();
    	warLayout();
    }

    private function warLayout(){
        //war scenes should get enemies and allies assigned by owners of territory and those adjacent
        //temporary team assignment
        /*
        var pO:ProceduralObjects=new ProceduralObjects(this, true);
        pO.placeOutsideObjects();
        var lvl=dm.getPlayerData().powerLevel;
        var enemy= new SubteamGroup(lvl:int, tStr:TeamString, grpId:int,ts:TeamStructure, quadrant:int, gb:GameBoard);
        var ally= new SubteamGroup(lvl:int, tStr:TeamString, grpId:int,ts:TeamStructure, quadrant:int, gb:GameBoard);
        enemy.teamName=dm.getMapData().natR.pickTeam(true);//in future this will depend on world map data
        enemy.groupId=0;
        enemy.groupName=(dm.getMapData().natR.teamNameToString(enemy.teamName));//useful when main team is selected
        enemy.setStringFolder("AAA_Main_V001");
        //quadrant 5 is the northeast corner
        placeUnits(enemy.generateUnits(), TEAM_STRUCTURE.SINGLE_LANE, 5);
        ally.teamName=dm.getPlayerData().team;
        ally.groupId=1;
        ally.groupName=(dm.getMapData().natR.teamNameToString(ally.teamName));//useful when main team is selected
        ally.setStringFolder("AAA_Main_V001");
        //quadrant 10 is the southwest corner
        placeUnits(ally.generateUnits(), TEAM_STRUCTURE.SINGLE_LANE, 10);
        //next place units 
        super.addGroup(enemy);
        super.addGroup(ally);*/

    }
}