import Game from "../Game/Game";
import Platform from "../Platform/Platform";
import User from "../User/User";

type Post = {
    id: number;
    title: string;
    content: string;
    author: User;
    games: Game[];
    platforms: Platform[];
};

export default Post;