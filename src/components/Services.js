import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Services = () => {



    return (
        <>
            <h1> Hello from Services component </h1>
            {/* <button> click me</button> */}
            <NavLink to={"/services/product/"} >Products</NavLink>
            <NavLink to={"/services/product/product1"} >Products1</NavLink>
            <NavLink to={"/services/product/product1/product2"} >Products2</NavLink>
            <Outlet />
        </>
    );
}
export default Services;