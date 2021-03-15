import React from 'react';
import Article from './Article';

interface ArticleListProps {
  articles: [];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => (
  <div>
    {articles.map((article: { id: number; userId: number; body: string; title: string }) => (
      <div key={article.id}>
        <Article article={article} />
      </div>
    ))}
  </div>
);

export default ArticleList;
