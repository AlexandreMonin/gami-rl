import PostList from "@/components/Posts/PostList/PostList";
import type {Metadata} from "next";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import style from "./style.module.css";
import PostPage from "@/components/Posts/PostPage/PostPage";

export const metadata: Metadata = {
    title: "Gami-RL - Forum",
    description: "Gami-RL posts",
};

export const dynamic = 'force-dynamic';
export default async function PostIndex() {
    const session: Session | null = await getServerSession(authOptions);
    return (
        <div className={style.page}>
            <h1 className={style.title}>Une question ? On a la réponse !</h1>


            <PostPage user={session?.user}/>
        </div>
    );
};
