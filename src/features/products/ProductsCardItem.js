import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';


export default function ProductsCardItem(props) {
    console.log(props.imageUrl);
    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={"https://cdn.eczacisepeti.com/media/" + props.imageUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.compDesc}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.prodCategory} {" "} {props.prodBrand}
                        <p> {props.endDate}</p>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
);
}
