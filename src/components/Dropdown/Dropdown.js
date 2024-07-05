import Search from '../Search/Search';
import './index.css';
import './mobile.css';

const Dropdown = ({ genres, selectedGenre, setSelectedGenre, setSearch, setSelectedPrice, selectedPrice, selectedSortOrder, setSelectedSortOrder, selectedFormat, setSelectedFormat }) => {   
  return (
    <div className="select-box">
      <Search setSearch={setSearch}/>
      <div className="custom-select">
        <select
          onChange={(e) => setSelectedGenre(e.target.value)}
          value={selectedGenre}
          className="select"
        >
          <option value="Genre">Genre</option>
          {
            genres.map((genre) => <option key={genre} value={genre}>{genre}</option>)
          }
        </select>
      </div>
      <div className="custom-select">
        <select className="select" value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
          <option value="Over 25$">All Prices</option>
          <option value="35">Under 35$</option>
          <option value="45">Under 45$</option>
          <option value="55">Under 55$</option>
        </select>
      </div>
      <div className="custom-select">
        <select className="select" value={selectedSortOrder} onChange={(e) => setSelectedSortOrder(e.target.value)}>
          <option value="Sort by">Sort by</option>
          <option value='lowToHigh'>Price, low to high</option>
          <option value='highToLow'>Price, high to low</option>
          <option value="alphabeticalA">Alphabetically, A-Z</option>
          <option value="alphabeticalB">Alphabetically, Z-A</option>
        </select>
      </div>
      <div className="custom-select">
        <select className="select" value={selectedFormat} onChange={(e) => setSelectedFormat(e.target.value)} >
          <option>Format</option>
          <option value="LP">LP</option>
          <option value="2LP">2LP</option>
          <option value="10'">10"</option>
          <option value="12'">12"</option>
        </select>
      </div>      
    </div>
  
  )
}

export default Dropdown;
