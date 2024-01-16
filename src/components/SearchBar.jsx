export default function SearchBar({ query, onSetQuery, players }) {
    function handleChange(e) {
      const results = players.filter((player) => {
        if (e.target.value === "") return players;
        return player.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      onSetQuery({
        search: e.target.value,
        results: results,
      });
    }
  
    return (
      <div id="search-bar">
        <form>
          <input
            type="search"
            value={query.search}
            onChange={handleChange}
            placeholder="Search..."
          />
        </form>
      </div>
    );
  }