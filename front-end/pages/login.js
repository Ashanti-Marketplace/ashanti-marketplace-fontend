import Link from "next/link"
import { useRouter } from 'next/router';
import {  useUser } from '../utils/contexts/userContext';
import styles from "../styles/login.module.css";
const Login = () => {


const { dispatch } = useUser();

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
  
    alert(data)
    router.push('/products');
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
      //localStorage.setItem('isLoggedIn', true);

    // If login is successful, update the user state with server response

   // Update the login status state
    // Perform login logic, if successful dispatch LOGIN action
    dispatch({ type: 'SET_AUTH_STATUS' });

    // Redirect to products page
    router.push('/products');
    } else {
      // Handle login error, show error message, etc.
      
  } 
     }catch (error) {
      console.log(error.response);
    }
   
  }
  return (
   <div className={styles.login}>
      <b className={styles.log0}>Log0</b>
<form  onSubmit={handleSubmit}>
     <div className={styles.welcomeBack}>Welcome back!</div>
       <div className={styles.letsGetYou}>  
         Let’s get you back on track as an artlover/artist
       </div>
       <div className={styles.emailWrapper}>
            <input className= {styles.email} type="email" id="email" name="email"  placeholder="Email" required/>
         
       </div>
       <div className={styles.passwordWrapper}>
           <input className={styles.email} type="password" id="password" name="password" placeholder="Password" required/>
       </div>
       
<button className={styles.afrikanLoverWrapper} type="submit">Submit</button>
        
    

</form>
      <div className={styles.afrikanLoverParent}>
      <Link className={styles.afrikanLover} href= '/'>
      Login with Google
      </Link>
        <img className={styles.mdigoogleIcon} alt="" src="/mdigoogle.svg" />
      </div>

      <div className={styles.afrikanLoverGroup}>

      <Link className={styles.afrikanLover} href= '/'>
      Login with Facebook
      </Link>

        <img
          className={styles.mdigoogleIcon}
          alt=""
          src="/icbaselinefacebook.svg"
        />
      </div>
      <div className={styles.dontHaveAnContainer}>
        <span>{`Don’t have an account? `}</span>
        <b>Create one</b>
      </div>
      <img className={styles.loginChild} alt="" src="/frame-1@2x.png" />
      <b className={styles.or}>Or</b>
      
      <div className={styles.dontHaveAnContainer1}>
        <span>{`Don’t have an account? `}</span>
        <Link className={styles.createdOne} href= '/'>
        Created one
      </Link>
      </div>
    </div>
  );
};

export default Login;

 

// import { useUser } from './UserProvider';

// const MyComponent = () => {
//   const { state, dispatch } = useUser();

//   const handleLogin = () => {
//     // Simulate a login process and set the user
//     const user = { id: 1, username: 'exampleuser' };
//     dispatch({ type: 'SET_AUTH_STATUS', payload: { user, loggedIn: true } });
//   };

//   const handleLogout = () => {
//     // Simulate a logout process and clear the user
//     dispatch({ type: 'SET_AUTH_STATUS', payload: { user: null, loggedIn: false } });
//   };

//   // ... (rest of the component)
// };
