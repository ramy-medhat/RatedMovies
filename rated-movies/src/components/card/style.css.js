import styled from 'styled-components/macro'

export const MovieCardContainer = styled.div`
    margin-bottom: 3.5em;
    display: grid;
    grid-template-columns:1fr;
    position: relative;
    height: 540px;
    overflow: hidden;
    border-radius: 4px;
    transition: 0.2s all ease-in-out;
    cursor:pointer;

    &:hover{
        transform: scale(1.1);
    }

    @media only screen 
    and (min-device-width: 667px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
      height:310px;
    }
  
    @media only screen 
    and (max-device-width: 560px) {
        height:490px
    }
`

export const MovieInfo = styled.div`
    background: #131517ed;
    color: #fff;
    text-align: center;
    padding:20px;
    border-radius: 6px;
    transition: 0.3s all ease;
    position:absolute;
    bottom:-600px;
    width: 100%;

    ${MovieCardContainer}:hover & {
        bottom:0px;
     }
`

export const MovieDetails = styled.div`
    display:inline-block;
`

export const MovieTitle = styled.h2`
    text-align:center;
    margin-bottom:0;
`


export const MoveRate = styled.p`
    text-align:center;
    margin-bottom:0;
    
    b{
        font-size:18px;    
    }
`

export const MovieDescription = styled.p`
    text-align: center;
    margin: 15px 0 0;

    @media only screen 
    and (min-device-width: 667px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
        display:none;
    }

`