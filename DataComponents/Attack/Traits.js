
public class Traits{
	public var type:String;//basic, blades, earth, electric, fire, ice, magic, poison, water, wind
	public var damage:int;// actual damage is damage minus defense for matching trait pair
	public var defense:int;// levels about half the speed of as damage

    //Teams could begin with different advantages though these can be set later.
	public function Traits(tp:String, dm:int,df:int){
        type=tp;
        damage=dm;
        defense=df;
	}

    //For creating a blank slate
	public function Traits(tp:String){
        type=tp;
        damage=0;
        defense=0;
	}
}