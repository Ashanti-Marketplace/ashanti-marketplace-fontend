import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "../utils/contexts/userContext";
import styles from "../styles/login.module.css";

// login page
const Login = () => {
  const { state, dispatch } = useUser(),
    router = useRouter();

  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    event.preventDefault(); // Stop the form from submitting and refreshing the page.
    try {
      // Get data from the form.
      const data = {
        email: event.target.email.value,
        pwd:  event.target.password.value,
      };

      alert(data.pwd); //testing the form

      const JSONdata = JSON.stringify(data), // Send the data to the server in JSON format.
        endpoint = "/api/form"; // API endpoint where we send form data.

      // Form the request for sending data to the server.
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      const response = await fetch(endpoint, options), // Send the form data to our forms API  and get a response.
        result = await response.json(); // Get the response data from server as JSON. If server returns the name submitted, that means the form works.
      alert(`Is this your full name: ${result.data}`);
      if (result.ok) {
        // If login is successful, store authentication status in local storage
        //localStorage.setItem('isLoggedIn', true);

        // If login is successful, update the user state with server response Update the login status state

        dispatch({
          type: "SET_AUTH_STATUS",
          payload: { data, loggedIn: true },
        });

        // Redirect to products page
        router.push("/products");
      } else {
        //user doesnt exist
        router.replace("/signup");
        throw new Error();
        // Handle login error, show error message, etc.
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className={styles.login}>
      <b className={styles.log0}>Log0</b>
      <form onSubmit={handleSubmit}>
        <div className={styles.welcomeBack}>Welcome back!</div>
        <div className={styles.letsGetYou}>
          Let’s get you back on track as an artlover/artist
        </div>
        <div className={styles.emailWrapper}>
          <input
            className={styles.email}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.passwordWrapper}>
          <input
            className={styles.email}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <button className={styles.afrikanLoverWrapper} type="submit">
          Submit
        </button>
      </form>
      <div className={styles.afrikanLoverParent}>
        <Link className={styles.afrikanLover} href="/">
          Login with Google
        </Link>
        <img className={styles.mdigoogleIcon} alt="" src="/mdigoogle.svg" />
      </div>

      <div className={styles.afrikanLoverGroup}>
        <Link className={styles.afrikanLover} href="/">
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
        <Link className={styles.createdOne} href="/">
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

//   const handleLogout = () => {
// //     // Simulate a logout process and clear the user
//     dispatch({ type: 'SET_AUTH_STATUS', payload: { user: null, loggedIn: false } });
//   };

// //   // ... (rest of the component)
//  };
