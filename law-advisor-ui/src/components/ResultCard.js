import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Box, 
    Card, 
    CardActions, 
    CardContent, 
    Button, 
    Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { elasticItemToSearchResult } from '../mappers/searchResultMapper';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

export default function ResultCard({responseItem}) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    let doc = elasticItemToSearchResult(responseItem)
    console.log(responseItem)

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                {doc.type}
                </Typography>
                <Typography variant="h5" component="h2">
                {doc.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {doc.court}
                </Typography>
                <Typography variant="body2" component="p">
                    {doc.laws.map(law => <span><em>{law}</em> {bull} </span>)}
                </Typography>
            </CardContent>
            <CardActions>
                <Link className="view-doc" to={doc.link}><Button variant="contained" color="primary" size="small">Виж повече</Button></Link>
            </CardActions>
        </Card>
      );
}