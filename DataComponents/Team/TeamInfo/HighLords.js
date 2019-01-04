public class HighLords{
	private var highlords:Hashtable;//north, east, south and west leaders

    public function HighLords(team:String){
    	var tuple1:Tuple=TeamHash.getValue(team).generateLeaderTuple();
        var tuple2:Tuple=TeamHash.getValue(team).generateLeaderTuple();
        var tuple3:Tuple=TeamHash.getValue(team).generateLeaderTuple();
        var tuple4:Tuple=TeamHash.getValue(team).generateLeaderTuple();
        var tuple5:Tuple=TeamHash.getValue(team).generateLeaderTuple();
        highlords=new Hashtable();
		highlords["Emperor"]=new Leader(tuple1.getFst(),tuple1.getSnd(),"not yet supported",5,2000);
		highlords["North"]=new Leader(tuple2.getFst(),tuple2.getSnd(),"not yet supported",3,1000);
		highlords["South"]=new Leader(tuple3.getFst(),tuple3.getSnd(),"not yet supported",3,1000);
		highlords["east"]=new Leader(tuple4.getFst(),tuple4.getSnd(),"not yet supported",3,1000);
		highlords["west"]=new Leader(tuple5.getFst(),tuple5.getSnd(),"not yet supported",3,1000);
    }
    //used for specific sets
	public function HighLords(emperor:Leader, north:Leader,south:Leader,east:Leader,west:Leader){
		highlords=new Hashtable();
		highlords["Emperor"]=emperor;
		highlords["North"]=north;
		highlords["South"]=south;
		highlords["east"]=east;
		highlords["west"]=west;
	}

	public function getLeader(dir:String){
        return highlords[dir];
	}

	public function setLeader(dir:String, newLeader:Leader){
		highlords[dir]=newLeader;
	}
}