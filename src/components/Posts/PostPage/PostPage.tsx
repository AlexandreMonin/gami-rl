"use client"
import {JSX, useEffect, useState} from "react";
import PostList from "@/components/Posts/PostList/PostList";
import {User} from "next-auth";
import SearchBar from "@/components/Input/SearchBar/SearchBar";
import Post from "@/type/Post/Post";
import Loader from "@/components/Loader/Loader";
import style from "./style.module.css";

type PostPageProps = {
    user: User | undefined;
}

export default function PostPage({user}: PostPageProps): JSX.Element {
    const [search, setSearch] = useState<string>("");
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <div>
            <div className={style.searchDiv}>
                <div className={style.searchElement}>
                    <SearchBar value={search} setValue={setSearch} apiRoute="/api/posts/search"
                               apiRouteEmpty="/api/posts"
                               setResponseData={setPosts} setLoading={setIsLoading}/>
                </div>
            </div>
            {
                isLoading ? (
                    <Loader/>
                ) : (
                    <PostList user={user} posts={posts}/>
                )
            }
        </div>
    )
}