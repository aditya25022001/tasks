import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';

export const Show = ({ name, premiered, rating, image, summary, id }) => {

    const renderTitle = () => {
        return (
            <div className='d-flex' style={{ justifyContent: 'space-between', alignItems:'center' }}>
                <div>{name}</div>
                {rating?.average ? <div style={{ fontSize:'14px', alignItems:'center' }} className='d-flex'>
                    <div>{rating?.average}</div>
                    <StarIcon style={{ color:'gold', fontSize:'18px' }} />
                </div>
                :<div style={{ fontSize:'14px', alignItems:'center' }}>No rating</div>}
            </div>
        )
    }

    const renderSubTitle = () => {
        return (
            <div className='d-flex' style={{ justifyContent: 'space-between', alignItems:'center' }}>
                <div>{premiered}</div>
                <Link style={{ textDecoration:'none' }} to={`/show/${id}`}>
                    <Button style={{ fontSize:'12px' }} className='py-1 mt-1' color="secondary" variant='contained'>
                        More
                    </Button>
                </Link>
            </div>
        )
    }

    return (
        <Card className='show'>
            <CardHeader
                title={renderTitle()}
                subheader={renderSubTitle()}
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt={name}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">{summary.slice(0,300)}...</Typography>
            </CardContent>
        </Card>
    )
}
