
import UpdateProfilePage from "@/components/UpdateProfilePage/UpdateProfilePage";

export default function UpdateProfile({params} : { params: {id:number}}){
    const { id } = params
    return (
        <div>
            <UpdateProfilePage id={id}/>
        </div>
    );
}
