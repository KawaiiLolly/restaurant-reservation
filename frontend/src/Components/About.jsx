import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const About = () => {
    return (
        <>
            <section className='about' id='about'>
                <div className="container">
                    <div className="banner">
                        <div className="top">
                            <h1 className="heading">ABOUT US</h1>
                            <p>Namaste Plates!</p>
                        </div>
                        <p className="mid">
                            Is your one-stop destination to experience the full spectrum of Indian culinary magic—served with warmth, culture, and a dash of spice. From the comforting aroma of South Indian breakfasts like crispy dosas, soft idlis, and piping hot filter coffee, to hearty North Indian lunch thalis with buttery naans, creamy dals, and flavorful curries—every plate is a celebration of India’s rich regional heritage. Our dinners bring you the bold taste of tandoori grills, biryanis, and rich Mughlai delicacies that warm the soul. Craving something in between? Dive into our selection of all-time favorite snacks—chaat, samosas, pakoras, and spicy vada pavs that burst with flavor in every bite. Whether you're starting your day or winding down your night, Namaste Plates! serves tradition, taste, and togetherness on every table.
                        </p>
                        <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight/></span></Link>
                    </div>
                     <div className="banner">
                        <img src="/biryani.png" alt="about" />
                     </div>
                </div>
            </section>
        </>
    )
}

export default About
