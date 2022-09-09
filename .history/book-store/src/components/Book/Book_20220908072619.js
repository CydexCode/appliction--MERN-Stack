import { Button } from '@mui/material';
import React from 'react'

const Book = (props) => {
    const { name, author, description, price, image } = props.book;
  return (
    <div>
      <img  src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs {price}</h2>
      <Button>Update</Button>
      <Button>Delete</Button>

    </div>
  )
}

export default Book
