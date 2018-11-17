public class SectionBuilderCivilians extends SectionBuilder{

	private static var secBld:SectionBuilderCivilians;

	public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int){
		var civ= new GBGroup(false, lvl, "civilians", groupID);
		civ.generateUnits();
        generateAndPlace(TeamStructureCivilian, quadrant, groupID);
        return civ;//GBGroups are added to a collection
	}

	public static function getSecBld(){
        if(secBld==null){
        	secBld= new SectionBuilderCivilians();
        }
        return secBld;
	}
}