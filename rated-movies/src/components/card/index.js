import React from 'react'
import {Card} from 'react-bootstrap'
import{
        MovieCardContainer, 
        MovieInfo, 
        MovieDetails, 
        MovieTitle, 
        MoveRate, 
        MovieDescription
    } from './style.css'

const MovieCard = ({title, description, poster, rate, vote})=>{

    return(
        <MovieCardContainer>
            <Card.Img variant="top" src={poster} style={{height:'100%'}}/>
            <MovieInfo>
                <MovieDetails>
                    <MovieTitle>{title}</MovieTitle>
                    <MoveRate><b>{rate}</b>/10</MoveRate>
                    <span>Vote Counts: {vote}</span>
                </MovieDetails>
                <MovieDescription>{description}</MovieDescription>
            </MovieInfo>
      </MovieCardContainer>
      
    )

}

export default MovieCard