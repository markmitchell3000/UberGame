public class OverlayLocalMapState extends OverlayScreenState{
	public function display(){
		GUI.Label(Rect(menusX+menusW/2.25,menusY,invSlotSize*10,invSlotSize), "Area Map");
		GUI.DrawTexture(Rect(menusX+.2*menusW, menusY+.1*menusH, .6*menusW, .8*menusH), greenMiniMap);
	}
}