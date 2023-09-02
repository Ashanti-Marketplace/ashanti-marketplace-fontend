


import { useEffect } from "react";
import { useRouter } from "next/router";
// import withAuth from "../utils/withAuth"
import { UserProvider,useUser } from '../utils/contexts/userContext';
   import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    const router = useRouter();
    // const state  = useUser();

  useEffect(()=>{
    
    const excludedPages = ['/', '/signup', '/login', '/onboarding', '/profileview'] //specify pages/routes that dont require auth

    const authCode = localStorage.getItem('loggedIn'); //retrieve auth code from local storage

    //redirect to login page if not authentivated and the route requires authentication
    if(!authCode == true && !excludedPages.includes(router.pathname)){
      alert('please login ')
      router.push('/login')
    }
  }, []);
  return(
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>  
  ) 
}