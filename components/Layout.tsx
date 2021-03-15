import React, { createContext, useState } from 'react';

interface LayoutProps {
  children: HTMLElement;
}

const defaultState = {
  articles: [],
  setArticles: {},
};
export const AppContext = createContext(defaultState);
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const sharedState = {
    articles,
    setArticles,
  };
  return <AppContext.Provider value={{ ...sharedState }}> {children} </AppContext.Provider>;
};

export default Layout;
