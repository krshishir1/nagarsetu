import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";

function LoginComponent() {
    const [showOptions, setShowOptions] = useState(false);
    const [userType, setUserType] = useState(null);

    const handleLoginClick = () => {
        setShowOptions(true);
    };

    const handleUserTypeClick = (type) => {
        setUserType(type);
    };


    const App = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        
        const handleLogin = () => {
            
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        
        
        setIsLoggedIn(true);
        }

    }

    return (
        <div className="flex flex-col items-center justify-center">
        {!showOptions && !userType && (
            <button 
            onClick={handleLoginClick}
            className="px-6 py-2 flex justify-center gap-1 items-center border-[#1889DF] text-[#1889DF] hover:bg-[#1889DF] hover:text-white rounded-md border-[1.5px] focus:outline-none"
            >
                <FaRegUser />
                Login
            </button>
        )}

        {showOptions && !userType && (
            <div className="rounded-lg flex-col justify-evenly space-x-4 mt-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-transparent border-[1px] text-white px-4 py-4">
                <div className='flex justify-center items-center font-semibold mb-4'>
                    I am
                </div>
                <button
                    onClick={() => handleUserTypeClick('admin')}
                    className="px-6 py-3 border-[1px] border-[#1889DF] text-[#1889DF] hover:bg-[#1889DF] hover:text-white bg-transparent rounded-md  focus:outline-none"
                >
                    Admin
                </button>
                <button
                    onClick={() => handleUserTypeClick('employee')}
                    className="px-6 py-3 border-[1px] border-[#1889DF] text-[#1889DF] hover:bg-[#1889DF] hover:text-white rounded-md focus:outline-none"
                >
                    Employee
                </button>
            </div>
        )}

        
        {userType && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold text-center mb-6">
                {userType === 'admin' ? 'Admin' : 'Employee'} Login
            </h2>
            <form>
                <div className="mb-4">
                <label
                    htmlFor="username"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring "
                />
                </div>
                <div className="mb-6">
                <label
                    htmlFor="password"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring "
                />
                </div>
                <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                Login
                </button>
            </form>
            </div>
        )}
        </div>
    );
}

export default LoginComponent;
