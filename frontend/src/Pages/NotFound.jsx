import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
const NotFound = () => {
    return (
        <>
            <section className="notFound">
                <div className="container">
                    <img src="/notFound.png" alt="notFound" width="600" height="600"/>
                    <h1>LOOKS LIKE YOU'RE LOST</h1>
                    <p>We can't seem to find you the page you are looking for.</p>
                    <Link to={'/'}>Back to Home <span><HiOutlineArrowNarrowRight/></span></Link>
                </div>
            </section>
        </>
    )
}

export default NotFound