public class UnitPlacementsCivOrZomb extends UnitPlacements{
	public function UnitPlacementsCivOrZomb(quadrant:int){
		super(quadrant);
		placeCivOrZomb(quadrant);
	}

    private function placeCivOrZomb(q:int){
        /*up left quadrants layout, rotate for repective corners
            0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
        0  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        1  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        2  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        3  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        4  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        5  -- -- -- -- -- cz cz cz cz cz -- -- -- -- -- --
        6  -- -- -- -- -- cz cz cz cz cz -- -- -- -- -- --
        7  -- -- -- -- -- cz cz cz cz cz -- -- -- -- -- --
        8  -- -- -- -- -- cz cz cz cz cz -- -- -- -- -- --
        9  -- -- -- -- -- cz cz cz cz cz -- -- -- -- -- -- 
        10 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        11 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        12 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        13 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        14 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        15 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        */
        var yCorner:int;//row of upper left hand corner
        var xCorner:int;//column of upper left hand corner
        if((q>=0)&&(q<=3)){
            yCorner=5;
            xCorner=5;
        }
        if((q>=4)&&(q<=7)){
            yCorner=5;
            xCorner=6;
        }
        if((q>=8)&&(q<=11)){
            yCorner=6;
            xCorner=5;
        }
        if(q>=12){
            yCorner=6;
            xCorner=6;
        }
        for(var i=0;i<5;i++){
            for(var j=0;j<5;j++){
                civOrZombSpots.Add([i+yCorner,j+xCorner]);
            }
        }
    }
}
