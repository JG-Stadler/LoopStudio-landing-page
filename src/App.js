import React from 'react';
import './App.css';
import './mobileStyle.css'
import Header from './components/header.jsx';
import VRsection from './components/interactiveVR';
import OurCreations from './components/ourCreations';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="App">
        <Header/>
        <VRsection/>
        <OurCreations/>
        <Footer/>
    </div>
  );
}