//enum TOWN_TYPE{RESIDENTIAL, INDUSTRIAL, FARMMINE, MIL_BASE, GOV_OFFICES, BIG_CITY};
public class Town{
	protected var mainDir:String;//main directory that contains building types
    protected var buildDir1:String;//1st type of building
    protected var sizeDir1:String;//size of that type of building
    protected var buildDir2:String;//2nd type of building
    protected var sizeDir2:String;//size of that type of building
    protected var buildingModelsl: GameObjects;
    protected var buildingModels2: GameObjects;

    public function Town(bld1Type:int, size1:String,bld2Type:int, size2:String){
        //probably don't store these, use to load selection of models instead.
        //then load models from one or the other collection.
    }
    

}