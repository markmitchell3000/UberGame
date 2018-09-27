//May need to be extended
public class GBObject{
    public var xCoord:int;//leftmost spot
    public var yCoord:int;//uppermost spot
    public var xWidth:int;
    public var yHeight:int;
    public var byRow:boolean=true;//is the placement of houses and rows by row or col
    public var under:TILE_TYPE;
    public var destroyable:boolean;
    public var hitPoints:int =100;
    public var modelString:String;//string used for object.

    private var mNumSet:boolean=false;
    private var modelNumber:int;//number used from model load.

    //string representing the spaces the tile takes up
    public function getSizeStr(){
        return (xWidth<yHeight)?(xWidth+"X"+yHeight):(xWidth+"X"+yHeight);
    }

    public function getModelNumber(lSize:int){
        if(mNumSet){
            return modelNumber;
        }
        else{
            mNumSet=true;
            modelNumber=Random.Range(0,lSize);
            return modelNumber;
        }
    }
}