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
        /*0-civilian, 1- worker, 2-zombie, 3-soldier, 4-lt,5- hunter, 6- bonus
        7- guardian, 8- tower, 9- titan, 10- base,*/
        UnitTypeHash.getValue(rank).logKill(unitFacts);//logs kill based on enemy unit type
	}
}