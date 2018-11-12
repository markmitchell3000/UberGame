public class SectionBuilderCivilians extends SectionBuilder{

	private var secBld:SectionBuilderCivilians;

	public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int){
		var civ= new GBGroup(false, lvl, "civilians", groupID);
        civ
        placeUnits(civ.generateUnits(), TeamStructureCivilian, i);
	}

	public static function getSecBld(){
        if(secBld==null){
        	secBld= new SectionBuilderCivilians();
        }
        return secBld;
	}
}