public class OverlayPlayerInfoState extends OverlayScreenState{
	public function display(){
		GUI.Label(Rect(menusX+menusW/2.25,menusY,invSlotSize*10,invSlotSize), "Player Statistics");
		GUI.skin.GetStyle("label").fontSize = 12;
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10,invSlotSize*8,invSlotSize/1.5), "Name: "+dm.getPlayerData().heroName);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Level: "+dm.getPlayerData().powerLevel);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+2*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Team: "+Global_Variables.teamNameToString(dm.getPlayerData().team));
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+3*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Health: "+dm.getPlayerData().maxHealth);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+4*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Mana: "+dm.getPlayerData().maxMana);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+5*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "XP: "+dm.getPlayerData().xp);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+6*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Strength: "+dm.getPlayerData().strength);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+7*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Vitality: "+dm.getPlayerData().vitality);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+8*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Agility: "+dm.getPlayerData().agility);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+9*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Dexterity: "+dm.getPlayerData().dexterity);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+10*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Intelligence: "+dm.getPlayerData().intelligence);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+11*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Wisdom: "+dm.getPlayerData().wisdom);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+12*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Charisma: "+dm.getPlayerData().charisma);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+13*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Endurance: "+dm.getPlayerData().endurance);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+14*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Luck: "+dm.getPlayerData().luck);
		GUI.Label(Rect(menusX+menusW/4,menusY+menusH/10+15*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Damage Type: "+dm.getPlayerData().damageType);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10,invSlotSize*8,invSlotSize/1.5), "Armor: ");
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Blade Power: "+dm.getPlayerData().bladesPower);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+2*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Earth Power: "+dm.getPlayerData().earthPower);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+3*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Electric Power: "+dm.getPlayerData().electricPower);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+4*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Fire Power: "+dm.getPlayerData().firePower);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+5*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Ice Power: "+dm.getPlayerData().icePower);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+6*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Magic Power: "+dm.getPlayerData().magicPower);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+7*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Poison Power: "+dm.getPlayerData().poisonPower);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+8*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Water Power: "+dm.getPlayerData().waterPower);
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10,menusY+menusH/10+9*invSlotSize/1.5,invSlotSize*8,invSlotSize/1.5), "Wind Power: "+dm.getPlayerData().windPower);

		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10, menusY+menusH/10+11*invSlotSize/1.5, menusW/6+menusW/25, invSlotSize/1.5), "Strongest Defeated Foe: ");
		GUI.Label(Rect(menusX+menusW/4+invSlotSize*10, menusY+menusH/10+12*invSlotSize/1.5, menusW/6+menusW/25, invSlotSize/1.5), dm.getPlayerData().strongestFoe);
		//GUI.DrawTexture(Rect(menusX+menusW/50, menusY, menusW/6+menusW/25, menusW/6+menusH/12), backDrop01);
		GUI.DrawTexture(Rect(menusX+menusW/25, menusY+menusH/25, menusW/6, menusW/6), portrait);
		GUI.DrawTexture(Rect(menusX+menusW/25, menusY+menusH/25, menusW/6, menusW/6), frame);
		GUI.Label(Rect(menusX+menusW/25, menusY+menusW/6+menusH/12, menusW/6+menusW/25, invSlotSize/1.5), "Total Kill Count: ");
		GUI.Label(Rect(menusX+menusW/25, menusY+menusW/6+menusH/12+invSlotSize/1.5, menusW/6+menusW/25, invSlotSize/1.5), ""+dm.getPlayerData().totalKillCount);
		GUI.Label(Rect(menusX+menusW/25, menusY+menusW/6+menusH/12+2*invSlotSize/1.5, menusW/6+menusW/25, invSlotSize/1.5), "Battle Kill Count: ");
		GUI.Label(Rect(menusX+menusW/25, menusY+menusW/6+menusH/12+3*invSlotSize/1.5, menusW/6+menusW/25, invSlotSize/1.5), ""+dm.getPlayerData().battleKillCount);
		GUI.Label(Rect(menusX+menusW/25, menusY+menusW/6+menusH/12+4*invSlotSize/1.5, menusW/6+menusW/25, invSlotSize/1.5), "Total Heroes Killed: ");
		GUI.Label(Rect(menusX+menusW/25, menusY+menusW/6+menusH/12+5*invSlotSize/1.5, menusW/6+menusW/25, invSlotSize/1.5), ""+dm.getPlayerData().heroKills);
		GUI.Label(Rect(menusX+menusW/25, menusY+menusW/6+menusH/12+6*invSlotSize/1.5, menusW/6+menusW/25, invSlotSize/1.5), "Total Minions Killed: ");
		GUI.Label(Rect(menusX+menusW/25, menusY+menusW/6+menusH/12+7*invSlotSize/1.5, menusW/6+menusW/25, invSlotSize/1.5), ""+dm.getPlayerData().minionKills);
		GUI.Label(Rect(menusX+menusW/25, menusY+menusW/6+menusH/12+8*invSlotSize/1.5, menusW/6+menusW/25, invSlotSize/1.5), "Total Towers Destroyed: ");
		GUI.Label(Rect(menusX+menusW/25, menusY+menusW/6+menusH/12+9*invSlotSize/1.5, menusW/6+menusW/25, invSlotSize/1.5), ""+dm.getPlayerData().towerKills);
		GUI.Label(Rect(menusX+menusW/25, menusY+menusW/6+menusH/12+10*invSlotSize/1.5, menusW/6+menusW/25, invSlotSize/1.5), "Total Bases Destroyed: ");
		GUI.Label(Rect(menusX+menusW/25, menusY+menusW/6+menusH/12+11*invSlotSize/1.5, menusW/6+menusW/25, invSlotSize/1.5), ""+dm.getPlayerData().baseKills);
	}
}