public class UVKillFactsResetBattle implements UnitVisitor
{
	public function visitUnit(unit:UnitInner){
        unit.killFacts.acceptVisitor(this);
	}

	public function visitUnit(unitFacts:UnitKillFactsInner){
        unitFacts.battleKillCount=0;
	}
}