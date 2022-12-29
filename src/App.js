import NavBar from './components/header/navBar';
import NavLinks from './components/header/navLinks';
import Header from './components/header/header';
import Main from './components/pages/main';
import Invest from './components/pages/invest';
import Us from './components/pages/us';
import Footer from './components/footer/footer';
import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import logo from './images/turkiye-logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import './style/main.sass';

class  App extends Component {

  render() { 
    return (
      <React.Fragment>
        <div className='pt-3 mt-3 text-center'>
            <a href="https://goturkiye.com/" target="_blank"><img className="logo img-fluid" src={logo} /></a>
        </div>
        <Header />
        <NavLinks />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/us" element={<Us />} />
            <Route path="/invest" element={<Invest />} />
        </Routes>
        <Footer />
      </React.Fragment>
    );
  }
}


export default App;
