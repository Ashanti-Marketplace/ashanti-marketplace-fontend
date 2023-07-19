

// import '../styles/'
import { useEffect } from "react";
import { useRouter } from "next/router";
// import withAuth from "../utils/withAuth"
import { UserProvider } from '../utils/contexts/userContext';
//  import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(()=>{
    
    const excludedPages = ['/', '/signup', '/login', '/onboarding'] //specify pages/routes that dont require auth

    const authCode =localStorage.getItem('isLoggedIn'); //retrieve auth code from local storage

    //redirect to login page if not authentivated and the route requires authentication
    if(!authCode && !excludedPages.includes(router.pathname)){
      router.push('/login')
    }
  }, []);
  return(
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>  
  ) ;
}