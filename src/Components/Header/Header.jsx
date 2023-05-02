import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import profileImg from '../../../src/assets/react.svg'
const Header = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                
                <div className="navbar-start">
                    <a className="text-2xl font-extrabold" >Nipponshoku</a>
                </div>
                <div className="navbar-center sm:hidden">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link className="btn btn-primary hover:bg-slate-300  btn-rounded" to={'/'}>Home</Link>
                        <Link className="btn btn-primary hover:bg-slate-300  btn-rounded" to={'/login'}>Login</Link>
                        <Link className="btn btn-primary hover:bg-slate-300  btn-rounded" to={'/register'}>Register</Link>
                    </ul>
                    </div>
                </div>
                <div className="navbar-center-mobile">
                    <div className='flex flex-row space-x-2'>
                        <Link className="btn btn-primary hover:bg-slate-300  btn-rounded" to={'/'}>Home</Link>
                        <Link className="btn btn-primary hover:bg-slate-300  btn-rounded" to={'/login'}>Login</Link>
                        <Link className="btn btn-primary hover:bg-slate-300  btn-rounded" to={'/register'}>Register</Link>
                    </div>
                    
                </div>
                <div className="navbar-end">
                    <button className="border-none">
                        <img src={profileImg} alt="" />
                    </button>
                    <button className="btn btn-primary hover:bg-slate-300  btn-rounded">Login</button>
                </div>
                </div>
        </div>
    );
};

export default Header;