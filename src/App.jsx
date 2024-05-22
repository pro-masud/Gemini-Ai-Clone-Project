import React from 'react';
import "./app.css";
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import ContentProvider from './contents/content';

const App = () => {
  return (
    <ContentProvider>
     <Sidebar /> 
     <Main />
    </ContentProvider>
  )
}

export default App
