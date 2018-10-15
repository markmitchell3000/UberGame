public class UnitPlacementsTripleLane extends UnitPlacements{
	public function UnitPlacementsTripleLane(quadrant:int){
		super(quadrant);
		placeTripleLane(quadrant);
	}

	private function placeTripleLane(q:int){
        /*up left quadrants layout, rotate for repective corners
            0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
        0  -- -- -- -- -- -- -- -- -- -- -- to to -- -- --
        1  -- ba ba ba ba -- -- -- -- -- -- to to -- -- --
        2  -- ba ba ba ba -- -- -- -- -- -- lt -- so so so
        3  -- ba ba ba ba -- gu -- hu bo lt lt so so so so
        4  -- ba ba ba ba -- -- -- -- -- -- to to so so so
        5  -- -- -- -- -- ti -- -- -- -- -- to to -- -- --
        6  -- -- -- gu -- -- gu -- -- -- -- -- -- -- -- --
        7  -- -- -- -- -- -- -- ti -- -- -- -- -- -- -- --
        8  -- -- -- hu -- -- -- -- hu -- -- to to -- -- --
        9  -- -- -- bo -- -- -- -- -- bo -- to to -- -- -- 
        10 -- -- -- lt -- -- -- -- -- -- -- -- lt lt -- --
        11 to to lt lt to to -- -- to to -- -- -- -- -- --
        12 to to -- so to to -- -- to to lt -- so -- -- --
        13 -- -- so so so -- -- -- -- -- lt -- -- so so so
        14 -- -- so so so -- -- -- -- -- -- -- -- so so so
        15 -- -- so so so -- -- -- -- -- -- -- -- so so so
        */
        var soldY1:int;//row of 1st block where 9 soldiers are
        var soldX1:int;//col of 1st block where 9 soldiers are
        var soldY2:int;//row of 2nd block where 9 soldiers are
        var soldX2:int;//col of 2nd block where 9 soldiers are
        var soldY3:int;//row of 3rd block where 9 soldiers are
        var soldX3:int;//col of 3rd block where 9 soldiers are
        if((q>=0)&&(q<=3)){
            baseSpots=[1,1];

            towerSpots.Add([11,0]);
            towerSpots.Add([11,4]);
            towerSpots.Add([11,8]);
            towerSpots.Add([0,11]);
            towerSpots.Add([4,11]);
            towerSpots.Add([8,11]);

            bonusSpots.Add([9,3]);
            bonusSpots.Add([9,9]);
            bonusSpots.Add([3,9]);

            titanSpots.Add([5,5]);
            titanSpots.Add([7,7]);

            guardianSpots.Add([6,3]);
            guardianSpots.Add([6,6]);
            guardianSpots.Add([3,6]);

            hunterSpots.Add([8,3]);
            hunterSpots.Add([8,8]);
            hunterSpots.Add([3,8]);

            ltSpots.Add([2,11]);
            ltSpots.Add([3,10]);
            ltSpots.Add([3,11]);
            ltSpots.Add([10,3]);
            ltSpots.Add([10,12]);
            ltSpots.Add([10,13]);
            ltSpots.Add([11,2]);
            ltSpots.Add([11,3]);
            ltSpots.Add([12,10]);
            ltSpots.Add([13,10]);

            soldierSpots.Add([3,12]);
            soldierSpots.Add([12,3]);
            soldierSpots.Add([12,12]);

            soldY1=2;
            soldX1=13;
            soldY2=13;
            soldX2=2;
            soldY3=13;
            soldX3=13;
        }
        if((q>=4)&&(q<=7)){
            baseSpots=[1,11];

            towerSpots.Add([0,4]);
            towerSpots.Add([4,4]);
            towerSpots.Add([8,4]);
            towerSpots.Add([11,6]);
            towerSpots.Add([11,10]);
            towerSpots.Add([11,14]);

            bonusSpots.Add([3,6]);
            bonusSpots.Add([9,6]);
            bonusSpots.Add([9,12]);

            titanSpots.Add([5,10]);
            titanSpots.Add([7,8]);

            guardianSpots.Add([3,9]);
            guardianSpots.Add([6,9]);
            guardianSpots.Add([6,12]);

            hunterSpots.Add([3,7]);
            hunterSpots.Add([8,7]);
            hunterSpots.Add([8,12]);

            ltSpots.Add([2,4]);
            ltSpots.Add([3,4]);
            ltSpots.Add([3,5]);
            ltSpots.Add([10,2]);
            ltSpots.Add([10,3]);
            ltSpots.Add([10,12]);
            ltSpots.Add([11,12]);
            ltSpots.Add([11,13]);
            ltSpots.Add([12,5]);
            ltSpots.Add([13,5]);

            soldierSpots.Add([3,3]);
            soldierSpots.Add([12,3]);
            soldierSpots.Add([12,12]);

            soldY1=2;
            soldX1=0;
            soldY2=13;
            soldX2=0;
            soldY3=13;
            soldX3=11;
        }
        if((q>=8)&&(q<=11)){
            baseSpots=[11,1];

            towerSpots.Add([3,0]);
            towerSpots.Add([3,4]);
            towerSpots.Add([3,8]);
            towerSpots.Add([6,11]);
            towerSpots.Add([10,11]);
            towerSpots.Add([14,11]);

            bonusSpots.Add([6,3]);
            bonusSpots.Add([6,9]);
            bonusSpots.Add([12,9]);

            titanSpots.Add([10,5]);
            titanSpots.Add([8,7]);

            guardianSpots.Add([9,3]);
            guardianSpots.Add([9,6]);
            guardianSpots.Add([12,6]);

            hunterSpots.Add([7,3]);
            hunterSpots.Add([7,8]);
            hunterSpots.Add([12,8]);

            ltSpots.Add([2,10]);
            ltSpots.Add([3,10]);
            ltSpots.Add([4,2]);
            ltSpots.Add([4,3]);
            ltSpots.Add([5,3]);
            ltSpots.Add([5,12]);
            ltSpots.Add([5,13]);
            ltSpots.Add([12,10]);
            ltSpots.Add([12,11]);
            ltSpots.Add([13,11]);

            soldierSpots.Add([3,3]);
            soldierSpots.Add([3,12]);
            soldierSpots.Add([12,12]);

            soldY1=0;
            soldX1=2;
            soldY2=0;
            soldX2=13;
            soldY3=11;
            soldX3=13;
        }
        if(q>=12){
            baseSpots=[11,11];

            towerSpots.Add([3,6]);
            towerSpots.Add([3,10]);
            towerSpots.Add([3,14]);
            towerSpots.Add([6,3]);
            towerSpots.Add([10,3]);
            towerSpots.Add([14,3]);

            bonusSpots.Add([6,6]);
            bonusSpots.Add([6,12]);
            bonusSpots.Add([12,6]);

            titanSpots.Add([10,10]);
            titanSpots.Add([8,8]);

            guardianSpots.Add([9,9]);
            guardianSpots.Add([9,12]);
            guardianSpots.Add([12,9]);

            hunterSpots.Add([7,7]);
            hunterSpots.Add([7,12]);
            hunterSpots.Add([12,7]);

            ltSpots.Add([2,5]);
            ltSpots.Add([3,5]);
            ltSpots.Add([4,12]);
            ltSpots.Add([4,13]);
            ltSpots.Add([5,2]);
            ltSpots.Add([5,3]);
            ltSpots.Add([5,12]);
            ltSpots.Add([12,4]);
            ltSpots.Add([12,5]);
            ltSpots.Add([13,4]);

            soldierSpots.Add([3,3]);
            soldierSpots.Add([3,12]);
            soldierSpots.Add([12,3]);

            soldY1=0;
            soldX1=0;
            soldY2=0;
            soldX2=11;
            soldY3=11;
            soldX3=0;
        }
        for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
                soldierSpots.Add([i+soldY1,j+soldX1]);
                soldierSpots.Add([i+soldY2,j+soldX2]);
                soldierSpots.Add([i+soldY3,j+soldX3]);
            }
        }
    }
}