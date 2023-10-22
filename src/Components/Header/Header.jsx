import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import profileImg from '../../../src/assets/react.svg';
import { AuthContext } from "../../Provider/authProvider";

const Header = () => {
    // COntext API load
    const [show, setShow] = useState(false)

    const {user, logout} = useContext(AuthContext);
    // console.log('header : ' + user.email);


    const logoutHandler = () =>{
        logout()
            .then(()=>{

            })
            .catch(error =>{
                console.log()
            })

        }
    return (
        <div className='container mx-auto relative'>
            <div className="navbar absolute z-10 flex align-middle text-red-500">
                
                <div className="navbar-start">
                    <a className="text-2xl btn btn-primary font-extrabold text-white" >Nipponshoku</a>
                </div>
                <div className="navbar-end sm:hidden">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-36 ">
                        <Link className="btn btn-ghost normal-case text-xl" to={'/'}>Home</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to={'/blog'}>Blog</Link>
                        {user?
                            
                            <Link onClick={logoutHandler} className="btn btn-ghost normal-case text-xl" to={'/'}>Sign Out</Link>
                            
                            :
                            <div className="login-register flex flex-col">
                                <Link className="btn btn-ghost normal-case text-xl" to={'/login'}>Login</Link>
                                <Link className="btn btn-ghost normal-case text-xl" to={'/register'}>Register</Link>
                            </div>
                        }

                    </ul>
                    </div>
                </div>
                <div className=" navbar-end navbar-end-mobile">

                    <div className='flex flex-row space-x-2'>
                        <Link className="btn btn-ghost normal-case text-xl" to={'/'}>Home</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to={'/blog'}>Blog</Link>

                        
                        {user?
                            
                            <Link onClick={logoutHandler} className="btn btn-ghost normal-case text-xl" to={'/register'}>Sign Out</Link>
                            
                            :
                            <div className="login-register flex">
                                <Link className="btn btn-ghost normal-case text-xl" to={'/login'}>Login</Link>
                                <Link className="btn btn-ghost normal-case text-xl" to={'/register'}>Register</Link>
                            </div>
                        }
                    </div>  
                    {user?
                        <div className="userinfo flex items-center justify-center">
                            
                            {
                                show&&<p className='userEmail rounded-lg font-bold mr-3'>{user?.displayName}</p>
                            }
                            <div onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)} className="userImg border-none w-12 h-12">
                                <img className='rounded-full' src={user.photoURL} alt="" />
                            </div>
                            {/* <Link onClick={logoutHandler} className="btn btn-ghost normal-case text-xl" to={'/register'}>Sign Out</Link> */}
                        </div>
                        :
                        <button className="border-none w-12 h-12 rounded-full">
                                <img src={profileImg} alt="" />
                        </button>
                        
                    }
                </div>
                {/* <div className="navbar-end">
                    {user?
                        <div className="userinfo flex items-center justify-center">
                            
                            {
                                show&&<p className='userEmail rounded-lg font-bold mr-3'>{user?.displayName}</p>
                            }
                            <div onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)} className="userImg border-none w-12 h-12">
                                <img className='rounded-full' src={user.photoURL} alt="" />
                            </div>
                        </div>
                        :
                        <button className="border-none w-12 h-12 rounded-full">
                                <img src={profileImg} alt="" />
                        </button>
                        
                    } 
                </div> */}
                </div>
        </div>
    );
};

export default Header;