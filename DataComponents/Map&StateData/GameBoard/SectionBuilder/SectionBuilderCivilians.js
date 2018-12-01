public class SectionBuilderCivilians extends SectionBuilder{

	private static var secBld:SectionBuilderCivilians;

	public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int){
	    var civ= new GBGroup(lvl, "civilians", groupID,ts);
            addPlacementsCiv(ts.getUnitArr("civilians"),ts.getXOffset(),ts.getYOffset(),civ);
            return civ;//GBGroups are added to a collection
	}

        private function addPlacementsCiv(arr:ArrayList, xOffset:int, yOffset:int, group:GBGroup){
            //here is where the x and y coordinates are set for the GBUnits within the group.
        }

	public static function getSecBld(){
        if(secBld==null){
        	secBld= new SectionBuilderCivilians();
        }
        return secBld;
	}
}
