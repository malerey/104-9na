import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const App = () => {
  return (
    <div>

    {/* <Box sx={{width: 300}}>
        <Card sx={{m: 2}}>
        
          <CardContent>
            <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div" color="primary">
            be   • nev   • o   • lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              </Typography>
              <Typography variant="body2">
              a benevolent smile
            </Typography>
          </CardContent>
          
          <CardActions>
          <Button>Hola</Button>
            <Button variant="outlined">Hola</Button>
            <Button variant="contained">Hola</Button>
          </CardActions>
        </Card>

        </Box> */}

        <Box sx={{width: 300, height: 300}}>

          <Card>
          <CardMedia
            component="img"
            height="150"
            image="http://www.placekitten.com/200"
            alt="green iguana"
          />
      <CardContent>
        <Typography variant="h6">
          Our Changing Planet
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          by Kurt Wagner
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>

        <IconButton aria-label="delete">
          <DeleteIcon />
       </IconButton>

      </CardActions>

          </Card>
        </Box>
    </div>
  )
}


export default App;
