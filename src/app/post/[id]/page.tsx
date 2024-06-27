import PostDetails from '@/components/Posts/PostDetails/PostDetails';
import React from 'react';
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Gami-RL - Question",
    description: "Gami-RL post",
};


const retrievePosts = async (id : string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`, {cache: "no-cache"});
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const response = await res.json();
      console.log("response :" + response);

      return response.data;
      
    } catch (error) {
      console.error(error);
      throw error;
    }
};

const PostPage = async( { params } : {params: { id: string }}) => {
    const post = await retrievePosts(params.id);
    const session: Session | null = await getServerSession(authOptions);
    return (
        <PostDetails params={post} user={session?.user}/>
    );
};

export default PostPage;
