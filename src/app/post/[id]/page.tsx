// components/RecipePage.tsx
import PostDetails from '@/components/Posts/PostDetails/PostDetails';
import React from 'react';

const retrievePosts = async (id : string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const response = await res.json();
      return response.data;
      
    } catch (error) {
      console.error(error);
      throw error;
    }
};

const RecipePage = async( { params } : {params: { id: string }}) => {
    const recipe = await retrievePosts(params.id);
    return (
        <PostDetails params={recipe}/>
    );
};

export default RecipePage;
