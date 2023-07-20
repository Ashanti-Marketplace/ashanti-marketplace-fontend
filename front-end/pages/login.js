import Link from "next/link"

import { useRouter } from 'next/router';
import {  useUser } from '../utils/contexts/userContext';
import { useState } from "react";


export default function Login(){

  const { setUser,setLoggedIn } = useUser();
   
  const router = useRouter();
     // Handles the submit event on form submit.
    
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    try {
       // Get data from the form.
    const data = {
      email: event.target.email.value,
      pwd: event.target.password.value,
    }
 
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
 
    // API endpoint where we send form data.
    const endpoint = '/api/form'
 
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }
 
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)
 
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
    if (result.ok) {
      // If login is successful, store authentication status in local storage
      localStorage.setItem('isLoggedIn', true);
 
          // Store login status in local storage
    // localStorage.setItem('loggedIn', JSON.stringify(true));

    // Store login status in local storage
    // localStorage.setItem('loggedIn', JSON.stringify(true));



      // Redirect to authenticated route or show success message
      // Update the user state with server response
    // If login is successful, update the user state with server response
 setUser(result.user);

    // Update the login status state
    setLoggedIn(true);

    // Redirect to products page
    router.push('/products');
    } else {
      // Handle login error, show error message, etc.
      
  } 
  }catch (error) {
      console.log(error.response);
    }
 
   
  }
  

 return(
  
    <form onSubmit={handleSubmit}>
    
    <div className="overflow-hidden bg-[#090e0b] flex flex-row justify-between pl-16 w-full items-center"></div>
  <div className="self-end flex flex-col mb-[117px] gap-2 h-[690px]">
    <div className="text-5xl font-['Inter'] font-bold text-white self-start mb-6 w-32">
      Log0
    </div>
    <div className="whitespace-nowrap text-5xl font-['Ubuntu'] text-white self-start w-3/5">
      Welcome back!
    </div>
    <div className="whitespace-nowrap text-2xl font-['Inter'] text-white mb-6 mr-px">
      Let’s get you back on track as an artlover/artist
    </div>

    /* We pass the event to the handleSubmit function on submit.*/
    
      <div className="border-solid border-white flex flex-col justify-center mb-6 h-12 shrink-0 items-start border-t-0 border-b border-x-0">
        <input className="text-2xl font-['Inter'] font-medium text-white w-16" type="email" id="email" name="email"  placeholder="Email" required/>
      </div>
      
      <div className="border-solid border-white flex flex-col justify-center mb-8 h-12 shrink-0 items-start border-t-0 border-b border-x-0">
       <input className="text-2xl font-['Inter'] font-medium text-white w-[113px]"type="password" id="password" name="password" placeholder="Password" required/>
      </div>
      
      <div className="bg-[#b38af1] flex flex-col justify-center h-12 shrink-0 items-center mb-6 mr-px rounded-lg">
      <button className="text-2xl font-['Inter'] font-semibold text-white w-16"type="submit">Submit</button>
      </div>

      <div className="font-['Inter'] font-bold text-white self-center mb-3 w-5">
      Or
    </div>

    <div className="border-solid border-[#2f4736] flex flex-row justify-center gap-2 h-12 shrink-0 items-center mb-2 mr-px border rounded-lg">
      <a href='./signup' className="whitespace-nowrap text-2xl font-['Inter'] font-semibold text-white w-[210px] shrink-0">
        Login with Google
      </a>
      <img
        src="https://file.rendit.io/n/XOKcZzv0fFr9J9cajLLI.svg"
        className="min-h-0 min-w-0 w-8 shrink-0"
      />
    </div>
    <div className="border-solid border-[#2f4736] flex flex-row justify-center gap-2 h-12 shrink-0 items-center mb-4 mr-px border rounded-lg">
      <a className="whitespace-nowrap text-2xl font-['Inter'] font-semibold text-white w-1/2" href="google.com">
        Login with Facebook
      </a>
      <img
        src="https://file.rendit.io/n/RL0opZFFsdclP9NCTjfB.svg"
        className="min-h-0 min-w-0 w-8 shrink-0"
      />
    </div>
    <div className="whitespace-nowrap font-['Inter'] text-white self-end mr-[113px] w-1/2">
      Don’t have an account?{" "}
      <Link href='/signup' className="font-bold text-[#273b2d] contents">Created one</Link>
    </div>
  </div>
  <img
    src="https://file.rendit.io/n/WGpHGGEvV1dIjQ2qEUfv.png"
    className="min-h-0 min-w-0"
  />
  
  </form>
     
    
 
)

}





// import { useCallback } from "react";
// import styles from "./index.module.css";
// const Login = () => {
//   const onDontHaveAn1Click = useCallback(() => {
//     // Please sync "Create account" to the project
//   }, []);

//   return (
//     <div className={styles.login}>
//       <b className={styles.log0}>Log0</b>
//       <div className={styles.welcomeBack}>Welcome back!</div>
//       <div className={styles.letsGetYou}>
//         Let’s get you back on track as an artlover/artist
//       </div>
//       <div className={styles.emailWrapper}>
//         <div className={styles.email}>Email</div>
//       </div>
//       <div className={styles.passwordWrapper}>
//         <div className={styles.email}>Password</div>
//       </div>
//       <div className={styles.afrikanLoverWrapper}>
//         <div className={styles.afrikanLover}>Login</div>
//       </div>
//       <div className={styles.afrikanLoverParent}>
//         <div className={styles.afrikanLover}>Login with Google</div>
//         <img className={styles.mdigoogleIcon} alt="" src="/mdigoogle.svg" />
//       </div>
//       <div className={styles.afrikanLoverGroup}>
//         <div className={styles.afrikanLover}>Login with Facebook</div>
//         <img
//           className={styles.mdigoogleIcon}
//           alt=""
//           src="/icbaselinefacebook.svg"
//         />
//       </div>
//       <div className={styles.dontHaveAnContainer}>
//         <span>{`Don’t have an account? `}</span>
//         <b>Create one</b>
//       </div>
//       <img className={styles.loginChild} alt="" src="/frame-1@2x.png" />
//       <b className={styles.or}>Or</b>
//       <div className={styles.dontHaveAnContainer1} onClick={onDontHaveAn1Click}>
//         <span>{`Don’t have an account? `}</span>
//         <b className={styles.createdOne}>Created one</b>
//       </div>
//     </div>
//   );
// };

// export default Login;

 