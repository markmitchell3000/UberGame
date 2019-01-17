/*Unique to units, each of their traits have a has that can be accessed for 
making attacks and for receiving damage from attacks*/
public class UnitTraitCollection{
    private var traits:Hashtable;//String is key, Trait object is value
    private var tableSize:int;//simple length

    //when unit levels make a new object and throw this one away
    public function UnitTraitCollection(archetypeKey:String,lvl:int){
    	var tempArch:Archetype=(Archetype)ArchetypeHash.getValue(archetypeKey);
    	var attArr=tempArch.getAttArr(lvl);//must line up with the damagetype string ordering
    	var defArr=tempArch.getDefArr(lvl);//must line up with the damagetype string ordering
    	tableSize=attArr.length;//used outside of this class, may be better way to track
    	for(var i=0;i<tableSize;i++){
    		var tmpStr=DamageTypeHash.getDTString(i);
    		traits[tmpStr]=new Traits(tmpStr,attArr[i],defArr[i]);
    	}
    }

    public function getTrait(key:String){
        return (Traits)traits[key];
    }
}