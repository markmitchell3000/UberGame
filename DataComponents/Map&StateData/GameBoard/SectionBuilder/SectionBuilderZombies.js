public class SectionBuilderZombies extends SectionBuilder{

    private static var secBld:SectionBuilderZombies;

    public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int){
        var zom= new GBGroup(lvl, "zombies", groupID,ts);
        addPlacementsZom(ts.getUnitArr("zombies"),ts.getXOffset(),ts.getYOffset(),zom);
        return civ;//GBGroups are added to a collection
    }

    private function addPlacementsZom(arr:ArrayList, xOffset:int, yOffset:int, group:GBGroup){
        //here is where the x and y coordinates are set for the GBUnits within the group.
    }

    public static function getSecBld(){
        if(secBld==null){
            secBld= new SectionBuilderZombies();
        }
        return secBld;
    }
}
