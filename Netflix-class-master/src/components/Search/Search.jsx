import axios from "../../api/axios";
import requests from "../../api/requests";
import { useState } from "react";
import "./Search.css"
import { useSearch } from "../../context/SearchContext";
function Search() {
    // const [query,setQuery] = useState("");
    // const [results,setResults] = useState([]);
    // const [flag,setFlag] = useState(false)
    const {search, query, flag, setQuery, setFlag, setResults} = useSearch();

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSearch = () => {
        if (query) {
            search();
        }
        // axios.get(`${requests.search}&query=${query}`).then((response) => {
        //     // console.log(response);
        //     setResults(response.data.results);
        //     setFlag(true)
        // })
    }

    const cancelSearch = () => {
        setFlag(false);
        setQuery("");
        setResults([]);
    }

    return(
        <div className="search_form">
            {/* <div> */}
                <input 
                    className="search_input"
                    type="text"
                    placeholder="Search movies"
                    value={query}
                    onChange={handleChange}
                />
            {/* </div> */}
            {/* <div> */}
                {flag && <button className="cancel_button" onClick={cancelSearch}>X</button>}
                {!flag && <button className="search_button" onClick={handleSearch}>Search</button>}
            {/* </div> */}
        </div>
    )
}
export default Search;