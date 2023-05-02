import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const onSubmitLoginHandler= (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email , password);

        
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="container mx-auto hero-content flex-col lg:flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={onSubmitLoginHandler} className="card-body">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <p>Not Registerd? <Link to={'/register'} className="label-text-alt link link-hover">PLease Register</Link></p>
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <input type="submit" value="Login"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;