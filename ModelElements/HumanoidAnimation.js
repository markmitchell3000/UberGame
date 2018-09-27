//anim = gameObject.GetComponentInChildren(Animator);
public class HumanoidAnimation{
	private var stringlist:String[]=["gun","idle","walking","running","dying",
	"spellAttack","pullingPlant","punching","celebrate","zombieWalk","kicking",
	"rightHandWeapon","leftHandWeapon","twoHandWeapon","zombieAttack",
	"rightStrafe","leftStrafe","backRun","one","two","three"];

	public function HumanoidAnimation(anim : Animator){
       for(var animStr:String in stringlist){
           animHelper(anim, animStr);
       }
	}

	private function animHelper(anim:Animator, str:String){
       anim.StringToHash("Base Layer."+str);
       anim.SetBool(str, false);
	}

	public function changeState(old:String,newStr:String, anim:Animator){
	   anim.SetBool(old, false);
       anim.SetBool(newStr, true);
	}
}