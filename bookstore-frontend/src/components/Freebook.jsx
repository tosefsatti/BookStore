import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

const Freebook = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },

          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const [freebooks, setFreebooks] = useState([]);

      useEffect(() =>{
        const getBooks = async (req, res) =>{
             try{
              const res = await axios.get("http://localhost:4001/book/getbooks");

              const filterData = res.data.filter((data) => data.category === "free");
                setFreebooks(filterData);
               
             } catch(error){
               console.log(error);
             }
        }
        getBooks();
      },[])

      

   
    
  return (
    
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
    <div>
        <h1 className='font-bold text-xl'>Free Offered Books!</h1>
        <p>
        We offer a wide selection of free books to read, providing endless opportunities for learning and enjoyment at no cost.</p>
    </div>
    <div>
    <Slider {...settings}>
     {freebooks.map((item) =>(
         <div key={item.name} >
        <Cards name={item.name} category={item.category} title={item.title} image={item.image} price={item.price}/>
        </div>
    )
     )} 
    </Slider>
    </div>
    </div>
    
  )
}

export default Freebook
