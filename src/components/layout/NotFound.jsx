import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className='notFound'>
       <main>
        <div>
            <MdError />
            <h1>404</h1>
        </div>
        <p>Page not found, Click below to go to the home page</p>
        <Link to="/">Go To Home</Link>
        </main> 
    </section>
  )
}

export default NotFound;