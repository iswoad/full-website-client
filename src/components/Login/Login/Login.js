import React, { useContext, useState } from 'react';
import firebase from 'firebase/app'
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}





const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
    })


    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode)
                console.log(errorMessage)

            });
    }

    return (
        <div className="login-page container col-md-10 offset-md-4">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-6 shadow p-5">
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-danger">Forgot your password?</label>
            </div>
            <div className="from-group mt-5">
              <button onClick={handleGoogleSignIn} className="btn btn-dark" >Google Sign in</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;