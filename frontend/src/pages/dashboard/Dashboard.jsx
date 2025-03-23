import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Info from './Info';
import Mind from './Mind';
import Posts from './Posts';

function Dashboard() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <div className="row" style={{width: "100%"}}>
            <div className="col-4 p-5">
                <Info/>
            </div>
            <div className='col-8 p-5'>
                <Mind/>
            </div>
            </div>
        <Posts/>
        </>
     );
}

export default Dashboard;