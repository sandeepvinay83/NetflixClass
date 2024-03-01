import axios from "../api/axios";
import requests from "../api/requests";
import { useState, createContext } from "react";
import { useContext } from "react";
const SearchContext = createContext();

export const useSearch = () => {
    return useContext(SearchContext);
}

export const SearchProvider = ({children}) => {
    const [query,setQuery] = useState("");
    const [results,setResults] = useState([]);
    const [flag,setFlag] = useState(false)
    const [loading,setLoading] = useState(true)
    const search = () => {
        axios.get(`${requests.search}&query=${query}`).then((response) => {
            // console.log(response);
            setResults(response.data.results);
            setFlag(true);
            setLoading(false);
        })
    }

    return(
        <SearchContext.Provider value={{query,results,loading,flag,search,setQuery,setResults,setFlag,setLoading}}>
            {children}
        </SearchContext.Provider>
    )
}
