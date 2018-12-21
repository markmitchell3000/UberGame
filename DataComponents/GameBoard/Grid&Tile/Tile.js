/*floor, ground, wall and door are tracked with style pieces for modeling. 
Static objects are hash tables where the upper right corner is the key and the 
model path is the value.  Temp objects also use a hash table where the right 
corner is the key, the value however is a unit that is either inanimate, base 
tower or bonus.*/
//enum TILE_TYPE{FLOOR, GROUND, SIDEWALK, ASPHALT, WALL, DOOR, STATIC_OBJ, TEMP_OBJ};
//extented classes are all static
public class Tile{
	protected var texString:String;//location of tile 3d object
	protected var passable:boolean;
    protected var moveCost:int;//usually 1 sometimes more

    public function Tile(ts:String, p:boolean, mc:int){
        texString=ts;
        passable=p;
        moveCost=mc;
    }

    public function getTexString(){
    	return texString;
    } 

    public function isPassable(){
    	return passable;
    } 

    public function getMoveCost(){
    	return moveCost;
    } 

    //abstract function
    public function build(go:GOStructureProps, pos:Vector3, rot:Vector3, point:Point){
    }

    /*Abstract function used to return singleton of that specific tile*/
    public static function getTile(){
    }
}