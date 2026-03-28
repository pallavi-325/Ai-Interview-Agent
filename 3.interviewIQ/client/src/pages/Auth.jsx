import React, { useState } from 'react'
import { BsRobot } from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";
import { motion } from "motion/react"
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import axios from 'axios';
import { ServerUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';

function messageForFirebaseAuthError(error) {
    const code = error?.code
    if (code === "auth/invalid-continue-uri") {
        return "Firebase does not allow this site URL yet. Open Firebase Console → Authentication → Settings → Authorized domains and add the domain you use in the browser (localhost and 127.0.0.1 are different—add both if you switch). If you open the app via a LAN IP (e.g. 192.168.x.x), add that domain too."
    }
    if (code === "auth/unauthorized-domain") {
        return "This domain is not authorized for Firebase Auth. Add it under Authentication → Settings → Authorized domains."
    }
    return null
}

function Auth({isModel = false}) {
    const dispatch = useDispatch()
    const [authError, setAuthError] = useState(null)

    const handleGoogleAuth = async () => {
        setAuthError(null)
        try {
            const response = await signInWithPopup(auth, provider)
            const User = response.user
            const name = User.displayName
            const email = User.email
            if (!email) {
                setAuthError("Google did not return an email. Try another account.")
                dispatch(setUserData(null))
                return
            }
            const result = await axios.post(
                ServerUrl + "/api/auth/google",
                { name, email },
                { withCredentials: true }
            )
            dispatch(setUserData(result.data))
        } catch (error) {
            const firebaseHint = messageForFirebaseAuthError(error)
            const msg =
                firebaseHint ||
                error?.response?.data?.message ||
                error?.code ||
                error?.message ||
                "Sign-in failed"
            console.error(error)
            setAuthError(typeof msg === "string" ? msg : "Sign-in failed")
            dispatch(setUserData(null))
        }
    }
  return (
    <div className={`
      w-full 
      ${isModel ? "py-4" : "min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20"}
    `}>
        <motion.div 
        initial={{opacity:0 , y:-40}} 
        animate={{opacity:1 , y:0}} 
        transition={{duration:1.05}}
        className={`
        w-full 
        ${isModel ? "max-w-md p-8 rounded-3xl" : "max-w-lg p-12 rounded-[32px]"}
        bg-white shadow-2xl border border-gray-200
      `}>
            <div className='flex items-center justify-center gap-3 mb-6'>
                <div className='bg-black text-white p-2 rounded-lg'>
                    <BsRobot size={18}/>

                </div>
                <h2 className='font-semibold text-lg'>InterviewIQ.AI</h2>
            </div>

            <h1 className='text-2xl md:text-3xl font-semibold text-center leading-snug mb-4'>
                Continue with
                <span className='bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2'>
                    <IoSparkles size={16}/>
                    AI Smart Interview

                </span>
            </h1>

            <p className='text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8'>
                Sign in to start AI-powered mock interviews,
        track your progress, and unlock detailed performance insights.
            </p>


            {authError && (
                <p className="text-red-600 text-sm text-center mb-4" role="alert">
                    {authError}
                </p>
            )}

            <motion.button 
            onClick={handleGoogleAuth}
            whileHover={{opacity:0.9 , scale:1.03}}
            whileTap={{opacity:1 , scale:0.98}}
            className='w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow-md '>
                <FcGoogle size={20}/>
                Continue with Google

   
            </motion.button>
        </motion.div>

      
    </div>
  )
}

export default Auth
