import React, { useEffect, useState } from 'react'
import { images } from './Images'
import './App.css'
import Counter from './Counter';

const App = () => {
 const [current, setCurrent] = useState(0);
 const [pause, setPause] = useState(false);

 useEffect(()=>{
  let interval = setInterval(()=>{
    if(!pause){
      nextSlide();
    }else{
      clearInterval(interval);
    }
  }, 3000)
  return () => clearInterval(interval);
 });

 const nextSlide=() =>{
  setCurrent(current === images.length-1 ? 0 : current+1);
 }
 const prevSlide=() =>{
  setCurrent(current === 0 ? images.length-1 : current-1);
 }
 const pauseSlide=() =>{
  setPause(!pause);
 }
 const goToSlide = (slideNo)=>{
  setCurrent(slideNo);
 }
  return (
    <>
      <div className="wrapper" onMouseEnter={pauseSlide} onMouseLeave={pauseSlide}>
        <h1 className='main_heading'>React Carousel Without Plugin</h1>
        {images.map((items, index)=>
              <div className={current === index ? "carousel-items active" : "carousel-items"} key={index}>
                <img className="slide" src={items.img_src} alt={items.title}/>
              </div>
        )}
        <div className='btn-wrapper'>
          <button className='prev' onClick={prevSlide}>&#10094;</button>
          <button className='next' onClick={nextSlide}>&#10095;</button>
        </div>
        <div className='page-number'>
          {images.map((items, index)=>
          <>
            {/* <span className = {current === index ? "dot active" : "dot"} key={index} onClick={()=> goToSlide(index)}>{index+1}/{images.length}</span> */}
            <img className={current === index ? "sm-slide active" : "sm-slide"} src={items.img_src} alt={items.title} key={index} onClick={()=> goToSlide(index)} title={`slide-${index+1}`}/>
          </>
          )}
        </div>
      </div>
    </>
  )
}

export default App