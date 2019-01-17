/*Units may be populated by a watered down archetype*/
public class Item{
	public var itemType:String;
	public var icon:String;//string used to load icon image
    public var traits: UnitTraitCollection;
    public var levelReq:int;
    public var baseStats:BaseStats;

    public function Item(s:String){
        itemType=s;
    }
}