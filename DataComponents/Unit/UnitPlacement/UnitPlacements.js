/*A 250 X 250 grid has 16 quadrants, that are tracked by upper left hand 
corners each quadrant begins with a 16 X 16 area for which units can be 
placed in different patterns.*/
public class UnitPlacements{
    /* Quadrants
    | 0  1| 4  5|
    | 2  3| 6  7|
    -------------
    | 8  9|12 13|
    |10 11|14 15|
    four groups [0]=qdrts 0-3,[1]=qdrts 4-7,[2]=qdrts 8-11,[3]=qdrts 12-15
    */
    //spots describe placement within each quadrant
    public var baseSpots:int[];//single location per quadrant
    public var towerSpots=new ArrayList();//should be arraylist of points
    public var bonusSpots:new ArrayList();
    public var titanSpots=new ArrayList();
    public var guardianSpots=new ArrayList();
    public var hunterSpots=new ArrayList();
    public var ltSpots=new ArrayList();
    public var soldierSpots=new ArrayList();
    public var civOrZombSpots=new ArrayList();
    public var workerSpots=new ArrayList();//not implemented yet
    //offset describe upper left corner on the gameboard of each quadrant
    public var xOffset:int;
    public var yOffset:int;
    protected var xQVal:int[]=new int[16];
    protected var yQVal:int[]=new int[16];
    //private var xQVal:int[]=[39,59,39,59,140,160,140,160,39,59,39,59,140,160,140,160];//200 size
    //private var yQVal:int[]=[39,39,59,59,39,39,59,59,140,140,160,160,140,140,160,160];//200 size
    //private var xQVal:int[]=[29,59,29,59,173,203,173,203,30,60,30,60,173,203,173,203];//250 size
    //private var yQVal:int[]=[29,29,59,59,29,29,59,59,173,173,203,203,173,173,203,203];//250 size

    public function UnitPlacements(quadrant:int){
        var sz:int=GameBoard.sizeXY;
        //assign x quadrant arr
        xQVal[0]=xQVal[2]=xQVal[8]=xQVal[10]=(.1*sz);
        xQVal[1]=xQVal[3]=xQVal[9]=xQVal[11]=(.3*sz);
        xQVal[4]=xQVal[6]=xQVal[12]=xQVal[14]=((.7*sz)-16);
        xQVal[5]=xQVal[7]=xQVal[13]=xQVal[15]=((.9*sz)-16);
        //assign y quadrant arr
        yQVal[0]=yQVal[1]=yQVal[4]=yQVal[5]=(.1*sz);
        yQVal[2]=yQVal[3]=yQVal[6]=yQVal[7]=(.3*sz);
        yQVal[8]=yQVal[9]=yQVal[12]=yQVal[13]=((.7*sz)-16);
        yQVal[10]=yQVal[11]=yQVal[14]=yQVal[15]=((.9*sz)-16);
        yOffset=yQVal[quadrant];//quadrant sets the offet values for y 
        xOffset=xQVal[quadrant];//quadrant sets the offet values for x
    }
}
