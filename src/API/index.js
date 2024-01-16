const cohortName = "2308-FTB-ET-WEB-PT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
const PLAYERS_API_URL = `${APIURL}/players`;

export async function fetchPlayers() {
    try{
        const res = await fetch(PLAYERS_API_URL);
        const data = await res.json();
        return data.data.players;
    } catch (error) {
        console.error("There is a problem");
    }
    console.log("epic! it works!")
}
fetchPlayers();

export async function fetchOnePlayer(playerId) {
    try{
        const res = await fetch(`${PLAYERS_API_URL}/${playerId}`);
        const data = await res.json();
        return data.data.player;
    } catch (error) {
        console.error("There is a problem");
    }
}

export async function addNewPlayer(name, status, breed, imageUrl, teamId) {
    try{
        const res = await fetch(PLAYERS_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: `${name}`,
                status: `${status}`,
                breed: `${breed}`,
                imageUrl: `${imageUrl}`,
                teamId: `${teamId}`,
            }),
        });
        console.log("Status is: ", res.status); 
        const result = await res.json();
        console.log(result);
        } catch (eror) {
            console.error("There is a problem");
        }
}

export async function deletePlayer(playerId) {
    try{
        const res = await fetch(`${PLAYERS_API_URL}/${playerId}`, {
            method: "DELETE",
        });
        const result = await res.json();
        console.log(result);
    } catch (error) {
        console.error("There is a problem");
    }
}