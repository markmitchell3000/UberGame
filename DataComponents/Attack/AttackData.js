//Attackdata is given a point on the grid where it originates and is passed. 
public class AttackData{
	private var powerLevel : int;
    private var team : Team;
    private var att : AttackType;
    private var dam : DamageType;
    private var curLoc: Point;
    private var attVec: Point;//uses the x and y to describe magnitude and direction

    /*vector for the unit determines direction from the unit and magnitude from the type.i.e melee
    would have 0 magnitude so only location would matter, however attacks that have length but do 
    not move such as blast and power will have a vector but will never adjust there location over 
    time.*/
    public function AttackData(lvl:int,t:Team,a:AttackType,d:DamageType, start: Point, vec: Point){
    	powerLevel=30 + 4*lvl;
    	team=t;
    	att=a;
    	dam=d;
        curLoc=start;
        attVec=vec;//these may be populated via the direction the unit is facing and the type
    }
    
    //checks for collision with enemy
    public function checkStatus(t:Team){
        //placeholder
    }

    public function getAttObject(){
        return att.getAttObject(dam);
    }
}