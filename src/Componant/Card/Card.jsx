import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './_Card.scss';

let projects = [
    {
        name: 'Laundry Cart',
        background: "http://res.cloudinary.com/doh91aq3h/image/upload/v1675941047/anx5ddhmpziz220i6blq.png",
        tech: 'MERN Stack'
    }, {
        name: 'Bloging App',
        background: "http://res.cloudinary.com/doh91aq3h/image/upload/v1675941668/d4fxlmdv6xzwl4yfbi1g.png",
        tech: 'MERN Stack'
    }, {
        name: 'Bloging App',
        background: "http://res.cloudinary.com/doh91aq3h/image/upload/v1675941047/anx5ddhmpziz220i6blq.png",
        tech: 'MERN Stack'
    }, {
        name: 'Bloging App',
        background: "http://res.cloudinary.com/doh91aq3h/image/upload/v1675941047/anx5ddhmpziz220i6blq.png",
        tech: 'MERN Stack'
    }, {
        name: 'Bloging App',
        background: "http://res.cloudinary.com/doh91aq3h/image/upload/v1675941047/anx5ddhmpziz220i6blq.png",
        tech: 'MERN Stack'
    }, {
        name: 'Bloging App',
        background: "http://res.cloudinary.com/doh91aq3h/image/upload/v1675941047/anx5ddhmpziz220i6blq.png",
        tech: 'MERN Stack'
    }, {
        name: 'Bloging App',
        background: "http://res.cloudinary.com/doh91aq3h/image/upload/v1675941047/anx5ddhmpziz220i6blq.png",
        tech: 'MERN Stack'
    }
]



const Card = () => {
    const navigate = useNavigate();
    const [hover, setHover] = useState([]);

    const handleHover = (e, i) => {
        e.preventDefault();
        let newHover = [...hover];
        newHover[i] = !newHover[i];
        setHover(newHover);
    }

    const handleHoverExit = (e, i) => {
        e.preventDefault();
        let newHoverExit = [...hover];
        newHoverExit[i] = !newHoverExit[i];
        setHover(newHoverExit);
    }

  return (
    <span className='cards-container'>
        {projects.map((project, i) => {
            {hover.push(false)}
            return (
            <> 
                <div className="card-box"
                key={`card_box${i}`}
                    onMouseEnter={(e) => handleHover(e, i)}
                    onMouseLeave={(e) => handleHoverExit(e, i)}
                    >
                { 
                // hover[i] ? 
                    <span className='card' 
                        key={`card${i}`}
                        style={{
                        backgroundImage: `url(${project.background})`,
                        backgroundSize: 'cover',
                        backgroundPositionX: 'center',
                    }}>hover
                    <button onClick={() => navigate('/project')}>Know more</button>
                    </span> 
                // :
                //     <span className='card' 
                //         style={{
                //         backgroundImage: `url(${project.background})`,
                //         backgroundSize: 'cover',
                //         backgroundPositionX: 'center',
                //         }}>not hover
                //         {/* <button>Know more</button> */}
                //     </span>
                    }
                    </div>
            </>
            )
        })}
    </span>
  )
}

export default Card;