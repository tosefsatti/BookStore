import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
   <>
   <Navbar/>
  <div className='container flex w-full justify-center items-center  dark:text-white dark:bg-slate-600'>
    <div className='container border mt-24 mb-5 w-[90%] md:w-[50%] rounded-md py-4 px-5'>
      <h1 className='text-2xl font-bold text-center '>Contact us</h1>
       <form>
       <div className='mt-5'>
       <label htmlFor='name'>Name
          <br/>
         <div className='w-full px-2 py-2 border rounded-md dark:bg-slate-500'>
         <input type='text' className='outline-none w-full border-none dark:bg-slate-500  dark:text-white' placeholder='Your Name'/>
         </div>
        </label>
        
       </div>
       <div className='mt-5'>
       <label htmlFor='email'>Email
          <br/>
         <div className='w-full px-2 py-2 border rounded-md dark:bg-slate-500'>
         <input type='email' className='outline-none w-full border-none dark:bg-slate-500  dark:text-white' placeholder='Your Email'/>
         </div>
        </label>
        
       </div>
       <div className='mt-5'>
       <label htmlFor='textarea'>Message
          <br/>
         <div className='w-full px-2 py-2 border rounded-md dark:bg-slate-500'>
         <textarea className='outline-none border-none w-full dark:bg-slate-500  dark:text-white' placeholder='Type your message' rows="10"/>
         </div>
        </label>
        
       </div>
       <button className= 'btn bg-pink-600 text-white px-3  mt-5 rounded-md hover:bg-white hover:text-pink-600 hover:border-pink-700'>Submit</button>
        </form>         
    </div>

  </div>

   <Footer/>
   </>
  )
}

export default Contact;