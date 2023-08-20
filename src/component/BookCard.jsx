import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Chip } from '@mui/material';
import { useAuthContext } from '../context/auth';
import { useCartContext } from '../context/cart';
import shared from '../utils/shared';
import { toast } from "react-toastify";

const BookCard = ({book}) => {
  const authContext = useAuthContext();
  const cartContext = useCartContext();

  const addToCart = (book) => {
    shared.addToCart(book, authContext.user.id).then((res) => {
      if (res.error) {
        toast.error(res.message);
      } else {
        toast.success(res.message);
        cartContext.updateCart();
      }
    });
  };
  
  return (
    <div>
    <Card sx={{width:"350px"}}>
      <CardMedia
        component="img"
        height="300"
        image={book.base64image}
        alt="Image"
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {book.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
        {book.description}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" style={{marginTop:"20px"}}>
        <Chip label={book.category} sx={{ backgroundColor: "#e0e8eb" }} />
          <Typography variant="h6" component="div" >
            {"₹ "+book.price}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" style={{marginTop:"20px"}}>
        <Button variant="contained"color="success" style={{width:"80%"}} onClick={() =>{addToCart(book)}}>
            Add to Cart
          </Button>
          </Box>
      </CardContent>
    </Card>
        </div>
  );
};

export default BookCard;





