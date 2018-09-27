//for initializing stats of new unit
public class UVStatsInitialize implements UnitVisitor
{
    private var archetype:UnitArchetype;
    private var level:int;
    private var rank:int;
    
    public function UVStatsInitialize(lvl:int, at:UnitArchetype, rnk:int){
        level=lvl;
        archetype=at;
        rank=rnk;
    }

    //accepted by unit, which provides UnitInner
    public function visitUnit(unit:UnitInner){
        unit.archetype=archetype;
        unit.stats.acceptVisitor(this);
    }

    //accepted by stats, which provides UnitStatsInner
    public function visitUnit(unitstats:UnitStatsInner){
        unitstats.level=level;
        unitstats.rank=rank;
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