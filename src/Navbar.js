import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-center p-10 z-[100] w-full absolute pl-10'>
      <Link to='/'>

      </Link>
      <Link to='/login'>
            <button className='bg-red-600 px-3 py-2 ml-3 m-6 mt-0 rounded cursor-pointer text-white text-sm '>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-3 py-2 m-6 mt-0 rounded cursor-pointer text-white text-sm'>
              Sign Up
            </button>
          </Link>
    </div>
  );
};

export default Navbar;