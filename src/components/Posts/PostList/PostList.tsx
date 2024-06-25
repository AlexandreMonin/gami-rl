import Post from '@/type/Post/Post';
import PostCard from '@/components/Posts/PostCard/PostCard';
import styles from './style.module.css';

const retrievePosts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`);
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

const PostList = async () => {
  const posts = await retrievePosts();
  return (
    <main className={styles.background}>
      <div className={styles.container}>
        <ul>
          {posts.filter((post: Post) => post.isPost).map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default PostList;
