import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOnePlayer } from "../API/index.js";

export default function OnePlayer() {
  const [onePlayer, setOnePlayer] = useState([]);
  const [error, setError] = useState(null);

  const params = useParams();
  console.log(`params: `, params, params.id);

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const player = await fetchOnePlayer(Number(params.id));
        console.log(player);
        return setOnePlayer(player);
      } catch (error) {
        setError(error);
      }
    }
    fetchPlayer();
  }, [params.id]);

  return (
    <>
      {error && <p>{error}</p>}
      {onePlayer === [] ? <p>Error loading data</p> : ""}
      {onePlayer && (
        <section id="single-player">
          <div className="single-player-img-cont">
            <img className="single-player-img" src={onePlayer.imageUrl} />
          </div>
          <div className="single-player-data">
            <h1>{onePlayer.name}</h1>
            <h2>{onePlayer.breed}</h2>
            <h2>Currently on-{onePlayer.status}</h2>
            <h2>Team: {onePlayer.team && onePlayer.team.name}</h2>
          </div>
        </section>
      )}
    </>
  );
}