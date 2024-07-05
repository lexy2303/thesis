import './index.css';

const Search = ({ setSearch }) => {
  return (
    <div className="search-box">
      <input
        className="search"
        type="text"
        id="artistSearch"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
    />
    </div>
  )
}

export default Search;
