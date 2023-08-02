"use client"
import { useRouter } from "next/router";
import { useEffect } from "react";
import {UserProvider, useUser } from '../utils/contexts/userContext'

const withAuth = (WrappedComponent)=> {
      const WrapperComponent =(props) => {
          const router = useRouter();
           const    { state } = useUser();

        //Retrieve the authorization code from state
        const authCode = localStorage.getItem('loggedIn') ;
                       
        useEffect(()=>{
            //redirect to login page if the user is not authenticated
            if(!authCode == true && router.pathname !== 'login'&& 'signup'){
                router.push('/login')
            }
        },[] );
        //render the wrapped component if the user is authenticated

        return authCode? <WrappedComponent {...props}/> : null;
      };
      return WrapperComponent;
}

export default withAuth;