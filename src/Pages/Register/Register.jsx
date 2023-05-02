import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';
import { stringify } from "postcss";


const Register = () => {
    
    const auth = getAuth(app);

    const [newuser , setNewUser] = useState({});

    const onSubmitRegisterHandler = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const url = event.target.ProfilePicUrl.value;

        console.log(email , password , name , url);

        createUserWithEmailAndPassword(auth, email, password, name, url)
        .then(result =>{
            const logInUser = result.user;
            console.log(logInUser);
            // setSuccess('User has been added Successfully');
            event.target.reset();//clear input field after successfull submission
            setNewUser(logInUser);

            // EMail Varification

            // emailVarification(logInUser);
            updateUserHandler(logInUser , name ,url)

        })
        .catch(error=>{
            console.error(error.code);
            console.error(error.message);
            // setError(error.message);
            
        })

        const updateUserHandler = (user, name ,url) =>{
            updateProfile(user , {
                displayName : name,
                photoURL : url
            })
                .then(()=>{
                    console.log(user.displayName);
                })
                .catch(error=>{
                    // setError(error.message);
                })
        }


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="container mx-auto hero-content flex-col lg:flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={onSubmitRegisterHandler} className="card-body">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required/>

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required/>

                            <label className="label">
                                <span className="label-text">Profile Picture URL</span>
                            </label>
                            <input type="text" placeholder="url" name='ProfilePicUrl' className="input input-bordered" required/>

                            <label className="label">
                                <p>Already Registerd ? <Link to={'/login'} className="label-text-alt link link-hover">Login</Link></p>
                            </label>
                            <input type="submit" value="Register"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;