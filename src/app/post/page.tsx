import PostList from "@/components/Posts/PostList/PostList";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Gami-RL - Forum",
    description: "Gami-RL posts",
};

export const dynamic = 'force-dynamic';
export default function PostIndex() {
    return (
        <PostList/>
    );
};
