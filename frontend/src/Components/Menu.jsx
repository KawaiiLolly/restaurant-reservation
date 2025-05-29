import React from 'react'
import { data } from "../restApi.json"

const Menu = () => {
    return (
        <>
            <section className="menu" id="menu">
                <div className="container">
                    <div className="heading_section">
                        <h1 className="heading">POPULAR DISHES</h1>
                        <p>Discover the heart of Indian cuisine with our handpicked popular dishes—each one a crowd favorite, bursting with rich flavors, vibrant spices, and timeless tradition. From street-style bites to royal recipes, every dish tells a story worth savoring.</p>
                    </div>
                    <div className="dishes_container">
                        {
                            data[0].dishes.map((element) => {
                                return(
                                    <div className="card" key={element.id}>
                                        <img src={element.image} alt={element.title} />
                                        <h3>{element.title}</h3>
                                        <button>{element.category}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu
