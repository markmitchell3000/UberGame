//for retrieving info about player for gui
public class UVStatsHashGet implements UnitVisitor
{
    public function visitUnit(unit:UnitInner){
        unit.stats.acceptVisitor(this);
    }

    public function visitUnit(unitstats:UnitStatsInner){
        var statsTable:Hashtable = new Hashtable();
        statsTable['level']=unitstats.level;
        statsTable['rank']=unitstats.rank;
        statsTable['maxHealth']=unitstats.maxHealth;
        statsTable['curHealth']=unitstats.curHealth;
        statsTable['maxMana']=unitstats.maxMana;
        statsTable['curMana']=unitstats.curMana;
        statsTable['xp']=unitstats.xp;
        statsTable['nextLevelXp']=unitstats.nextLevelXp;
        statsTable['wealth']=unitstats.wealth;
        statsTable['wealthRate']=unitstats.wealthRate;
        statsTable['attackType']=unitstats.attackType;
        statsTable['strength']=unitstats.strength;
        statsTable['vitality']=unitstats.vitality;
        statsTable['agility']=unitstats.agility;
        statsTable['dexterity']=unitstats.dexterity;
        statsTable['intelligence']=unitstats.intelligence;
        statsTable['wisdom']=unitstats.wisdom;
        statsTable['charisma']=unitstats.charisma;
        statsTable['endurance']=unitstats.endurance;
        statsTable['luck']=unitstats.luck;
        return statsTable;
    }
}