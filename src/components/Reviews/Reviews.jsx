import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from 'Api';

import { Item } from "./Reviews.styled";

const Reviews = () => {
    const {movieId} = useParams();
    const [results, setResults] = useState([]);
    useEffect(()=>{

        fetchReviews(movieId)
        .then(results => setResults(results));

    }, [movieId])

    return(
        <ul>
            {results.map(({id, author, content}) => <Item key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
            </Item>)}
        </ul>
    )
}
export default Reviews;