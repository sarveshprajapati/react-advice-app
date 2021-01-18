import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const AdviceTemplate = () => {
    useEffect(()=>{
        fetchAdvice();
    },[]);
    const [advice,setAdvice]=useState(null);
    const fetchAdvice = ()=>{
        Axios.get('https://api.adviceslip.com/advice')
            .then(res=>{
                // console.log(res);
                const {advice} = res.data.slip;
                setAdvice(advice);
            })
    };
    const changeHandler = ()=>{
        fetchAdvice();
    };
    return (
        <div className="advice-template">
            <div className="featured">
                <p>{advice}</p>
            </div>
            <button onClick={changeHandler}> Next </button>
        </div>
    )
}

export default AdviceTemplate;
