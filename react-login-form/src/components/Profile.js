import React from 'react'
import { useParams } from 'react-router-dom'
import CustomNavbar from './Navbar';
import { createContext } from 'react';

const context = createContext();

function Profile() {
    const params = useParams();
    const name = params.name;
    
    return (
        <div>
            <context.Provider value={{ name }}>
                <CustomNavbar />
            </context.Provider>
        </div>
    )
}

export { context }
export default Profile