public class UnitPlacementsSingleLane extends UnitPlacements{
	public function UnitPlacementsSingleLane(quadrant:int){
		super(quadrant);
		placeSingleLane(quadrant);
	}

	private function placeSingleLane(q:int){
        /*up left quadrants layout, rotate for repective corners
            0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
        0  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        1  -- ba ba ba ba -- -- -- -- -- -- -- -- -- -- --
        2  -- ba ba ba ba -- -- -- -- -- -- -- -- -- -- --
        3  -- ba ba ba ba -- -- to to -- hu -- -- -- -- --
        4  -- ba ba ba ba -- -- to to -- -- -- -- -- -- --
        5  -- -- -- -- -- ti -- -- -- -- -- -- -- -- -- --
        6  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        7  -- -- -- to to -- -- bo -- gu -- -- -- -- -- --
        8  -- -- -- to to -- -- -- -- -- -- -- -- -- -- --
        9  -- -- -- -- -- -- -- gu -- ti -- -- -- -- -- -- 
        10 -- -- -- hu -- -- -- -- -- -- -- lt -- -- to to
        11 -- -- -- -- -- -- -- -- -- -- lt lt lt -- to to
        12 -- -- -- -- -- -- -- -- -- -- -- lt so -- -- --
        13 -- -- -- -- -- -- -- -- -- -- -- -- -- so so so
        14 -- -- -- -- -- -- -- -- -- -- to to -- so so so
        15 -- -- -- -- -- -- -- -- -- -- to to -- so so so
        */
        //each team has only 1 base,
        //[0]=y or row, [1]=x or column
        var ySold:int;//row where block of 9 soldiers begins
        var xSold:int;//col where block of 9 soldiers begins
        if((q>=0)&&(q<=3)){
            baseSpots=[1,1];

            towerSpots.Add([3,7]);
            towerSpots.Add([7,3]);
            towerSpots.Add([10,14]);
            towerSpots.Add([14,10]);

            bonusSpots=[7,7];

            titanSpots.Add([5,5]);
            titanSpots.Add([9,9]);

            guardianSpots.Add([7,9]);
            guardianSpots.Add([9,7]);

            hunterSpots.Add([3,10]);
            hunterSpots.Add([10,3]);

            ltSpots.Add([10,11]);
            ltSpots.Add([11,10]);
            ltSpots.Add([11,11]);
            ltSpots.Add([11,12]);
            ltSpots.Add([12,11]);

            soldierSpots.Add([12,12]);
            ySold=13;
            xSold=13;
        }
        if((q>=4)&&(q<=7)){
            baseSpots=[1,11];

            towerSpots.Add([3,7]);
            towerSpots.Add([7,11]);
            towerSpots.Add([10,0]);
            towerSpots.Add([14,4]);

            bonusSpots=[7,8];

            titanSpots.Add([5,10]);
            titanSpots.Add([9,6]);

            guardianSpots.Add([7,6]);
            guardianSpots.Add([9,8]);

            hunterSpots.Add([3,5]);
            hunterSpots.Add([10,12]);

            ltSpots.Add([10,4]);
            ltSpots.Add([11,3]);
            ltSpots.Add([11,4]);
            ltSpots.Add([11,5]);
            ltSpots.Add([12,4]);

            soldierSpots.Add([12,3]);
            ySold=13;
            xSold=0;
        }
        if((q>=8)&&(q<=11)){
            baseSpots=[11,1];

            towerSpots.Add([7,3]);
            towerSpots.Add([11,7]);
            towerSpots.Add([0,10]);
            towerSpots.Add([4,14]);

            bonusSpots=[8,7];

            titanSpots.Add([10,5]);
            titanSpots.Add([6,9]);

            guardianSpots.Add([6,7]);
            guardianSpots.Add([8,9]);

            hunterSpots.Add([5,3]);
            hunterSpots.Add([12,10]);

            ltSpots.Add([3,11]);
            ltSpots.Add([4,10]);
            ltSpots.Add([4,11]);
            ltSpots.Add([4,12]);
            ltSpots.Add([5,11]);

            soldierSpots.Add([3,12]);
            ySold=0;
            xSold=13;
        }
        //quadrants should only go to 15
        if(q>=12){
            baseSpots=[11,11];

            towerSpots.Add([0,4]);
            towerSpots.Add([4,0]);
            towerSpots.Add([7,11]);
            towerSpots.Add([11,7]);

            bonusSpots=[8,8];

            titanSpots.Add([10,10]);
            titanSpots.Add([6,6]);

            guardianSpots.Add([6,8]);
            guardianSpots.Add([8,6]);

            hunterSpots.Add([5,12]);
            hunterSpots.Add([12,5]);

            ltSpots.Add([3,4]);
            ltSpots.Add([4,3]);
            ltSpots.Add([4,4]);
            ltSpots.Add([4,5]);
            ltSpots.Add([5,4]);

            soldierSpots.Add([3,3]);
            ySold=0;
            xSold=0;
        }
        for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
                soldierSpots.Add([i+ySold,j+xSold]);
            }
        }
    }
}