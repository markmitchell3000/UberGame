//Takes a group and map type and can use a unit model factory to build models 
public class UnitLoader{
	private static var ul:UnitLoader;

	public static function getUL(){
		if(ul==null){
			ul=new UnitLoader();
		}
		return ul;
	}


}