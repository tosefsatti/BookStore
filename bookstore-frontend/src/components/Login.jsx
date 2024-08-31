import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('login Successfull!');
          document.getElementById("my_modal_3").close();
          setTimeout(() =>{
            window.location.reload();
          }, 1000)

        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg dark:text-black">Login</h3>
            <div className="space-y-2 mt-4 dark:text-black">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className=" w-80 border outline-none rounded-md px-4 py-2"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="space-y-2 mt-4 dark:text-black">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
                className=" w-80 border outline-none rounded-md px-4 py-2"
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around mt-5 items-center dark:text-black">
              <button
                type="submit"
                className="bg-pink-500 px-3 py-2 rounded-md text-white hover:bg-pink-700"
              >
                Login
              </button>
              <p>
                Not registered?
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
