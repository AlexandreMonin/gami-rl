// import {Player, Step} from "@prisma/client";
import axios from "axios";

export async function GetPlayerById(id: number): Promise<{ data : {

        // ingredients: RecipeIngredient[];
        // steps: (Step & { ingredients: [{ quantity: string; name: string; id: number }] })[]
        id: number;
        name: String;
    }}> {

    const apiUrl = process.env.APP_URL;
    try {
        const res = await fetch(`${apiUrl}/api/users/${id}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch player with ID ${id}: ${res.statusText}`);
        }
        return res.json();
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export default async function PlayerCard({id}: { id: number }) {

    const playerId = await GetPlayerById(id);
    const player = playerId.data;
    return (
            <div>
                <div>
                    <span>
                        {player.email}
                        {player.id}
                        {player.name}
                    </span>
                    <span>
                        {/*{player.description}*/}
                    </span>
                </div>
            </div>
    )
}