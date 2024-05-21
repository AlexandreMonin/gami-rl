
import ProfilePage from "@/components/ProfilePage/ProfilePage";

export default function Profile({params} : { params: {id:number}}){
    const { id } = params
    return (
        <div>
            <ProfilePage id={id}/>
        </div>
    );
}
