/*teams set up the hash values but they store the key so that they can be saved,
this hash table is used at runtime so that team symbols can be loaded when a gui
frame needs the symbol*/
public class TeamSymbolHash{
    public var symbols:HashTable;
    private static var tsh:TeamSymbolHash;

    public function TeamSymbolHash(){
        symbols= new HashTable();
    }

    public static function setValue(str:String){
        if(tsh==null){
            tsh = new TeamSymbolHash();
        }
        tsh.symbols[str]=new TeamSymbol(str);
    }

    public static function getValue(str:string){
        if(tsh==null){
            return null;
        }
        else{
            return tsh.symbols[str];
        }
    }
}