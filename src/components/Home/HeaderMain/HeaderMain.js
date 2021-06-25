import React from 'react';
// import chair from '../../../images/muscular-car-service-worker-repairing-vehicle.jpg';

const HeaderMain = () => {
    return (
        <main style = {{height: '600px'}}className = "row d-flex align-items-center">
            <div className="col-md-4 offset-md-6 text-end">
                <h4 style = {{color: 'white', fontSize: '2em'}}><b>Trust Your Vehicle to</b></h4>
                <p style = {{color: 'yellow', fontSize: '6em', fontWeight:'bold'}}>Certified <br /> Technicians</p>
                <p className = '' style = {{color: 'white', fontSize: '2em', fontWeight:'bold'}}>SERVICE, MAINTENANCE AND REPAIR BY THE CERTIFIED SERVICE EXPERTS</p>
            </div>
            {/* <div className="col-md-6">
                <img src={chair} alt="i" className = "img-fluid" />
            </div> */}
        </main>
    );
};

export default HeaderMain;