public class UVGetKillFactsLogKill implements UnitVisitor{
    private var level:int;
    private var name:String;
    private var rank:int;
    //civilian=0, soldier=1, lt||hunter=2, guardian||champion||tower=3, titan=4, base=5

    public function UVGetKillFactsLogKill(lvl:int, nm:String, rnk:int){
        level=lvl;
        name=nm;
        rank=rnkName;
    }

    public function visitUnit(unit:UnitInner){
        unit.killFacts.acceptVisitor(this);
    }

    public function visitUnit(unitFacts:UnitKillFactsInner){
        unitFacts.totalKillCount++;
        unitFacts.battleKillCount++;
        if((level+rank)>(unitFacts.strongestFoeLevel+unitFacts.strongestFoeRank)){
            unitFacts.strongestFoeName=name;
            unitFacts.strongestFoeLevel=level;
            unitFacts.strongestFoeRank=rank;
        }
        switch(rank){
            case 0:
                unitFacts.civilianKills++;
                break;
            case 1:
                unitFacts.soldierKills++;
                break;
            case 2:
                unitFacts.ltHunterKills++;
                break;
            case 3:
                unitFacts.sentinelKills++;
                break;
            case 4:
                unitFacts.titanKills++;
                break;
            case 5:
                unitFacts.baseKills++;
                break;
        }
    }
}