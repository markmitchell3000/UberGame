//Each world has one of these, one per game, stores data about world
public class MapData{
	public var wName:String;
	public var states= new StateData[32];//array covers basic info for each state
	public var teams:TeamData[];//=new TeamData[8];//array covers team data objects of all eight team, 
	public var difficulty:int;//=1;//0=easy, 1=medium, 2=hard.  Effects enemy strength
	public var numberNations:int;//=8;//8 is max, there can be 2,4 or 8
	public var curState:int;//number used to load state data
	public var sch:StateControlHash;
	public var missionList:Mission[];//probably an arraylist or linked list of missions
    
	public function MapData(nm:String, diff:int, numNations:int){
		if(numNations==2||numNations==4||numNations==8){
			sch=StateControlHash.getSCH();
			wName=nm;
			difficulty=diff;
			numberNations=numberNations;
			teams=new TeamData[numberNations];
			var i=0;
			teams[i++]=new Team("Eternian Republic","EternianRepublic/");//TEAM_NAME.ETERNIAN_REPUBLIC;
		    teams[i++]=new Team("Night Horde","NightHorde/");
		    if(numberNations>2){
				teams[i++]=new Team("Initiative","Initiative/");
				teams[i++]=new Team("Pantheon","Pantheon/");//TEAM_NAME.PANTHEON;
			    if(numberNations>4){
					teams[i++]=new Team("Sentai Clan","SentaiClan/");//TEAM_NAME.SENTAI_CLAN;
					teams[i++]=new Team("Shadow Empire","ShadowEmpire/");//TEAM_NAME.SHADOW_EMPIRE;
					teams[i++]=new Team("United League","UnitedLeague/");//TEAM_NAME.UNITED_LEAGUE;
					teams[i++]=new Team("Utrom Sith Alliance","UtromSithAlliance/");//TEAM_NAME.UTROM_SITH_ALLIANCE;
		        }
		    }
		    makeNewMap();
	    }
	    else{
	    	Debug.Log("Unsupported nation count");
	    }
	}

	private function makeNewMap(){
		var arr:int[];
		if(numberNations==2){arr=[0,0,0,0,1,1,1,1];}
		if(numberNations==4){arr=[0,0,1,1,2,2,3,3];}
		if(numberNations==8){arr=[0,1,2,3,4,5,6,7];}
		states[0]= new StateData("Carthage",0,[1,6,7,8]);
        sch.updateTable(states[0],teams[arr[0]])

		states[1] = new StateData("Perdida",1,[0,6,5,4];
		sch.updateTable(states[1],teams[arr[0]]);

		states[2] = new StateData("Troy",2,[4,3]);
		sch.updateTable(states[2],teams[arr[0]]);

		states[3] = new StateData("Skara Brae",3,[2,4,10,11]);
		sch.updateTable(states[3],teams[arr[0]]);

		states[4] = new StateData("Memphis",4,[1,5,10,3,2]);
		sch.updateTable(states[4],teams[arr[1]]);

		states[5] = new StateData("Caral",5,[1,6,10,4]);
		sch.updateTable(states[5],teams[arr[1]]);

		states[6] = new StateData("Babylon",6,[0,7,9,10,5,1]);
		sch.updateTable(states[6],teams[arr[1]]);

		states[7] = new StateData("Taxila",7,[0,8,9,6]);
		sch.updateTable(states[7],teams[arr[1]]);

		states[8] = new StateData("Lemuria",8,[0,7,9]);
		sch.updateTable(states[8],teams[arr[2]]);

		states[9] = new StateData("Sukhothai",9,[8,7,6,10,13,14]);
		sch.updateTable(states[9],teams[arr[2]]);

		states[10] = new StateData("Timgad",10,[3,4,5,6,9,13,12,11]);
		sch.updateTable(states[10],teams[arr[2]]);

		states[11] = new StateData("Mohenjo-daro",11,[3,10,12]);
		sch.updateTable(states[11],teams[arr[2]]);

		states[12] = new StateData("Hatra",12,[11,10,13,16,17]);
		sch.updateTable(states[12],teams[arr[3]]);

		states[13] = new StateData("Sanchi",13,[9,10,12,16,15,14]);
		sch.updateTable(states[13],teams[arr[3]]);

		states[14] = new StateData("Hattusa",14,[16,15,14]);
		sch.updateTable(states[14],teams[arr[3]]);

		states[15] = new StateData("Alfheim",15,[14,13,16,24]);
		sch.updateTable(states[15],teams[arr[3]]);

		states[16] = new StateData("Persepolis",16,[15,13,12,17,24]);
		sch.updateTable(states[16],teams[arr[4]]);

		states[17] = new StateData("Leptis Magna",17,[12,16,24,23,22,18],);
		sch.updateTable(states[17],teams[arr[4]]);

		states[18] = new StateData("Urgench",18,[17,22,20,19]);
		sch.updateTable(states[18],teams[arr[4]]);

		states[19] = new StateData("Vijayanagara",19,[18,20]);
		sch.updateTable(states[19],teams[arr[4]]);

		states[20] = new StateData("Calakmul",20,[18,19,21,22]);
		sch.updateTable(states[20],teams[arr[5]]);

		states[21] = new StateData("Palmyra",21,[20,22,30,31]);
		sch.updateTable(states[21],teams[arr[5]]);

		states[22] = new StateData("Ctesiphon",22,[23,17,18,20,21,30,29,25]);
		sch.updateTable(states[22],teams[arr[5]]);

		states[23] = new StateData("Hvalsey",23,[24,17,22,25]);
		sch.updateTable(states[23],teams[arr[5]]);

		states[24] = new StateData("Ani",24,[15,16,17,23,25,26,27]);
		sch.updateTable(states[24],teams[arr[6]]);

		states[25] = new StateData("Palenque",25,[26,24,23,22,29]);
		sch.updateTable(states[25],teams[arr[6]]);

		states[26] = new StateData("Tiwanaku",26,[24,25,29,28,27]);
		sch.updateTable(states[26],teams[arr[6]]);

		states[27] = new StateData("Pompeii",27,[24,26,28]);
		sch.updateTable(states[27],teams[arr[6]]);

		states[28] = new StateData("Teotihuacan",28,[27,26,29]);
		sch.updateTable(states[28],teams[arr[7]]);

		states[29] = new StateData("Petra",29,[28,26,25,22,30]);
		sch.updateTable(states[29],teams[arr[7]]);

		states[30] = new StateData("Tikal",30,[29,22,21,31]);
		sch.updateTable(states[30],teams[arr[7]]);

		states[31] = new StateData("Angkor",31,[21,30]);
		sch.updateTable(states[31],teams[arr[7]]);
	}

	public function setStartState(t:TEAM_NAME){
		//trys to pick a random nation that matches the team
		for(var i=0;i<32;i++){
			var temp=Random.Range(0,32);
			if(states[temp].ruler==t){
				curState=temp;
				dm.setGameBoard(states[curState].stateName,  0,0);
				return;
			}
		}
		//if random selection fails after 32 tries then pick the first state that matches
		for(var j=0;j<32;j++){
			if(states[j].ruler==t){
				curState=j;
				dm.setGameBoard(states[curState].stateName,  0,0);
				return;
			}
		}
		Debug.Log("Nation does not exist in this world.");//no states match the selected team.	
	}

	public function setCurState(num:int,yVal:int, xVal:int){
		curState=num;
		dm.setGameBoard(states[curState].stateName, yVal,xVal);
	}

	public function getTeamData(t:String){
		for(var i=0;i<numberNations;i++){
			if(teams[i].name==t){
				return teams[i];
			}
		}
	}
}

