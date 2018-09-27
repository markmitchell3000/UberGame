public class RandomNameGenerator{
    private var nameSyllables: Array;
    private var vowels:String ="aeiou";
    private var letters:String = "abcdefghijklmnopqrstuvwxyz";

    public function RandomNameGenerator(){
    	nameSyllables=new Array();
        for(var i=0;i<60;i++){
        	var syllable:String="";
        	//syllable is 2 to 4 letters
        	var syllableSize:int =Random.Range(2, 5);
        	var vowelSpot:int =Random.Range(0,syllableSize);
        	for(var j=0;j<syllableSize;j++){
        		if(j==vowelSpot){
        			syllable += vowels[Random.Range(0,vowels.Length)];
        		}
        		else{
        			syllable += letters[Random.Range(0,letters.Length)];
        		}
        	}
            nameSyllables.Push(syllable);
        }
    }

    // code from https://gamedevelopment.tutsplus.com/tutorials/quick-tip-how-to-code-a-simple-character-name-generator--gamedev-14308
	public function createNewName()
	{
	    //Creates a first name with 2-3 syllables
	    var firstName: String = "";
	    var numberOfSyllablesInFirstName: int = Random.Range(2, 4);
	    for (var i: int = 0; i < numberOfSyllablesInFirstName; i++)
	    {
	        firstName += nameSyllables[Random.Range(0, nameSyllables.length)];
	    }
	    var firstNameLetter: String = "";
	    firstNameLetter = firstName.Substring(0,1);
	    firstName = firstName.Remove(0,1);
	    firstNameLetter = firstNameLetter.ToUpper();
	    firstName = firstNameLetter + firstName;
	 
	    //Creates a last name with 1-2 syllables
	    var lastName: String = "";
	    var numberOfSyllablesInLastName: int = Random.Range(1, 3);
	    for (var j: int = 0; j < numberOfSyllablesInLastName; j++)
	    {
	        lastName += nameSyllables[Random.Range(0, nameSyllables.length)];
	    }
	    var lastNameLetter: String = "";
	    lastNameLetter = lastName.Substring(0,1);
	    lastName = lastName.Remove(0,1);
	    lastNameLetter = lastNameLetter.ToUpper();
	    lastName = lastNameLetter + lastName;
	 
	    //assembles the newly-created name
	    return firstName + " " + lastName;
	}
}