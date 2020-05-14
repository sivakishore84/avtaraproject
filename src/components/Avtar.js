import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './App.css';

function Avtar() {
    let [responseData, setResponseData] = useState('');
    let history = useHistory();

    const fetchData = async () => {
        try {
            await axios.get(`https://reqres.in/api/users?per_page=12`)
                .then(response => {
                    setResponseData(response.data)
                })
        }
        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    const passData = (image) => {
        history.push({
            pathname: '/display',
            state: image
        })
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    {Object.keys(responseData).map(res => res === "data" ? Object.values(responseData[res]).map(img =>
                        <div className='column' key={img.id}>
                            <img src={img.avatar} onClick={() => passData(img)} /><br /><br />
                        </div>
                    ) : '')}
                </div>
            </div>

        </>
    );
}

export default Avtar;