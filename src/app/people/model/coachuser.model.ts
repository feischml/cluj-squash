import { Coach } from './coaches.model';
import { User } from './users.model';

export class CoachUser{
    
    coach: Coach;
    user: User;

    constructor(){
        this.coach = new Coach();
        this.user = new User();
    }
}