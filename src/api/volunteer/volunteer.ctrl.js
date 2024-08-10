
import dotenv from 'dotenv';
// import Matchmaking from '../../models/matchmaking';
import Volunteer from '../../models/volunteer.js';

dotenv.config();
import axios from 'axios';

export const getPosts = async ctx => {
    Volunteer.findAll().then((volunteers) => {
        console.log(volunteers);
        ctx.body = volunteers;
    });
};
