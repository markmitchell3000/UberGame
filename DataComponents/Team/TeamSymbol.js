/*"GUI/TeamSymbols/MOTU_Icon001"
"GUI/TeamSymbols/SHIELD_Icon001"
"GUI/TeamSymbols/DarkHorde_Icon001"
"GUI/TeamSymbols/GreekEmpire_Icon"
"GUI/TeamSymbols/Neutrinos_Icon001"
"GUI/TeamSymbols/Hydra_Icon"
"GUI/TeamSymbols/GIJoe_Icon"
"GUI/TeamSymbols/GalacticEmpire_Icon001"*/
public class TeamSymbol{
	private var teamSymbol:Texture2D;

	public function TeamSymbol(symbolPath: String){
	    teamSymbol =Resources.Load(symbolPath, typeof(Texture2D));
	}

	public function getSymbol(){
		return teamSymbol;
	}
}