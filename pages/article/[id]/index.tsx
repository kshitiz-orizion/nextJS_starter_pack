import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from '../../../components/Layout';

interface EachArticleProps {
  params: { id: string };
}

const EachArticle: React.FC<EachArticleProps> = ({ params }) => {
  const ArticleContext = useContext(AppContext);
  const [eachArticle, setArticle] = useState({
    id: '',
    userId: '',
    body: '',
    title: '',
  });
  useEffect(() => {
    const filteredArticle = ArticleContext.articles.filter(
      (article: { id: number; userId: number; body: string; title: string }) =>
        article.id === Number(params.id),
    );

    if (filteredArticle[0]) {
      setArticle(filteredArticle[0]);
    } else {
      getData();
    }
  }, []);
  const getData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const articles = await res.json();
    setArticle({ ...articles });
  };
  return (
    <div className="justify-items-center flex px-20 w-full flex-col">
      <div>ID: {eachArticle.id}</div>
      <div>Title: {eachArticle.title}</div>
      <div>Body: {eachArticle.body}</div>
    </div>
  );
};

export function getServerSideProps(context: any) {
  return {
    props: { params: context.params },
  };
}

export default EachArticle;
