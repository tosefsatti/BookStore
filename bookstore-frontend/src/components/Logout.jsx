import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = () => {

    const [authUser, setAuthUser] = useAuth();
//   console.log(authUser);

  const handleLogout = () =>{
    try{

        setAuthUser({
            ...authUser,
            user: null
        })
        localStorage.removeItem("Users");
        
        toast.success("Logout Successfully");
        setTimeout(() =>{
           
            window.location.reload();
          }, 1000)

    } catch(err){
        
        toast.error("Error" + err.message);
    }
  }

  return (
    <div>
      <button className='px-3 py-2 bg-red-600 text-white rounded-md cursor-pointer'
      onClick={handleLogout}
      >Logout</button>
    </div>
  )
}

export default Logout
