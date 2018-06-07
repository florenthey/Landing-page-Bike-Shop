import React, { Component } from 'react'
//import Bike from './Bike'
import DisplayBike from './DisplayBike';


class Product extends Component {

    state = {
      products: [
        {name: 'Fixie Hypster',
         com: 'Voyagez la barbe au vent', 
         image:'https://www.beastybike.com/12417-atmn_xlarge/fixie-6ku-bikes-beach-bum.jpg'},
    
        {name: 'Vélo Grand Voyageur',
         com: 'Le vélo de toute la famille', 
         image:'https://www.beastybike.com/14907-atmn_xlarge/velo-de-voyage-cinelli-hobootleg.jpg'},
    
         {name: 'Vélo de ville version. Femme',
         com: 'Élégant et pratique',
         image:'https://images.internetstores.de/products//551245/02/d3a429/Vermont_Saphire_7s_blau[500x500].jpg?forceSize=true&forceAspectRatio=true&useTrim=true&trimBorder=1.5&forceAlign=center'}
    ]
  }
 
 
 addProduct = (event) => {
 this.setState({products:[...this.state.products, { name: "Le célèbre Btwin", com:'robuste et facile à entretenir', image: 'https://www.decathlon.fr/media/840/8405298/big_9ef78f58-e0da-4416-8460-5d799be9cc66.jpg' }]}, ()=> console.log(this.state.products))
 }
    
  render() {
  
  const renderProduct = this.state.products.map(product => <DisplayBike name={product.name} com={product.com} image={product.image} key={product.name}/>)
  

    return (      
        <div>   
          {renderProduct}  
          <button onClick={ this.addProduct}>Ajouter</button>
          <img src={this.state.test} />
        </div>
        
    )
  }
}

export default Product;