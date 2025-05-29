import React from 'react'
import {data} from "../restApi.json"

const Team = () => {
  return <section className='team' id='team'>
    <div className="container">
        <div className="heading_section">
            <h1 className='heading'>OUR TEAM</h1>
            <p>At Namaste Plates!, our kitchen is powered by some of the finest chefs who bring years of experience and a passion for authentic Indian cuisine. From expert tandoori masters to street food specialists, each dish is crafted with care and creativity. Backed by our dedicated staff, warm hospitality, and attention to detail, we ensure every guest feels right at home with every plate served.</p>
        </div>
        <div className="team_container">
            {
                data[0].team.map((element)=> {
                    return (
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.name} />
                            <h3>{element.name}</h3>
                            <p>{element.designation}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  </section>
}

export default Team
