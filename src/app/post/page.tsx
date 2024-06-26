import PostList from "@/components/Posts/PostList/PostList";
import type {Metadata} from "next";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export const metadata: Metadata = {
    title: "Gami-RL - Forum",
    description: "Gami-RL posts",
};

export const dynamic = 'force-dynamic';
export default async function PostIndex() {
    const session: Session | null = await getServerSession(authOptions);
    return (
        <PostList user={session?.user}/>
    );
};
