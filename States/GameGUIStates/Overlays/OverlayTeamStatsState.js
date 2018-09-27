public class OverlayTeamStatsState extends OverlayScreenState{
	public function display(){
		GUI.Label(Rect(menusX+menusW/2.25,menusY,invSlotSize*10,invSlotSize), "Team Statistics");
		GUI.skin.GetStyle("label").fontSize = 12;
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10,invSlotSize*8,invSlotSize/1.5), "Team Name: "+teamData.getName());
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+invSlotSize,invSlotSize*8,invSlotSize/1.5), "Power Level: "+teamData.level);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+2*invSlotSize,invSlotSize*8,invSlotSize/1.5), "Capital: "+teamData.capital);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+3*invSlotSize,invSlotSize*8,invSlotSize/1.5), "Emperor: "+teamData.emperor);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+4*invSlotSize,invSlotSize*8,invSlotSize/1.5), "High Lord North: "+teamData.hlNorth);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+5*invSlotSize,invSlotSize*8,invSlotSize/1.5), "High Lord South: "+teamData.hlSouth);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+6*invSlotSize,invSlotSize*8,invSlotSize/1.5), "High Lord East: "+teamData.hlEast);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+7*invSlotSize,invSlotSize*8,invSlotSize/1.5), "High Lord West: "+teamData.hlWest);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+8*invSlotSize,invSlotSize*8,invSlotSize/1.5), "Number of Regions: "+teamData.numberRegions);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+9*invSlotSize,invSlotSize*8,invSlotSize/1.5), "World Ranking: "+teamData.ranking);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10,invSlotSize*8,invSlotSize/1.5), "Wealth: "+teamData.wealth);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+invSlotSize,invSlotSize*8,invSlotSize/1.5), "Physical Bonus: "+teamData.physicalBonus);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+2*invSlotSize,invSlotSize*8,invSlotSize/1.5), "Blades Bonus: "+teamData.bladesBonus);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+3*invSlotSize,invSlotSize*8,invSlotSize/1.5), "Earth Bonus: "+teamData.earthBonus);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+4*invSlotSize,invSlotSize*8,invSlotSize/1.5), "Electric Bonus: "+teamData.electricBonus);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+5*invSlotSize,invSlotSize*8,invSlotSize/1.5), "Fire Bonus: "+teamData.fireBonus);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+6*invSlotSize,invSlotSize*8,invSlotSize/1.5), "Ice Bonus: "+teamData.iceBonus);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+7*invSlotSize,invSlotSize*8,invSlotSize/1.5), "Magic Bonus: "+teamData.magicBonus);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+8*invSlotSize,invSlotSize*8,invSlotSize/1.5), "Poison Bonus: "+teamData.poisonBonus);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+9*invSlotSize,invSlotSize*8,invSlotSize/1.5), "Water Bonus: "+teamData.waterBonus);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+10*invSlotSize,invSlotSize*8,invSlotSize/1.5), "Wind Bonus: "+teamData.windBonus);
		GUI.DrawTexture(Rect(menusX+menusW/50, menusY, menusW/6+menusW/25, menusW/6+menusH/12), backDrop01);
		GUI.DrawTexture(Rect(menusX+menusW/25, menusY+menusH/25, menusW/6, menusW/6), teamIcon);
	}
}