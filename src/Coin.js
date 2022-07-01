import React from 'react'
import './Coin.css'

const Coin = ({image,name,price,volume,pricechange,marketcap}) => {
    return (
        <div className="coin-container" style={{ padding: '1rem' }}>
            <div className="coin-row">
                <div className="coin" >
                    <img src={image} alt="crypto"  />
                    <h1>{name}</h1>
                </div>
                <div className="coin-data" >
                    <p className="coin-price" style={{ marginRight: '2rem'}}> Price: Rs.{price} </p>
                   <p className="coin-volume" style={{ marginLeft: '4rem' }}>  Volume: Rs.{volume.toLocaleString()} </p>
                {      pricechange<0 ? ( <p className="coin-percent red">{pricechange.toFixed(3)}%</p> ):( <p className="coin-percent dark green">{pricechange.toFixed(3)}%</p> )  }
                <p className="coin-marketcap">  Mkt Cap: Rs.{marketcap.toLocaleString()}  </p>  </div> </div> </div>)
                }
export default Coin
