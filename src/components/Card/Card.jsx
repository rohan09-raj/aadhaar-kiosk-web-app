import React from 'react'

const Card = (title, image) => {
  return (
    <>
      <img src={image} alt="" />
      <h2>{title}</h2>
    </>
  )
}

export default Card
