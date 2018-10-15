public class TVPickEnemy implements TeamVisitor
{
    private var tl:String[];
    
	public function TVPickEnemy(curTeam:Team, teamList:String[]){
        tl=teamList;
        return curTeam.acceptVisitor(this);
	}

	public function visitUnit(team:TeamInner){
        var enemies = new ArrayList();
        for(var i=0;i<tl.length;i++)
            if(team.enemyHash.checkState(team.name, tl[i])){
            	enemies.add(tl[i]);
            }
        }
        return enemies;
	}
}