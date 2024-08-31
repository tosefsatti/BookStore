import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from 'axios';

const Course = () => {

let navigate = useNavigate();
  const handleBack = () =>{
           navigate("/");
  }

  const [book, setBook] = useState([]);

  useEffect(() =>{
    const getBooks = async (req, res) =>{
         try{
          const res = await axios.get("http://localhost:4001/book/getbooks");
            console.log(res.data);
            setBook(res.data);
         } catch(error){
console.log(error);
         }
    }
    getBooks();
  },[])
  
 

  return (
    <>
   <Navbar/>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-32 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are Delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-6 md:mt-11">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            dolores ipsum soluta molestias praesentium, tenetur quaerat animi
            consequuntur architecto explicabo possimus quasi voluptatum
            reiciendis eaque sequi minima, consequatur sapiente maxime?
            Consequatur possimus necessitatibus et nesciunt. Animi ipsam maiores
            dicta officiis illum recusandae natus fugiat dolores quae? Animi
            veniam aspernatur eaque?
          </p>
          <button className="bg-pink-500 px-4 py-3 rounded-md mt-7 text-white hover:bg-pink-600" onClick={handleBack}>
            Back
          </button>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {
            book.map((item) => (
              <div key={item.id}>
              <Cards key={item.id} name={item.name} price={item.price} title={item.title} image={item.image} category={item.category}/>
             </div>
            ))
          }
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Course;
