public class OverlayInGameState extends OverlayScreenState{
	public function display(){
		var perHealth:float =dm.getPlayerData().curHealth/dm.getPlayerData().maxHealth;
		var perMana:float=dm.getPlayerData().curMana/dm.getPlayerData().maxMana;
		var perXP:float=dm.getPlayerData().xp/dm.getPlayerData().nextLevelXP;
		GUI.DrawTexture(Rect(macroBarX, macroBarY, macroBarW, macroBarH), macroBar);
		var baseStatusX=slotX+slotSize*10;
		GUI.DrawTexture(Rect(baseStatusX,barsY,slotSize*10,slotSize/2),emptyStatusBar);//maxHealth
		GUI.DrawTexture(Rect(baseStatusX+slotSize/10,barsY+slotSize/10,innerBarW*perHealth,innerBarH),healthBar);//curHealth
		GUI.Label(Rect(baseStatusX+slotSize/10,barsY-slotSize/8,slotSize*10,slotSize), dm.getPlayerData().curHealth+"/"+dm.getPlayerData().maxHealth);//health text
		GUI.DrawTexture(Rect(baseStatusX,barsY+(1.5*slotSize/2),slotSize*10,slotSize/2),emptyStatusBar);//maxMana
		GUI.DrawTexture(Rect(baseStatusX+slotSize/10,barsY+(1.5*slotSize/2)+slotSize/10,innerBarW*perMana,innerBarH),manaBar);//curMana
		GUI.Label(Rect(baseStatusX+slotSize/10,barsY+(1.5*slotSize/2)-slotSize/8,slotSize*10,slotSize), dm.getPlayerData().curMana+"/"+dm.getPlayerData().maxMana);//mana text
		GUI.DrawTexture(Rect(baseStatusX,barsY+(3*slotSize/2),slotSize*10,slotSize/2),emptyStatusBar);//maxXp
		GUI.DrawTexture(Rect(baseStatusX+slotSize/10,barsY+(3*slotSize/2)+slotSize/10,innerBarW*perXP,innerBarH),xpBar);//currentXp
		GUI.Label(Rect(slotX+slotSize*10+slotSize/10,barsY+(3*slotSize/2)-slotSize/8,slotSize*10,slotSize), dm.getPlayerData().xp+"/"+dm.getPlayerData().nextLevelXP);//mana text
		for(var i=0;i<10;i++){
			GUI.DrawTexture(Rect(slotX+(i*slotSize),slotY,slotSize,slotSize),emptySpell);
			GUI.DrawTexture(Rect(slotX+((i+10)*slotSize),slotY,slotSize,slotSize),emptyPotion);
		}
		GUI.Label(Rect(slotX,barsY,4*slotSize,slotSize), "Name: ");
		GUI.Label(Rect(slotX,barsY+slotSize/2,4*slotSize,slotSize), "  "+dm.getPlayerData().heroName);
		GUI.Label(Rect(slotX,barsY+slotSize,4*slotSize,slotSize), "Team: ");
		GUI.Label(Rect(slotX,barsY+slotSize*1.5,4*slotSize,slotSize), "  "+Global_Variables.teamNameToString(dm.getPlayerData().team));
		GUI.Label(Rect(slotX,barsY+slotSize*2,4*slotSize,slotSize), "Location: ");
		GUI.Label(Rect(slotX+slotSize*5,barsY,4*slotSize,slotSize), "Level: "+dm.getPlayerData().powerLevel);
		GUI.Label(Rect(slotX+slotSize*5,barsY+slotSize/2,4*slotSize,slotSize), "Money: "+dm.getPlayerData().wealth);
		GUI.Label(Rect(slotX+slotSize*5,barsY+slotSize,4*slotSize,slotSize), "Damage: ");
		GUI.DrawTexture(Rect(macroBarX+slotSize/5, macroBarY+slotSize/2, macroBarH-slotSize, macroBarH-slotSize), portrait);//character Portrait
		GUI.DrawTexture(Rect(macroBarX+slotSize/5, macroBarY+slotSize/2, macroBarH-slotSize, macroBarH-slotSize), frame);//frame
	}
}