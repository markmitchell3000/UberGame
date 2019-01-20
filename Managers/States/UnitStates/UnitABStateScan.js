public class UnitABStateScan extends UnitABState{


    //Unit is scanning, effectively idle but checking every frame called
    public function UnitABStateScan(){
    	super("Scan", 0.1);
    }

    public function update(unit:Unit,time:float){
        //depending on speed, randomly skip some percent of scans maybe
    	scan(unit);
        super.update(unit, time);
    }

    /*Given a unit, scan for enemy targets. If the enemies are in attack range 
    change the state to attack the objects, if not check inside the pursue 
    range.  Buildings have a 0 pursue range so the surronding loop is set based 
    on which is the larger range.*/
    private function scan(unit:Unit){}
        //queries the grid hash table with a preset range of 1,2,3, or maybe 4 
        //Ontop of the unit (0) is 3x3, 1 is 5x5, 2 is 7x7, 3 is 9x9,4 is 11x11
	    var unitLocHash :UnitLocation= UnitLocation.getUnitLocHash();
	    unitLocHash.updateLoc(unit);//maybe this should only be called when moving
	    var centerArr=unitLocHash.getUnitLoc(unitHash);
	    /*check center, loop around the first value in array automatically 
	    assume x+1,y - x, y+1, and x+1, y+1*/
        var attRange:string = getAttackRange(unit);
        var pursueRange:int = getPursueRange(unit);
        var maxRange:int;
        if(attRange>pursueRange){maxRange=attRange;}
        else{maxRange=pursueRange;}
	    for(var i=0;i<9;i++){
	        var nearUnits:ArrayList=(ArrayList)unitLocHash.checkSpot((Point)centerArr[i]);
            var enemy:String=(String)getEnemyHashId(nearUnits,unit.unitData.team);
	        if(enemy!="None"){
	            setNextState(unit,enemy,"Attack");
                return;//enemy is set return
	        }
	    }
        var state:String="Attack";
        for(var i=1;i<=maxRange;i++){
            if(i>attRange){state="Pursue";}
            if(scanPerimeter((Point)centerArr[0],unit,i,state)){return;}//if an enemy is set return
        }
    }
    
    /*Expands the square to eaxamine the parameter around the previous square.
    Whether this is for attacks or pursuit is determined outside of this 
    function.*/
    private function scanPerimeter(unitPnt:Point,unit:Unit,range, state){
        var low:int=-1*range-1;
        var high:int=range+1;
        for(var i=0;i<(2*range+2);i++){
            var tryPnts=new Point[4];
            tryPnts[0]=new Point(unitPnt.x+low,unitPnt.y+low+i);
            tryPnts[1]=new Point(unitPnt.x+high-i,unitPnt.y+low);
            tryPnts[2]=new Point(unitPnt.x+high,unitPnt.y+high-i);
            tryPnts[3]=new Point(unitPnt.x+low+i,unitPnt.y+high);
            for(var j=0;j<4;j++){
                var nearUnits:ArrayList=(ArrayList)unitLocHash.checkSpot(tryPnts[i]);
                var enemy:String=(String)getEnemyHashId(nearUnits,unit.unitData.team);
                if(enemy!="None"){
                    setNextState(unit,enemy,state);
                    return true;//enemy is set return
                }
            }
        }
        return false;
    }

    private function setNextState(unit:Unit, enemy:String,state:String){
        ((BotData)unit.unitData).targetHashId=enemy;
        unit.unitData.setState(state);
    }

    private function getAttackRange(unit:Unit){
        var arch:Archetype= ArchetypeHash.getValue(unit.unitData.archetype);
        var attPref:String=arch.attackPref;
        var attackStr:String=unit.unitData.attackCooldowns.selectAttack(attPref);
        if(attackStr!="None"){
            var attType:UnitAttackType=(UnitAttackType)UAHash.getValue(attackStr);
            return attType.getDistance(0);
        }
        else{
            return 0;
        }
    }

    private function getPursueRange(unit:Unit){
        var ut:UnitType= (UnitType)UnitTypeHash.getValue(unit.unitData.unitType);
        return ut.getPursueRange();
    }
    
    /*Given an array of hashids, grab the first Uses hashid to retrieve 
    enemydata, if enemy is member of enemy team, then return the obj.  If the 
    entire collection is cycled and no enemy is found return null*/
    private function getEnemyHashId(hashArr:ArrayList,team:String){
        var otherUnit:Unit;
        for(var hashId: String in hashArr){
            otherUnit=UnitCollection.getUC().getUnit(hashId);
            if(EnemyHash.checkState(otherUnit.unitData.team,team)){return hashId;}
        }
        return "None";
    }


}