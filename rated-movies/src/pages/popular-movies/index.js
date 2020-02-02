import React,{useState,useEffect} from 'react';
import MovieCard from '../../components/card';
import Search from '../../components/search';
import { Container, Row, Col } from 'react-bootstrap';
import {FilterButton, NoResult} from './style.css'

const Popular = () =>{
    const [popularMovie, setPopularMovie] = useState([]);
    const [sortedMovies, setSortedMovies] = useState([])
    const [searchValue, setSearchValue] = useState('');
    const [sortType, setSortType] = useState('asc')
    useEffect(() => {
      fetch("https://api.themoviedb.org/3/movie/popular?&Lnguage=en-US&api_key=e944d64e45bd1927514acc391b971f4d")
      .then(res=>{
        if(res.ok){
         return res.json()
        }
        else{
          throw new Error('something went wrong!')
        }
      })
      .then(res => {
        setPopularMovie(res.results) 
      })
      .catch(err=>console.log(err))
    },[]);

    useEffect(() => {
      let filteredList = popularMovie.filter(movie =>movie.title.toLowerCase().includes(searchValue))
      setSortedMovies(filteredList)
    }, [searchValue, popularMovie]);
      

    const sortByRated = () => {
      const sortedList = [...popularMovie].sort((a, b) => {
        if (sortType === 'asc'){
          setSortType('des')
          return  (a.vote_average - b.vote_average);
        } else{
          setSortType('asc')
          return  (b.vote_average - a.vote_average);
        }
      });
      setSortedMovies(sortedList)
    }

    const randomRatingFunc = () =>{
      [...popularMovie].map((movie)=>{
        setSortType('asc')
         return movie.vote_average=Math.round(Math.random() * 10)
      });
      setSortedMovies(popularMovie);
   
    }

    return(
        <Container style={{padding: '20px'}}>
            <Col xs={12}>
             <h1 style={{marginBottom: '50px'}}>Popular Movies</h1>
           </Col>
          <Row>
            <Col md={6} xs={12}>
              <Search
               searchValue={searchValue}
               setSearchValue={setSearchValue}/>
            </Col>
            <Col md={3} xs={12}>
              <FilterButton variant="primary" onClick={sortByRated} style={{width:'100%'}}>
                {sortType==='asc'?'Sort ascending':'Sort descending'}
              </FilterButton>
            </Col>
            <Col md={3} xs={12}>
              <FilterButton variant="primary" onClick={randomRatingFunc} style={{width:'100%'}}>Random rating</FilterButton>
            </Col>
          </Row>
          <Row style={{marginTop:'100px'}}>
              { sortedMovies.length > 0 ? 
                sortedMovies.map((movie,index)=>{
                return(
                  <Col xs={12} sm={6} md={4} key={index}>
                     <MovieCard title={movie.title} description={movie.overview} rate={movie.vote_average} poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`} vote={movie.vote_count} />
                  </Col>
                )
              })
            :<NoResult>No search result...!</NoResult>
            }
          </Row>
        </Container>
    )
}

export default Popular