public class Tuple{
	private var fst;
	private var snd;

    //could be over loaded with any pair(ints. classes etc), extensions could be n-tuples
	public function Tuple(first:String, second:String){
		fst=first;
		snd=second;
	}

	public function getFst(){
		return fst;
	} 

	public function getSnd(){
		return snd;
	}
}