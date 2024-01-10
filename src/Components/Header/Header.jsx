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
        <div className='mycontainer mx-auto relative w-[1200px]'>
            <div className="navbar absolute z-10 flex">
                
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-36 text-[#E6E600]">
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
                    <a className="text-2xl font-extrabold text-[#E6E600] tracking-widest logo" >Nipponshoku</a>
                </div>
                
                <div className=" navbar-center  hidden lg:flex">

                    <div className='flex flex-row space-x-2 text-[#E6E600]'>
                        <Link className="btn btn-ghost normal-case text-xl" to={'/'}>Home</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to={'/blog'}>Blog</Link>
                        {/* <Link className="btn btn-ghost normal-case text-xl" to={'#popular-chefs'}>Popular Chefs</Link> */}

                        
                        {user?
                            
                            <Link onClick={logoutHandler} className="btn btn-ghost normal-case text-xl" to={'/register'}>Sign Out</Link>
                            
                            :
                            <div className="login-register flex">
                                <Link className="btn btn-ghost normal-case text-xl" to={'/login'}>Login</Link>
                                <Link className="btn btn-ghost normal-case text-xl" to={'/register'}>Register</Link>
                            </div>
                        }
                    </div>  
                </div>

                <div className="navbar-end ">
                {user?
                        <div className="userinfo flex items-center justify-center">
                            
                            {
                                show&&<p className='userEmail rounded-lg font-bold mr-3 text-[#E6E600]'>{user?.displayName}</p>
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

            <div className="navbar bg-base-100 hidden">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                        <summary>Parent</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
                </div>
        </div>
    );
};

export default Header;