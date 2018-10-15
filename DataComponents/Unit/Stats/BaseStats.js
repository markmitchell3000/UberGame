//directly used by items and extended for units since they need more stuff
public class BaseStats{
	public var health: int;//maxhealth for unit, plus amount from items
	public var healingRate: int; //added back every other second 
	public var mana: int;//mana for unit, plus this amount from items
	public var manaRate: int; //added back every other second 
    public var xpRate:float;//boost based on wisdom or item over units assigned xp
    public var wealthRate: int;//amount made per 5 seconds if player unit.
    public var armor: int; //base damage threshold, some chance damage can circumvent armor
    public var strength: int;
	public var vitality: int;
	public var agility: int;
	public var dexterity: int;
	public var intelligence: int;
	public var wisdom: int;
	public var charisma: int;
	public var endurance: int;
	public var luck: int;
	public var moveSpeed: int;
	public var attackSpeed: int;
	public var rotationSpeed: int;
}