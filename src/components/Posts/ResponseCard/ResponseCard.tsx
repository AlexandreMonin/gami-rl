import Post from '@/type/Post/Post';
import styles from './style.module.css';

const ResponseCard: any = ({ params } : {params: Post }) => {
    return (
        <main className={styles.background}>
            <div className={styles.card}>
                <h2>{params.title} - {params.author.username}</h2>
                <p>{params.content}</p>
            </div>
        </main>
    );
} 

export default ResponseCard;