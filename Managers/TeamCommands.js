/*class of commands that traverse the teams data and gather data or perform 
functions*/
public class TeamCommands{

	public function getEnemies(team:Team){
        var enemies = new ArrayList();
        for(var i=0;i<tl.length;i++)
            if(team.enemyHash.checkState(team.name, tl[i])){
            	enemies.add(tl[i]);
            }
        }
        return enemies;
	}
}