import PlayerCard from "@/components/PlayerCard/PlayerCard"

const retrievePlayers = async () => {
    try {
        const apiUrl = process.env.APP_URL;
        const res = await fetch(`${apiUrl}/api/users/players`, { cache: 'no-store' });
        console.log(res);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export default async function PlayerPage() {
    const players = await retrievePlayers();
    return (

        <div>
            {players.data.map((player: { id: number }) => (
                // <span key={player.id}>{player.id}</span>
                <PlayerCard key={player.id} id={player.id} aria-label="Player"/>
            ))}
        </div>
    );
}