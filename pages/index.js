import React, { useEffect, useState, useContext } from 'react';
import ArticleList from '../components/ArticleList';
import { AppContext } from '../components/Layout';

export default function Home() {
  const [data, setData] = useState([]);
  const ArticleContext = useContext(AppContext);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    if (ArticleContext.articles.length === 0) {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
      const articles = await res.json();
      setData([...articles]);
      ArticleContext.setArticles([...articles]);
    } else {
      setData([...ArticleContext.articles]);
    }
  };
  return (
    <div className="px-20 flex items-center w-full ">
      <ArticleList articles={data} />
    </div>
  );
}
