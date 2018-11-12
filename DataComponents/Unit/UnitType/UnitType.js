
/*Bases can generate, respawn and attack but not move. Used only by a teams main groups. 
Towers can attack but not move. Used only by a teams main groups.
Bonuses can attack and enhance team stats but cannot move. Used only by a teams main groups, for now.
Soldiers have low stats and always move or attack.
Lieutenats respawn with base and have high stats and always move or attack, heroes are considered lts. 
Hunters respawn with base and have lt level stats and seek out Heroes or lt units or work there way to lower level units if needed.
Guardians only move to pursue but will always return to a set location, they have higher stats than lts.
Titans are just like guardians but with higher stats.
Civilians have low stats and can move, flee or stay idle. They are allied with home team, in case of mission that is players team. 
  Other kinds of activities may be added later.
Zombies have mid level stats and can move, pursue or attack.  They will attack all teams.
Workers are like civilians but preform certain tasked that grow the wealth of the state they belong. 
*/
//BASE, TOWER, BONUS, SOLDIER, LIEUTENANT, HUNTER, GUARDIAN, TITAN, CIVILIAN, ZOMBIE, WORKER
//All children are singletons
public class UnitType{
    //set based on level and unittype bonues
    protected var baseHealth:int;
    protected var baseMana:int;
    protected var baseAttRange:float;
    protected var basePursueRange:float;//range beyond attack that unit will chase
    protected var isBuilding:boolean;

    //called by extended classes which have unique values
    public function UnitType(bh:int,bm:int,bar:float,pr:float,isbld:boolean){
        baseHealth=bh;
        baseMana=bm;
        baseAttRange=bar;
        basePursueRange=pr;
        isBuilding=isbld;
    }

    //abstract function uses the umf to return the appropriate array of models for that type
    public function getModelArr(umf: UnitModelFactory){

    }
    
    //set by extended class
    public function getMaxHealth(lvl:int){
    	//return maxHealth;
        return baseHealth*(1+(0.1*lvl));
    }
    //set by extended class
    public function getMaxMana(lvl:int){
    	//return maxMana;
        return baseMana*(1+(0.1*lvl));
    }
    //set by extended class, arbonus is the base bonus i believe
    public function getAttackRange(arbonus:float){
    	//return attRange;
        return baseAttRange+arbonus;
    }
    //set by extended class
    public function getPursueRange(){
    	//return pursueRange;
        return baseAttRange+basePursueRange;
    }
    //set by extended class
    public function isBuilding(){
        return isBuilding;//base, tower and bonus return true
    }

    /*Abstract class implemented by each of the unittypes that handles how they 
    are placed on the gameboard*/
    public function placeUnitByType(place:UnitPlacement, gbUnit:GBUnit, grid:GameGrid, untCnt:GBUnitCounter, tempObjs:Hashtable){
    }

    //used by any type that happens to be a building
    protected function placeTempObject(width:int, height:int, pnt:Point, model:String, tempObjs:Hashtable){
        var gbo:GBObject=new GBObject();
        gbo.modelString=model;
        gbo.xWidth=width;
        gbo.yHeight=height;
        gbo.destroyable=true;
        gbo.under=TileGround.getTile();
        gbo.byRow=true;
        gbo.xCoord=pnt.x;
        gbo.yCoord=pnt.y;
        tempObjs[y+","+x]=gbo;
    }

    //used by unit types to ensure that there placement is in a safe location
    protected function safePlacement(gU: GBUnit, grid:GameGrid){
        var cnt:int=0;
        while(!grid.getSpot(new Point(gU.yCoord, gU.xCoord)).isPassable()){
            var randY:int=Random.Range(-5,5);
            var randX:int=Random.Range(-5,5);
            var validY:boolean=((gU.yCoord+randY)>0)&&((gU.yCoord+randY)<sizeXY-1);
            var validX:boolean=((gU.xCoord+randX)>0)&&((gU.xCoord+randX)<sizeXY-1);
            gU.yCoord= validY?(gU.yCoord+randY):gU.yCoord;
            gU.xCoord= validX?(gU.xCoord+randX):gU.xCoord;
            cnt++;
            if(cnt>100){
                Debug.Log("GBUnit should be removed");
            }
        }
    }
}

