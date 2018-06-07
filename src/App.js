import React, { Component } from 'react'
import './style/App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Product from './component/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Product/>
        <Footer/>
      </div>
    );
  }
}

export default App;
