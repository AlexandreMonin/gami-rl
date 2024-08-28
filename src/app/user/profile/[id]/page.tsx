
import ProfilePage from "@/components/ProfilePage/ProfilePage";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Gami-RL - Profil",
    description: "Gami-RL profile",
};


export default function Profile({params} : { params: {id:number}}){
    const { id } = params
    return (
        <div>
            <ProfilePage id={id}/>
        </div>
    );
}
