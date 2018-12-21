public class UnitPlacementsTripling extends UnitPlacements{
	public function UnitPlacementsTripling(quadrant:int){
		super(quadrant);
		placeTripling(quadrant);
	}

    private function placeTripling(q:int){
        /*up left quadrants layout, rotate for repective corners
            0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
        0  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        1  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        2  -- -- ti -- -- -- -- -- -- -- -- -- -- -- -- --
        3  -- -- -- ti -- gu -- -- -- hu -- -- -- -- -- --
        4  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        5  -- -- -- gu -- gu -- -- -- -- -- -- -- -- -- --
        6  -- -- -- -- -- -- lt lt lt -- -- so so so -- --
        7  -- -- -- -- -- -- lt lt lt -- -- so so so -- --
        8  -- -- -- -- -- -- lt lt lt -- -- so so so -- --
        9  -- -- -- hu -- -- -- -- -- hu -- -- -- -- -- -- 
        10 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        11 -- -- -- -- -- -- so so so -- -- so so so -- --
        12 -- -- -- -- -- -- so so so -- -- so so so -- --
        13 -- -- -- -- -- -- so so so -- -- so so so -- --
        14 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        15 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        */
        var soldY1:int;//row where 1st block of 4 soldiers begins
        var soldX1:int;//col where 1st block of 4 soldiers begins
        var soldY2:int;//row where 2nd block of 4 soldiers begins
        var soldX2:int;//col where 2nd block of 4 soldiers begins
        var soldY3:int;//row where 3rd block of 4 soldiers begins
        var soldX3:int;//col where 3rd block of 4 soldiers begins
        var ltY:int;//row of block of 9 lts
        var ltX:int;//col of block of 9 lts
        if((q>=0)&&(q<=3)){
            titanSpots.Add([2,2]);
            titanSpots.Add([3,3]);

            guardianSpots.Add([3,5]);
            guardianSpots.Add([5,3]);
            guardianSpots.Add([5,5]);

            hunterSpots.Add([3,9]);
            hunterSpots.Add([9,3]);
            hunterSpots.Add([9,9]);

            ltSpots.Add([5,8]);
            ltSpots.Add([6,8]);
            ltSpots.Add([8,5]);
            ltSpots.Add([8,6]);

            soldY1=6;
            soldX1=11;
            soldY2=11;
            soldX2=6;
            soldY3=11;
            soldX3=11;

            ltY=6;
            ltX=6;
        }
        else if((q>=4)&&(q<=7)){
            titanSpots.Add([2,13]);
            titanSpots.Add([3,3]);

            guardianSpots.Add([3,10]);
            guardianSpots.Add([5,12]);
            guardianSpots.Add([5,10]);

            hunterSpots.Add([3,6]);
            hunterSpots.Add([9,12]);
            hunterSpots.Add([9,6]);

            ltSpots.Add([5,7]);
            ltSpots.Add([6,7]);
            ltSpots.Add([8,9]);
            ltSpots.Add([8,10]);

            soldY1=6;
            soldX1=2;
            soldY2=11;
            soldX2=2;
            soldY3=11;
            soldX3=7;

            ltY=6;
            ltX=7;
        }
        else if((q>=8)&&(q<=11)){
            titanSpots.Add([13,2]);
            titanSpots.Add([12,3]);

            guardianSpots.Add([10,3]);
            guardianSpots.Add([12,5]);
            guardianSpots.Add([10,5]);

            hunterSpots.Add([6,3]);
            hunterSpots.Add([12,9]);
            hunterSpots.Add([6,9]);

            ltSpots.Add([7,5]);
            ltSpots.Add([7,6]);
            ltSpots.Add([9,8]);
            ltSpots.Add([10,8]);

            soldY1=2;
            soldX1=6;
            soldY2=2;
            soldX2=11;
            soldY3=7;
            soldX3=11;

            ltY=7;
            ltX=6;
        }
        else if(q>=12){
            titanSpots.Add([13,13]);
            titanSpots.Add([12,12]);

            guardianSpots.Add([10,12]);
            guardianSpots.Add([12,10]);
            guardianSpots.Add([10,10]);

            hunterSpots.Add([6,12]);
            hunterSpots.Add([12,6]);
            hunterSpots.Add([6,6]);

            ltSpots.Add([7,9]);
            ltSpots.Add([7,10]);
            ltSpots.Add([9,7]);
            ltSpots.Add([10,7]);

            soldY1=2;
            soldX1=2;
            soldY2=2;
            soldX2=7;
            soldY3=7;
            soldX3=2;

            ltY=7;
            ltX=7;
        }
        for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
                soldierSpots.Add([i+soldY1,j+soldX1]);
                soldierSpots.Add([i+soldY2,j+soldX2]);
                soldierSpots.Add([i+soldY3,j+soldX3]);
                ltSpots.Add([i+ltY,j+ltX]);
            }
        }
    }
}