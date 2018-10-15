public class TransformConstants{
	private static var tc:TransformConstants;
    private var offset:int=0;
	private var multiplier:int=24;//12;


    public function TransformConstants(){
    	offset=0;
    	multiplier=24;
    	yPos=13;
    }    

	public static function getTC{
		if(tc==null){
			tc=new TransformConstants();
		}
		return tc;
	}

	public function getOffset(){
		return offset;
	}

	public function getMultiplier(){
		return multiplier;
	}

	public function getYPos(){
		return yPos;
	}
}