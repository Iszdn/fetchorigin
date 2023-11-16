import React from 'react'
import "./index.css"

function Card({image,title,price,taste}) {
  return (

    <div className="cards">

    <div className='card'>
<div className='image-roshen'>
    <img src={image} alt="" />
</div>
<h2>{title}</h2>
<p>{price}</p>
<p>{taste}</p>
    </div>
    </div>
  )
}

export default Card