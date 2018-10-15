public class UVKillFactsHashGet implements UnitVisitor
{
    public function visitUnit(unit:UnitInner){
        unit.killFacts.acceptVisitor(this);
    }

    public function visitUnit(unitFacts:UnitKillFactsInner){
        var factsTable:Hashtable = new Hashtable();
        factsTable['totalKillCount']=unitFacts.totalKillCount;
        factsTable['battleKillCount']=unitFacts.battleKillCount;
        factsTable['strongestFoeName']=unitFacts.strongestFoeName;
        factsTable['strongestFoeLevel']=unitFacts.strongestFoeLevel;
        factsTable['strongestFoeRank']=unitFacts.strongestFoeRank;
        factsTable['civilianKills']=unitFacts.civilianKills;
        factsTable['soldierKills']=unitFacts.soldierKills;
        factsTable['ltHunterKills']=unitFacts.ltHunterKills;
        factsTable['sentinelKills']=unitFacts.sentinelKills;
        factsTable['titanKills']=unitFacts.titanKills;
        factsTable['baseKills']=unitFacts.baseKills;
        return factsTable;
    }
}