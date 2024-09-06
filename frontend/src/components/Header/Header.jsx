import React from 'react'
import MySVG from '../../assets/images/Logo.svg';
import LoginComponent from '../loginButton/loginButton'

function Header() {
    return (
        <>
            <div className='flex bg-[#0a182f] h-[8vh] justify-between items-center px-8'>
                <div className='h-[inherit] flex'>
                    <img src={MySVG} alt="Logo" />
                </div>
                <div>
                    <LoginComponent/>
                </div>
            </div>
        </>
    )
}

export default Header
