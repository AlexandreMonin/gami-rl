import Game from "../Game/Game";
import Platform from "../Platform/Platform";
import User from "../User/User";

type Post = {
    id: number;
    title: string;
    content: string;
    author: User;
    isPost: boolean;
    games: Game[];
    platforms: Platform[];
    replies: Post[];
    votes: number;
};

export default Post;