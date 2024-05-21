import styles from './style.module.css';
import Post from "@/type/Post/Post";

const PostDetails = ({ params } : {params: Post }) => {
    console.log(params);
    return (
        <main className={styles.background}>
            <a className={styles.spanContainer} href={`/post`}><span>Toutes les questions</span></a>
            <div className={styles.card}>
                <h2>{params.title}</h2> 
                {params.content && <p>{params.content}</p>}
                {/* <div>
                    <h3>Steps:</h3>
                    {params.steps.map((step: Step, index: number) => (
                    <div key={index}>
                        <h4>Step {index + 1}</h4>
                        <p>{step.instructions}</p>
                        <ul>
                        {step.ingredients.map((ingredient: Ingredient, i: number) => (
                            <li key={i}>
                            {ingredient.name} - {ingredient.quantity}
                            </li>
                        ))}
                        </ul>
                    </div>
                    ))}
                </div> */}
            </div>
        </main>
    );
} 

export default PostDetails;