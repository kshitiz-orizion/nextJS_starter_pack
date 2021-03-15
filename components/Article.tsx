import React from 'react';
import Link from 'next/link';

interface ArticleProps {
  article: { id: number; userId: number; body: string; title: string };
}
const Article: React.FC<ArticleProps> = ({ article }) => (
  <div className="flex items-center justify-items-center border border-gray-800 p-5 m-1">
    <Link href={`/article/${article.id}`}>{article.title}</Link>
  </div>
);

export default Article;
