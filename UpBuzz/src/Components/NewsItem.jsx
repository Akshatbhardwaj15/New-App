import React from 'react'
import image from '../assets/card7.jpg'
const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 px-2" style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{height:"200px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News of the day is quite intereting and if it comes to Indian politics its pretty well written in the Arthsashtra by Great Philosopher and Teacher Chanakya."}</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>
  )
}

export default NewsItem
