"use client"
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent)=> {
      const WrapperComponent =(props) => {
        const router = useRouter();

        //Retrieve the authorization code from local storage
        const authCode = localStorage.getItems('authCode');
                       memor
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