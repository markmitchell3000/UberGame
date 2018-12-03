public class SectionBuilderEternianRepublic extends SectionBuilder{

    private static var secBld:SectionBuilderEternianRepublic;

    public function generateAndPlace(ts:TeamStructure, quadrant:int, groupID:int){
        var er:GBGroup;
        if(ts.getIsWar){
            er= new GBGroup(lvl, "eternian republic", groupID,ts);
            addPlacementsZom(ts.getUnitArr("zombies"),ts.getXOffset(),ts.getYOffset(),zom);
        }
        else{
            er= new GBGroup(lvl, getEternianTeam(), groupID,ts);
        }
        
        return er;//GBGroups are added to a collection
    }

    /*randomly selects a team name from a list of eternian teams, these are 
    mostly used for grabbing the models for that team.*/
    private function getEterninaTeam(){

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
