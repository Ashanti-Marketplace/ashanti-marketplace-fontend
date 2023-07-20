import Link from "next/link"
import { useUser } from "../utils/contexts/userContext"
import { useRouter } from "next/router";

export default function signup () {

  const { setUser,setLoggedIn } = useUser();
  
  const router = useRouter();
     // Handles the submit event on form submit.

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    try {
       // Get data from the form.
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      pwd: event.target.password.value
    }

    console.log(data);
 
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
  console.log(JSONdata);
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


    // If login is successful, store authentication status in local storage
    localStorage.setItem(isLoggedIn);

    // Redirect to products page
    router.push('/onboarding');
    } else {
      // Handle login error, show error message, etc.
      
  } 
  
    } catch (error) {
      
    }
   
  }  
  return (
    <form onSubmit={handleSubmit}>
          <div>
        <div className="overflow-hidden bg-[#090e0b] flex flex-row gap-16 w-full items-center">
  <img
    src="https://file.rendit.io/n/EwCyIn24jyvNw8BCgori.png"
    className="min-h-0 min-w-0"
  />
  <div className="self-end flex flex-col mb-[108px] gap-3 w-2/5 h-[779px]">
    <div className="text-5xl font-['Inter'] font-bold text-white self-start mb-4 w-32">
      Log0
    </div>
    <div className="whitespace-nowrap text-5xl font-['Ubuntu'] text-white self-start mb-2 w-3/5">
      Create an account
    </div>
    <div className="whitespace-nowrap text-2xl font-['Inter'] text-white mb-4">
      Sign up and collect African arts from all over the world.
    </div>
    <div className="border-solid border-white flex flex-col justify-center h-12 shrink-0 items-start mb-4 mr-20 border-t-0 border-b border-x-0">
      <input  type="text"  name=" name" id="name" className="text-2xl font-['Inter'] font-medium text-white w-16" placeholder="Name" required/>
      
    </div>
    <div className="border-solid border-white flex flex-col justify-center h-12 shrink-0 items-start mb-4 mr-20 border-t-0 border-b border-x-0">
    <input  type="email"  name=" email" id="email" className="text-2xl font-['Inter'] font-medium text-white w-16" placeholder="E-mail" required/>
    </div>
    <div className="border-solid border-white flex flex-col justify-center h-12 shrink-0 items-start mb-4 mr-20 border-t-0 border-b border-x-0">
      
      <input  type="password"  name="password" id="password" className="text-2xl font-['Inter'] font-medium text-white w-[113px]" placeholder="Password" required/>
    </div>
    <div className="bg-[#b38af1] flex flex-col justify-center h-12 shrink-0 items-center mb-4 ml-px mr-20 rounded-lg">
      <button className="whitespace-nowrap text-2xl font-['Inter'] font-semibold text-white w-48" type="submit">
        Create Account
      </button>
    </div>
    <div className="font-['Inter'] font-bold text-white self-start ml-64 w-5">
      Or
    </div>
    <div className="border-solid border-[#2f4736] flex flex-row justify-center gap-2 h-12 shrink-0 items-center mb-2 mr-20 border rounded-lg">
      <a className="whitespace-nowrap text-2xl font-['Inter'] font-semibold text-white w-2/5">
        Sign up with Google
      </a>
      <img
        src="https://file.rendit.io/n/fNCYzi6nwEpzDXaP4oG9.svg"
        className="min-h-0 min-w-0 w-8 shrink-0"
      />
    </div>
    <div className="border-solid border-[#2f4736] flex flex-row justify-center gap-2 h-12 shrink-0 items-center mb-2 ml-px mr-20 border rounded-lg">
      <a className="whitespace-nowrap text-2xl font-['Inter'] font-semibold text-white w-1/2">
        Sign up with Facebook
      </a>
      <img
        src="https://file.rendit.io/n/xcWq7lTQoiAQR9wLEWH5.svg"
        className="min-h-0 min-w-0 w-8 shrink-0"
      />
    </div>
    <div className="whitespace-nowrap font-['Inter'] text-white self-start ml-[147px]">
      Already have an account?{" "}
      < Link href='/login' className="font-bold text-[#2f4736] contents">Login</Link>
    </div>
  </div>
</div>

    </div>
    </form>
    
  )

}





// import { useCallback } from "react";
// import styles from "./index.module.css";
// const CreateAccount = () => {
//   const onAlreadyHaveAnClick = useCallback(() => {
//     // Please sync "Login" to the project
//   }, []);

//   return (
//     <div className={styles.createAccount}>
//       <img className={styles.createAccountChild} alt="" src="/frame-1@2x.png" />
//       <b className={styles.log0}>Log0</b>
//       <div className={styles.createAnAccount}>Create an account</div>
//       <div className={styles.signUpAnd}>
//         Sign up and collect African arts from all over the world.
//       </div>
//       <div className={styles.nameWrapper}>
//         <div className={styles.name}>Name</div>
//       </div>
//       <div className={styles.emailWrapper}>
//         <div className={styles.name}>Email</div>
//       </div>
//       <div className={styles.passwordWrapper}>
//         <div className={styles.name}>Password</div>
//       </div>
//       <div className={styles.afrikanLoverWrapper}>
//         <div className={styles.afrikanLover}>Create Account</div>
//       </div>
//       <div className={styles.afrikanLoverParent}>
//         <div className={styles.afrikanLover}>Sign up with Google</div>
//         <img className={styles.mdigoogleIcon} alt="" src="/mdigoogle.svg" />
//       </div>
//       <div className={styles.afrikanLoverGroup}>
//         <div className={styles.afrikanLover}>Sign up with Facebook</div>
//         <img
//           className={styles.mdigoogleIcon}
//           alt=""
//           src="/icbaselinefacebook.svg"
//         />
//       </div>
//       <div
//         className={styles.alreadyHaveAnContainer}
//         onClick={onAlreadyHaveAnClick}
//       >
//         <span>{`Already have an account? `}</span>
//         <b className={styles.login}>Login</b>
//       </div>
//       <b className={styles.or}>Or</b>
//     </div>
//   );
// };

// export default CreateAccount;
