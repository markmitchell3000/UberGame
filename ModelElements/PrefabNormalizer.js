enum MODEL_SIZE{SMALL_SZ, REG_SZ, LG_SZ, HUGE_SZ, TITAN_SZ};
/* Class is used to resize prefabs, setup animation controllers 
set shaders to bumped difuse and any other setup needed to prep
a standardized model. */
public class PrefabNormalizer{
  public static var PN: PrefabNormalizer;
     
  private var regYSpot: float = -3.5;
  private var regSize: float = 0.083;
  private var smSize: float = 0.063;
  private var lgSize: float = 0.095;
  private var hugeSize: float = 0.110;
  private var titanSize: float = 0.130;  
  private var animator: Animator;
  private var animatorOverrideController: AnimatorOverrideController;
     
  public static function getPN(){
    if(PN == null){
      PN = new PrefabNormalizer();
    }
    return PN;
  }

  public function modelSetup(model:GameObject){
    resizeModel(model, regSize);
    adjShaders(model);
  }

  public function modelSetup(model:GameObject, sz:MODEL_SIZE){
    var modelSize:float=regSize;
    switch(sz){
      case MODEL_SIZE.SMALL_SZ:
        modSize=smSize;
        break;
      case MODEL_SIZE.REG_SZ:
        modSize=regSize;
        break;
      case MODEL_SIZE.LG_SZ:
        modSize=lgSize;
        break;
      case MODEL_SIZE.HUGE_SZ:
        modSize=hugeSize;
        break;
      case MODEL_SIZE.TITAN_SZ:
        modSize=titanSize;
        break;
    }
    resizeModel(model, modelSize);
    adjShaders(model);
  }

  private function resizeModel(model:GameObject, modSize:float){
    model.transform.localScale.x =modSize;
    model.transform.localScale.y =modSize;
    model.transform.localScale.z =modSize;
    //model.transform.localPosition.y =regYSpot;
  }

  private function adjShaders(model:GameObject){
    var shader1 : Shader= Shader.Find( "Standard" );
    var shader2 : Shader= Shader.Find( "Mobile/Bumped Diffuse" );
    var renderers : Component[];
    renderers = model.GetComponentsInChildren(Renderer);
    for(var r : Renderer in renderers)
    {
      if (r.sharedMaterial.shader == shader1 ){
        r.sharedMaterial.shader = shader2;
      }
    }
  }

}