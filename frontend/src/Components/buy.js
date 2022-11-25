import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./style.css";


export const Buy = () => {
  return (
    <>
    <div style={{paddingTop:"70px"}}>
    <h1 className="buyheading">Available Books</h1></div>
    <Grid container spacing ={2}>
      <Grid item xs={3} >
     
      <Card sx={{ maxWidth: 345, marginTop:"70px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Book
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Book1
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Buy</Button>
        <Button size="small"><FavoriteBorderIcon/></Button>
      </CardActions>
    </Card>
     </Grid>
     <Grid item xs={3}>
     
     <Card sx={{ maxWidth: 345, marginTop:"70px"}}>
     <CardMedia
       component="img"
       alt="green iguana"
       height="140"
       image="/static/images/cards/contemplative-reptile.jpg"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         Book
       </Typography>
       <Typography variant="body2" color="text.secondary">
         Book2
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="large">Buy</Button>
       <Button size="small"><FavoriteBorderIcon/></Button>
     </CardActions>
   </Card>
    </Grid>   <Grid item xs={3}>
     
     <Card sx={{ maxWidth: 345, marginTop:"70px"}}>
     <CardMedia
       component="img"
       alt="green iguana"
       height="140"
       image="/static/images/cards/contemplative-reptile.jpg"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         Book
       </Typography>
       <Typography variant="body2" color="text.secondary">
         Book3
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="large">Buy</Button>
       <Button size="small"><FavoriteBorderIcon/></Button>
     </CardActions>
   </Card>
    </Grid>   <Grid item xs={3}>
     
     <Card sx={{ maxWidth: 345, marginTop:"70px"}}>
     <CardMedia
       component="img"
       alt="green iguana"
       height="140"
       image="/static/images/cards/contemplative-reptile.jpg"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         Book
       </Typography>
       <Typography variant="body2" color="text.secondary">
         Book4
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="large">Buy</Button>
       <Button size="small"><FavoriteBorderIcon/></Button>
     </CardActions>
   </Card>
    </Grid>
    
    </Grid>
    </>
  );
}

// export default Buy;
