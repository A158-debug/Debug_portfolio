import React from 'react'
import './App.scss'
import { Navbar } from './components';
import {About, Header, Skills, Footer,Work } from './container/index'

const App = () => {
  return (
    <div className="app">
     <Navbar />
     <Header />
     <About />
     <Work />
     <Skills />
     <Footer />
    </div>
  )
}

export default App