import React from 'react';
import "./Card.css"

const Card = ({name,birthday,img,status,nickname,portrayed}) =>{
    return(
        <div className="card">
            <div className="inner">
                <div className="front">
                    <img src={img}/>
                    <h2 className="name">{name}</h2>
                </div>
                <div className="back">
                    <p>
                        Actor Name: {portrayed}<br />
                        Nickname: {nickname}<br />
                        Birthday: {birthday}<br />
                        status:{status}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Card