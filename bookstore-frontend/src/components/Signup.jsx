import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Login from "./Login";
import toast from "react-hot-toast";

const Signup = () => {


  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo={
         fullname: data.fullname,
         email: data.email,
         password: data.password,
    }

  await  axios.post("http://localhost:4001/user/signup", userInfo).
    then((res) =>{
      console.log(res.data);
      if(res.data){
       toast.success("Signup Successfull")
       navigate("/");
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    }).catch((err) =>{
     if(err.response){
      console.log(err);
      
      toast.error("Error: " + err.response.data.message);
     }
    }
  )
    
  }

  return (
    <div className="flex items-center justify-center  min-h-screen ">
      <div className="w-[90%] md:w-[600px] border px-6 rounded-md py-4 relative dark:bg-white">
      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
        >
          ✕
        </Link>

        
          <h3 className="font-bold text-lg dark:text-black">Signup</h3>
          <div className="space-y-2 mt-4 dark:text-black">
            <label>Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("fullname", { required: true })}
              className=" w-full md:w-80 border outline-none rounded-md px-4 py-2"  required
            />
            <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
          </div>
          <div className="space-y-2 mt-4 dark:text-black">
            <label>Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full md:w-80 border outline-none rounded-md px-4 py-2" 
            />
            <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
          </div>
          <div className="space-y-2 mt-4 dark:text-black">
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="w-full md:w-80 border outline-none rounded-md px-4 py-2" 
            />
            <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
          </div>
          <div className="flex justify-between md:justify-around mt-5 items-center dark:text-black">
            <button
              type="submit"
              className="bg-pink-500 px-3 py-2 rounded-md text-white hover:bg-pink-700"
            >
              Signup
            </button>
            <div className="flex items-center">
              <p className="md:mr-1 text-sm ml-9">Already have an account?</p>
              <a className="text-blue-500 underline cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</a>
              <Login/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
