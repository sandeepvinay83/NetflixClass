import { useSearch } from "../../context/SearchContext";
import "./SearchResults.css";

function SearchResults() {
    const base_url = "https://image.tmdb.org/t/p/original"
    const {results, flag, loading} = useSearch();
    return(
        <div className="search_results">
            {loading && <p>loading...</p>}
            {flag && results.map((movie)=>{
                return(
                    <div key={movie.id} className="movie_card">
                        <img 
                        className="movie_poster"
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                        />
                    </div>
                )
            })}
        </div>
    )
}
export default SearchResults;