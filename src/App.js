import React from 'react';
import Home from './pages/Home';
import './App.scss';

const menus = [
  {path : '/', name : 'Home'},
  {path : '/about', name : 'About'},
  {path : '/products', name : 'Products'},
  {path : '/location', name : 'Location'},
  {path : '/sitemap', name : 'Sitemap'},
]

const App = () => {
  return (
    <>
      <Home menus={menus} />
    </>
  )
}

export default App;