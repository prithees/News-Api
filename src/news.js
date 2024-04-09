import React, { useState, useEffect, useCallback } from "react";
import './news.css';

function News() {
    const [news, newsbetween] = useState("");
    const [Url, urllink] = useState("");
    const [count, setcount] = useState(0);

    useEffect(() => {
        const URL = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6aa7a46cb63b4b88a3aa9b1a0a98834b`
        const currentnews = async () => {
            const response = await fetch(URL);
            const live = await response.json();
            newsbetween(live.articles[count].title);
            urllink(live.articles[count].url);
        }

        currentnews();

    }, [count]);

    const increase = useCallback(() => {
        setcount(count + 1);
    }, [count]);

    return (<div className="noone">
        <h className="main">News : {count+1}  " {news} "<br /></h>
        <a className="expand" href={Url} target="_blank" rel="noreferrer" onClick={increase}><b>Expand</b></a>
        <h1>Click Expand to read the next news.</h1>
    </div>)

}
export default News;