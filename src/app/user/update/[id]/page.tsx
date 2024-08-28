
import UpdateProfilePage from "@/components/UpdateProfilePage/UpdateProfilePage";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Gami-RL - Modifier mon profil",
    description: "Gami-RL update",
};

export default function UpdateProfile({params} : { params: {id:number}}){
    const { id } = params
    return (
        <div>
            <UpdateProfilePage id={id}/>
        </div>
    );
}
