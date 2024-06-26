import {Game_User} from ".prisma/client";

type User = {
    game_user: Game_User;
    id: number;
    username: string;
    email: string;
    password: string;
    status: string,
    biography: string;
    role: string
};

export default User;