import React, { Component } from 'react'
import Bike from './Bike'
import DisplayBike from './DisplayBike';


class Product extends Component {

    state = {
      products: [
        {name:'', 
         com:'',
        image:''
        }
    ],
      test: ""
       
  }
 
 renderProduct = Bike.map(product => <DisplayBike name={product.name} com={product.com} image={product.image}/>)

 addProduct = (event) => {
   this.setState({ test: 'https://www.decathlon.fr/media/840/8405298/big_9ef78f58-e0da-4416-8460-5d799be9cc66.jpg' })
 }
    
  render() {

    return (      

        <div>   
          {this.renderProduct}  
          <button onClick={ this.addProduct.bind(this)}>Ajouter</button>
          <img src={this.state.test} />
        </div>
        
    )
  }
}

export default Product;