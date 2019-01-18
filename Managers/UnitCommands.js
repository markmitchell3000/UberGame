public class UnitCommands{
	public function resetBattleCnt(unit:Unit){
        ((PlayerData)unit.unitData).killFacts.battleKillCnt=0;
	}

	pulic function logKill(unit:Unit,enemy:Unit){
		var unitFacts:UnitKillFacts=((PlayerData)unit.unitData).killFacts;
        unitFacts.totalKillCount++;
        unitFacts.battleKillCount++;
        var name:String=enemy.unitData.unitName;
        var level:int=enemy.unitData.unitStats.powerLevel;
        var rank:int=enemy.unitData.unitStats.rank;
        if((level+rank)>(unitFacts.strongestFoeLevel+unitFacts.strongestFoeRank)){
            unitFacts.strongestFoeName=name;
            unitFacts.strongestFoeLevel=level;
            unitFacts.strongestFoeRank=rank;
        }
        /*0-civilian, 1- worker, 2-zombie, 3-soldier, 4-lt or hunter, 
        5- guardian, 6- tower, 7- titan, 8- base, maybe switch isn't the best*/
        switch(rank){
            case 0:
                unitFacts.civilianKills++;
                break;
            case 1:
                unitFacts.workerKills++;
                break;
            case 2:
                unitFacts.zombieKills++;
                break;
            case 3:
                unitFacts.soldierKills++;
                break;
            case 4:
                unitFacts.ltHunterKills++;
                break;
            case 5:
                unitFacts.guardianKills++;
                break;
            case 6:
                unitFacts.towerKills++;
                break;
            case 7:
                unitFacts.titanKills++;
                break;
            case 8:
                unitFacts.baseKills++;
                break;
        }
	}
}