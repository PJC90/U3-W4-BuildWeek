import { useDispatch, useSelector } from "react-redux";
// import { setSearchResults } from "../Redux/actions/searchActions";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

const JobsSearchQuery = function () {

    const dispatch = useDispatch();
    // const searchResults = useSelector((state) => state.search.results);
    const searchValue = useSelector((state) => state.search.searchValue);
const [searchRes, setSearchRes] =useState([])
    const handleSearch = async (query) => {
      try {
        const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`);
        if (response.ok) {
          const data = await response.json();
          
        //   dispatch(setSearchResults(data));
        setSearchRes(data)
          console.log("dati", data)
        } else {
          throw new Error('Errore nella fetch');
        }
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
        console.log("searchValue",searchValue)
        if (searchValue) {
            handleSearch(searchValue);
            console.log("ciao")
        }
    }, [searchValue]);

    // console.log("searchResults", searchResults);


return (
    <div>
       <h2>Risultati della ricerca:</h2>
        {searchRes.length > 0 ? (
            <ListGroup>
                {searchRes.map((job) => (
                    <ListGroup.Item key={job._id}>
                        <h4>{job.title}</h4>
                        <p>{job.company_name}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        ) : (
            <p>Sto cercando...</p>
        )}
    </div>
)
}

export  default JobsSearchQuery