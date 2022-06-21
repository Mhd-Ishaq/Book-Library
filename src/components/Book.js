import React from 'react'

const Book = (props) => {
  const {image, title, author} = props.book;
  return (
    <article className='book'>
      <div className='book-img-container'>
      <img src={image} alt={title} className='book-img' />;
      </div>
      <h2 className='book-title'>{title}</h2>
      <h3 className='book-author'>{author}</h3>

    </article>
  )
}

export default Book