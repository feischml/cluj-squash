import { User } from './users.model';
import { Player } from './players.model';

export class PlayerUser{
    
    user: User;
    player: Player;

    constructor(){
        this.user = new User();
        this.player = new Player();
    }
}