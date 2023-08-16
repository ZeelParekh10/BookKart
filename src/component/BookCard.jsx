import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material';
// import { Box, Chip, Stack } from "@mui/material";


const BookCard = ({ name, price, description, category, img }) => {
  
  return (
    <div>
    <Card sx={{width:"350px"}}>
      <CardMedia
        component="img"
        height="300"
        image={img}
        alt="Image"
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
          {description}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" style={{marginTop:"20px"}}>
          <Button variant="contained"color="success">
            Add to Cart
          </Button>
          <Typography variant="h6" component="div">
            {"₹ "+price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
        </div>
  );
};

export default BookCard;








// import React from "react";
// import { ProductCard } from "react-ui-cards";
// import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button } from "@material-ui/core";

// const BookCard = () => {
//   return (
//     <div>
//       <Card sx={{ maxWidth: 50 }}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="200"
//             image="https://picsum.photos/200"
//             alt=""
//           />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Book 1
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//         </CardActionArea>
//         <CardActions>
//         <Button size="small" color="primary">
//           Add to Cart
//         </Button>
//       </CardActions>
//       </Card>
//     </div>
//   );
// };

// export default BookCard;
