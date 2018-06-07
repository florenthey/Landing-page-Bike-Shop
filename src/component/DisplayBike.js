import React from 'react'


const DisplayBike = (props) => {

    return(

        <div>
             
            <div className="card">
                <img className="card-img-top" 
                     src={props.image} 
                     alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.com}</p>
                <a href="#" className="btn btn-primary">Coming Soon</a>
            </div>
            </div>

          
        </div>
    )
}



export default DisplayBike;