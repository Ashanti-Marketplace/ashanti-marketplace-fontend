"use client"
import { useRouter } from "next/router";
import { useEffect } from "react";
import {useUser } from '../utils/contexts/userContext'

const withAuth = (WrappedComponent)=> {
      const WrapperComponent =(props) => {
          const router = useRouter();
              //{ state } = useUser();

        //Retrieve the authorization code from state
        const authCode = state.getItem('isLoggedIn');
                       
        useEffect(()=>{
            //redirect to login page if the user is not authenticated
            if(!authCode && router.pathname !== 'login'&& 'signup'){
                router.push('/login')
            }
        },[] );
        //render the wrapped component if the user is authenticated

        return authCode? <WrappedComponent {...props}/> : null;
      };
      return WrapperComponent;
}

export default withAuth;