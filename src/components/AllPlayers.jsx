import { fetchPlayers, deletePlayer } from "../API/index";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState({ search: "", results: [] });
    const navigate = useNavigate();

    useEffect(() => {
        async function FetchAllPlayers() {
            try{
                const data = await fetchPlayers();
                return setPlayers(data);
            } catch (error) {
                console.log("There is a problem");
            }
        }
        FetchAllPlayers();
    });

    function handleClick(playerId) {
        navigate(`/players/${playerId}`);
      }
    
      async function handleDelete(playerId) {
        await deletePlayer(playerId);
      }
    
      function upperCaseName(string) {
        const newName = string.charAt(0).toUpperCase() + string.slice(1);
        return newName;
      }
    
      function handleMapping(allData) {
        return allData.map((player) => (
          <div key={player.id} className="player">
            <div className="img-cont">
              <img src={player.imageUrl} className="player-img" />
            </div>
            <div className="content-cont">
              <div className="flex player-name-status">
                <h3>{upperCaseName(player.name)}</h3>
                <p>{upperCaseName(player.status)}</p>
              </div>
              <div className="flex player-buttons">
                <button
                  className="details-button"
                  onClick={() => {
                    handleClick(player.id);
                  }}
                >
                  Details
                </button>
                <button
                  className="delete-button"
                  onClick={() => {
                    handleDelete(player.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ));
      }

    return (
        <section>
            <SearchBar query={query} onSetQuery={setQuery} players = {players}/>
            {error && <p>{error}</p>}
            <div id="players-">
                {query.search === ""
                ? handleMapping(players)
                : handleMapping(query.results)}
            </div>
        </section>
    )
}