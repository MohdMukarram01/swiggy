import { provider,auth } from '../Config/Firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { adUserData, removeUserData } from '../Utility/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { toggleLogin } from '../Utility/toogleSlice';

function Signin() {
    const navigation=useNavigate();
    const dispatch=useDispatch();
    async function handleAuth()
    {
        let data= await signInWithPopup(auth,provider);
        console.log(data)
        const userdata={
            name:data.user.displayName,
            photo: data.user.photoURL,
        }
        dispatch(adUserData(userdata))
        dispatch(toggleLogin())
        navigation("/")
    }

    async function handleLogout()
    {
        await signOut(auth);
        dispatch(removeUserData())
        dispatch(toggleLogin())
    }
     const Userdata=useSelector(state=>state.authSlice.userData)

  return (
    <div className='flex flex-col gap-2'>
        {
            !Userdata ? <button onClick={handleAuth} className="w-full flex h-[60px] gap-5 bg-orange-500 justify-center items-center">
            <img className="w-12 h-12 rounded-full" src="https://freelogopng.com/images/all_img/1657952641google-logo-png-image.png" alt="" />
            <p className="text-[20x]">Login With GOOGLE</p>
        </button> :  <button onClick={handleLogout} className="w-full flex h-[60px] gap-5 bg-orange-500 justify-center items-center">
            Logout
        </button>
        }
    </div>
  )
}

export default Signin;

//   <img className="w-14 h-14" src="https://freelogopng.com/images/all_img/1657952641google-logo-png-image.png" alt="" />
//    <p className="text-[20x]">Login With GOOGLE</p>
