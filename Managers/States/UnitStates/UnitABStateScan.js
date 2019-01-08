public class UnitABStateScan extends UnitABState{


    //Unit is scanning, effectively idle but checking every frame called
    public function UnitABStateScan(){
    	super("scan", 0);
    }

    public function update(unit:Unit,time:float){
        //depending on speed, randomly skip some percent of scans
    	scan(unit);
    }

    /*UnitType has certain states provided that will redirect the unit*/
    public function getNextStateString(unitType:String){
        return ((UnitType)UnitTypeHash.getValue(unitType)).getStatePostScan();
        //return "Idle";//default but should be overridden 
    }

    /*Given a unit, scan for enemy targets. If the enemies are in attack range 
    change the state to attack the objects, if not check inside the pursue 
    range.  Buildings have a 0 pursue range so the surronding loop is set based 
    on which is the larger range.*/
    private function scan(unit:Unit){}
        //unitId: String, range:int){
        //queries the grid hash table with a preset range of 1,2,3, or 4 
        //Ontop of the unit (0) is 2x2, 1 is 4x4, 2 is 6x6, 3 is 8x8
	    var unitLocHash :UnitLocation= UnitLocation.getUnitLocHash();
	    unitLocHash.updateLoc(unit);//maybe this should only be called when moving
	    var centerArr=unitLocHash.getUnitLoc(unitHash);
	    /*check center, loop around the first value in array automatically 
	    assume x+1,y - x, y+1, and x+1, y+1*/
        var attRange:int = unit.unitData.attackCooldowns.selectAttack(unit.unitData.archetype);
        var pursueRange:int = getAttackRange(unit);
        var maxRange:int;
        if(attRange>pursueRange){maxRange=attRange;}
        else{maxRange=pursueRange;}
	    for(var i=0;i<4;i++){
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
        var low:int=-1*range;
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
                    return;//enemy is set return
                }
            }
        }
    }

    private function setNextState(unit:Unit, enemy:String,state:String){
        ((BotData)unit.unitData).targetHashId=enemy;
        unit.unitData.unitState=state;
        unit.unitData.stateCountDown=HashUnitABState.getValue(state).getTimer();
    }

    private function getAttackRange(unit:Unit){
        var archString:Archetype= ArchetypeHash.getValue(unit.unitData.archetype);
        var attPref:String=Archetype.attackPref;
        var attackStr:String=unit.unitData.attackCooldowns.selectAttack(attPref);
        if(attackStr!="None"){
            var attType:UnitAttackType=(UnitAttackType)UAHash.getValue(attackStr);
            return attType.getDistance(0);
        }
        else{
            return 0;
        }
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