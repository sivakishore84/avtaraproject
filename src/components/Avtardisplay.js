import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
const Avtardisplay = () => {
    const location = useLocation();
    useEffect(() => {
        console.log(location.state, 'state');
    }, [location]);

    return (
        <>
            <div className='container'>
                <div className='row'><div className="column"><h3>User Details</h3></div></div>
                <div className='row'><div className="column">Email: {location.state.email}</div></div>
                <div className='row'><div className="column">First Name:  {location.state.first_name}</div></div>
                <div className='row'><div className="column">Last Name:  {location.state.last_name}</div></div>
            </div>
        </>
    );
}

export default Avtardisplay;