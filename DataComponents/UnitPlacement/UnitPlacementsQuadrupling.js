public class UnitPlacementsQuadrupling extends UnitPlacements{
	public function UnitPlacementsQuadrupling(quadrant:int){
		super(quadrant);
		placeQuadrupling(quadrant);
	}

    private function placeQuadrupling(q:int){
        /*up left quadrants layout, rotate for repective corners
            0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
        0  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        1  -- -- -- -- -- gu -- -- -- -- -- -- -- -- -- --
        2  -- -- ti -- -- -- -- -- -- -- -- -- -- -- -- --
        3  -- -- -- ti -- gu -- -- -- hu -- -- hu -- -- --
        4  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        5  -- gu -- gu -- -- -- lt lt lt lt lt lt lt lt --
        6  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        7  -- -- -- -- -- lt -- so so so so so so so so --
        8  -- -- -- -- -- lt -- so so so so so so so so --
        9  -- -- -- hu -- lt -- so so so so so so so so -- 
        10 -- -- -- -- -- lt -- so so so so so so so so --
        11 -- -- -- -- -- lt -- so so so so so so so so --
        12 -- -- -- hu -- lt -- so so so so so so so so --
        13 -- -- -- -- -- lt -- so so so so so so so so --
        14 -- -- -- -- -- lt -- so so so so so so so so --
        15 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        */
        var ltAcrossY:int;//row where the 8 across lts are placed
        var ltAcrossX:int;//starting column for the 8 across lts are placed.
        var ltDownY:int;//starting row where the 8 down lts are placed.
        var ltDownX:int;//column where the 8 down lts are placed.
        var ySold:int;//row where block of 64 soldiers begins
        var xSold:int;//col where block of 64 soldiers begins
        if((q>=0)&&(q<=3)){
            titanSpots.Add([2,2]);
            titanSpots.Add([3,3]);

            guardianSpots.Add([1,5]);
            guardianSpots.Add([3,5]);
            guardianSpots.Add([5,1]);
            guardianSpots.Add([5,3]);

            hunterSpots.Add([3,9]);
            hunterSpots.Add([3,12]);
            hunterSpots.Add([9,3]);
            hunterSpots.Add([12,3]);

            ltAcrossY=5;
            ltAcrossX=7;

            ltDownY=7;
            ltDownX=5;

            ySold=7;
            xSold=7;
        }
        if((q>=4)&&(q<=7)){
            titanSpots.Add([2,13]);
            titanSpots.Add([3,3]);

            guardianSpots.Add([1,10]);
            guardianSpots.Add([3,10]);
            guardianSpots.Add([5,12]);
            guardianSpots.Add([5,14]);

            hunterSpots.Add([3,3]);
            hunterSpots.Add([3,6]);
            hunterSpots.Add([9,12]);
            hunterSpots.Add([12,12]);

            ltAcrossY=5;
            ltAcrossX=1;

            ltDownY=7;
            ltDownX=10;

            ySold=7;
            xSold=8;
        }
        if((q>=8)&&(q<=11)){
            titanSpots.Add([13,2]);
            titanSpots.Add([12,3]);

            guardianSpots.Add([10,1]);
            guardianSpots.Add([10,3]);
            guardianSpots.Add([12,5]);
            guardianSpots.Add([14,5]);

            hunterSpots.Add([3,3]);
            hunterSpots.Add([6,3]);
            hunterSpots.Add([12,9]);
            hunterSpots.Add([12,12]);

            ltAcrossY=10;
            ltAcrossX=7;

            ltDownY=1;
            ltDownX=5;

            ySold=8;
            xSold=7;
        }
        if(q>=12){
            titanSpots.Add([13,13]);
            titanSpots.Add([12,12]);

            guardianSpots.Add([10,12]);
            guardianSpots.Add([10,14]);
            guardianSpots.Add([12,10]);
            guardianSpots.Add([14,10]);

            hunterSpots.Add([3,12]);
            hunterSpots.Add([6,12]);
            hunterSpots.Add([12,3]);
            hunterSpots.Add([12,6]);

            ltAcrossY=10;
            ltAcrossX=1;

            ltDownY=1;
            ltDownX=10;

            ySold=8;
            xSold=8;
        }
        for(var a=0;a<8;a++){
            ltSpots.Add([ltAcrossY,ltAcrossX+a]);
        }
        for(var d=0;d<8;d++){
            ltSpots.Add([ltDownY+d,ltDownX]);
        }
        for(var i=0;i<8;i++){
            for(var j=0;j<8;j++){
                soldierSpots.Add([i+ySold,j+xSold]);
            }
        }
    }
}