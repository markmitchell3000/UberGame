public class UnitPlacementsDoubling extends UnitPlacements{
	public function UnitPlacementsDoubling(quadrant:int){
		super(quadrant);
		placeDoubling(quadrant);
	}

    private function placeDoubling(q:int){
        /*up left quadrants layout, rotate for repective corners
            0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
        0  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        1  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        2  -- -- ti -- -- -- -- -- -- -- -- -- -- -- -- --
        3  -- -- -- ti -- gu -- -- -- hu -- -- -- -- -- --
        4  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        5  -- -- -- gu -- -- -- -- lt -- -- -- -- -- -- --
        6  -- -- -- -- -- -- -- -- lt -- -- -- -- -- -- --
        7  -- -- -- -- -- -- -- -- -- -- -- so so -- -- --
        8  -- -- -- -- -- lt lt -- -- -- -- so so -- -- --
        9  -- -- -- hu -- -- -- -- -- -- -- -- -- -- -- -- 
        10 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        11 -- -- -- -- -- -- -- so so -- -- -- -- -- -- --
        12 -- -- -- -- -- -- -- so so -- -- -- -- -- -- --
        13 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        14 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        15 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        */
        var soldY1:int;//row where 1st block of 4 soldiers begins
        var soldX1:int;//col where 1st block of 4 soldiers begins
        var soldY2:int;//row where 2nd block of 4 soldiers begins
        var soldX2:int;//col where 2nd block of 4 soldiers begins
        if((q>=0)&&(q<=3)){
            titanSpots.Add([2,2]);
            titanSpots.Add([3,3]);

            guardianSpots.Add([3,5]);
            guardianSpots.Add([5,3]);

            hunterSpots.Add([3,9]);
            hunterSpots.Add([9,3]);

            ltSpots.Add([5,8]);
            ltSpots.Add([6,8]);
            ltSpots.Add([8,5]);
            ltSpots.Add([8,6]);

            soldY1=7;
            soldX1=11;
            soldY2=11;
            soldX2=7;
        }
        else if((q>=4)&&(q<=7)){
            titanSpots.Add([2,13]);
            titanSpots.Add([3,3]);

            guardianSpots.Add([3,10]);
            guardianSpots.Add([5,12]);

            hunterSpots.Add([3,6]);
            hunterSpots.Add([9,12]);

            ltSpots.Add([5,7]);
            ltSpots.Add([6,7]);
            ltSpots.Add([8,9]);
            ltSpots.Add([8,10]);

            soldY1=7;
            soldX1=3;
            soldY2=11;
            soldX2=7;
        }
        else if((q>=8)&&(q<=11)){
            titanSpots.Add([13,2]);
            titanSpots.Add([12,3]);

            guardianSpots.Add([10,3]);
            guardianSpots.Add([12,5]);

            hunterSpots.Add([6,3]);
            hunterSpots.Add([12,9]);

            ltSpots.Add([7,5]);
            ltSpots.Add([7,6]);
            ltSpots.Add([9,8]);
            ltSpots.Add([10,8]);

            soldY1=3;
            soldX1=7;
            soldY2=7;
            soldX2=11;
        }
        else if(q>=12){
            titanSpots.Add([13,13]);
            titanSpots.Add([12,12]);

            guardianSpots.Add([10,12]);
            guardianSpots.Add([12,10]);

            hunterSpots.Add([6,12]);
            hunterSpots.Add([12,6]);

            ltSpots.Add([7,9]);
            ltSpots.Add([7,10]);
            ltSpots.Add([9,7]);
            ltSpots.Add([10,7]);

            soldY1=3;
            soldX1=7;
            soldY2=7;
            soldX2=3;
        }
        for(var i=0;i<2;i++){
            for(var j=0;j<2;j++){
                soldierSpots.Add([i+soldY1,j+soldX1]);
                soldierSpots.Add([i+soldY2,j+soldX2]);
            }
        }
    }
}