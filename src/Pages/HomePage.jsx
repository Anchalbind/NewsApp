import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import NewsItem from "../Components/NewsItem";

export default function HomePage() {
  let [page,setPage] = useState(1)
  let [articles, setArticles] = useState([]);
  let [totalResults, setTotalResults] = useState(0);
  let [q, setQ] = useState("All");
  let [language, setLanguage] = useState("hi");
  let [searchParams] = useSearchParams();

  async function getAPIData(q, language) {
    setPage(page+1)
      let response = await fetch(
        `https://newsapi.org/v2/everything?q=${q}&sortBy=publishedAt&language=${language}&page=${page}&pageSize=24&apiKey=1a2e575779e74979b633b56ac549c75a`,
      );
      response = await response.json();
      if (response.status === "ok") {
        setArticles(articles.concat(response.articles));
      }
  }

  let fetchData = async()=>{
    {
      let response = await fetch(
        `https://newsapi.org/v2/everything?q=${q}&sortBy=publishedAt&language=${language}&page=1&pageSize=24&apiKey=1a2e575779e74979b633b56ac549c75a`,
      );
      response = await response.json();
      if (response.status === "ok") {
        setArticles(response.articles);
        setTotalResults(response.totalResults);
      }
    }
  }

  useEffect(() => {
    (() => {
      let q = searchParams?.get("q") ?? "All";
      let language = searchParams?.get("language") ?? "hi";
      setQ(q);
      setLanguage(language);
      getAPIData(q, language);
    })();
  }, [searchParams]);

  return (
    <div className="container-fluid my-3">
      <h5 className="text-center text-capitalize">{q} News Articles</h5>
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchData}
        hasMore={articles.length<totalResults}
        loader={<h4>Loading...</h4>}
      >
      <div className="row">
        {articles.map((item, index) => {
          return (
            <NewsItem
              key={index}
              source={item.source.name}
              title={item.title}
              description={item.description}
              url={item.url}
              pic={item.urlToImage}
              date={item.publishedAt}
            />
          );
        })}
      </div>
      </InfiniteScroll>
    </div>
  );
}
