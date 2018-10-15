public class OverlayInventoryState extends OverlayScreenState{
	public function display(){
		//item info equiped
		GUI.DrawTexture(Rect(menusX/3, menusY, 2*menusX/3, menusH), backDrop03);
		//item info backpack
		GUI.DrawTexture(Rect(menusX+menusW, menusY, 2*menusX/3, menusH), backDrop03);
		//Inventory Stuff
		GUI.Label(Rect(menusX+menusW/40+4*invSlotSize,menusY,invSlotSize*10,invSlotSize), dm.getPlayerData().heroName+" - Level "+dm.getPlayerData().powerLevel);
		GUI.Label(Rect(menusX+menusW/40+menusW/2+5*invSlotSize,menusY,invSlotSize*10,invSlotSize), "Inventory");
		GUI.DrawTexture(Rect(menusX+menusW/40, menusY+menusH/20, menusW/2-menusW/20, menusH-menusH/10), backDrop02);
		GUI.DrawTexture(Rect(menusX+menusW/40, menusY+menusH/20, menusW/2-menusW/20, menusH-menusH/10), figurePic);
		//if empty
		GUI.DrawTexture(Rect(menusX+menusW/4-.75*invSlotSize, menusY+menusH/20+invSlotSize/2, 1.5*invSlotSize, 1.5*invSlotSize), emptyHelm);
		//else some helm icon
		GUI.DrawTexture(Rect(menusX+menusW/4+1.5*invSlotSize, menusY+menusH/20+invSlotSize, invSlotSize, invSlotSize), emptyNecklace);
		GUI.DrawTexture(Rect(menusX+menusW/4-2.5*invSlotSize, menusY+menusH/20+invSlotSize, 1.2*invSlotSize, 1.2*invSlotSize), emptyShoulder);
		//if empty
		GUI.DrawTexture(Rect(menusX+menusW/4-invSlotSize, menusY+menusH/20+2.5*invSlotSize, 2*invSlotSize, 2*invSlotSize), emptyArmor);
		//else some armor icon
		GUI.DrawTexture(Rect(menusX+menusW/4-4.5*invSlotSize, menusY+menusH/20+2.5*invSlotSize, 1.7*invSlotSize, 3.5*invSlotSize), emptyWeapon);
		GUI.DrawTexture(Rect(menusX+menusW/4+3.3*invSlotSize, menusY+menusH/20+2.5*invSlotSize, 1.7*invSlotSize, 3.5*invSlotSize), emptyWeapon);
		GUI.DrawTexture(Rect(menusX+menusW/4-.75*invSlotSize, menusY+menusH/20+5*invSlotSize, 1.5*invSlotSize, .75*invSlotSize), emptyBelt);
		GUI.DrawTexture(Rect(menusX+menusW/4-2.5*invSlotSize, menusY+menusH/20+5*invSlotSize, 1.5*invSlotSize, 1.5*invSlotSize), emptyGlove);
		GUI.DrawTexture(Rect(menusX+menusW/4+1.5*invSlotSize, menusY+menusH/20+4*invSlotSize, 1.5*invSlotSize, 1.5*invSlotSize), emptyBracer);
		for(var ringS=0; ringS<5;ringS++){
			GUI.DrawTexture(Rect(menusX+menusW/4-4.5*invSlotSize+ringS*.6*invSlotSize, menusY+menusH/20+7.5*invSlotSize, 
				.5*invSlotSize, .5*invSlotSize), emptyRing);
			GUI.DrawTexture(Rect(menusX+menusW/4+1.5*invSlotSize+ringS*.6*invSlotSize, menusY+menusH/20+7.5*invSlotSize, 
				.5*invSlotSize, .5*invSlotSize), emptyRing);
		}
		GUI.DrawTexture(Rect(menusX+menusW/4-.75*invSlotSize, menusY+menusH/20+9*invSlotSize, 1.5*invSlotSize, 1.5*invSlotSize), emptyBoot);
		GUI.DrawTexture(Rect(menusX+menusW/2+menusW/40, menusY+menusH/20, menusW/2-menusW/20, menusH-menusH/10), backDrop01);
		for(var row=1;row<11;row++){
			for(var col=1;col<11;col++){
				//if slot is empty
				GUI.DrawTexture(Rect(menusX+menusW/2+menusW/40+invSlotSize*col, 
					menusY+menusH/20+invSlotSize*row, invSlotSize, invSlotSize), emptyInventory);
				//else some icon
			}
		}
	}
}