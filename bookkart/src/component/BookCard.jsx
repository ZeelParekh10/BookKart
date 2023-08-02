const BookCard = ({title,price,author}) => {
    
  return (
    <div>
        <h2>{title}</h2>
        <h4>Rs. {price}</h4>
        <h4>{author}</h4>
    </div>
  )
}

export default BookCard