import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {


    const [admin, setAdmin] = useState({});
    
    const handleBlur = e => {
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }



    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(admin);
        e.preventDefault()

        formData.append('email', admin.email);

        fetch('https://obscure-coast-47733.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Admin Access Given to New Email')
                }
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5no-gutter text-center" style={{ position: "absolute", right: 0, backgroundColor: "#F3F3F3", height: '100vh'}}>
                <h5 className="text-success">Make Admin</h5>
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="clientName"></label>
                        <input onBlur={handleBlur} type="text" className="form-control text-center" name="email" placeholder="New Admin Email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;