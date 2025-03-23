import React from 'react';

function Info() {
    return ( 
        <>
        <div className="container p-3" style={{backgroundColor:"#f5f5f5",borderRadius:"20px"}}>
            <h2>Basic Info</h2>
            <button className="border basic mb-3"> <i class="fa-regular fa-pen-to-square"></i> Add Bio</button>
            <button className="border basic mb-3"><i class="fa-solid fa-user-pen"></i> Edit Details</button>
            <button className="border basic"><i class="fa-regular fa-face-smile"></i> Add Hobbies</button>   
        </div>
        </>
     );
}

export default Info;